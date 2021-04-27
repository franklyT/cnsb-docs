import useScrollPosition from '@react-hook/window-scroll'
import React, { MutableRefObject, useContext, useEffect, useState } from "react";

import { hashString } from '../../../shared/utils/hash';

import styles from './Category.module.scss';
import importFolder from "../../../shared/utils/importFolder";
import SearchContext from '../SearchContext';

const whiteMethodImports = importFolder(require.context('../../../../docs/methods/White', false, /\.md/));
const yellowMethodImports = importFolder(require.context('../../../../docs/methods/Yellow', false, /\.md/));

export function Category(props: { sidebarRef: MutableRefObject<any> }) {
    const { sidebarRef } = props;
    const scrollY = useScrollPosition(3); /* 3 FPS is mostly sufficient and relatively low-impact on the CPU */
    const [activeElm, setActiveCard] = useState((null as any));
    const [activeLink, setActiveLink] = useState((null as any));
    const {searchValue} = useContext(SearchContext);

    function getActiveCard() {
        // This function is optimized for raw speed, and will look a bit wonky
        // TODO: Building and querying a context key-value map with height properties (i.e. avoiding DOM queries) will produce improvements in both structure and performance

        let nodeList = document.body.querySelectorAll('[id^=\'card_\']');
        let elms = [];
        for (let i = nodeList.length; i--; elms.unshift(nodeList[i]));

        let topMostElm = elms[0];
        let i = 0;
        while (elms[i]) {
            if (Math.abs(elms[i].getBoundingClientRect().top) < Math.abs(topMostElm.getBoundingClientRect().top)) topMostElm = elms[i];
            i++;
        }

        return topMostElm;
    }

    function getActiveLink() {
        if (!activeElm) return;

        // update url
        window.history.pushState("object or string", "Title", `/#${activeElm.id}`);
        return document.getElementById((`link_${(activeElm as any)!.id.replace('card_', '')}`));
    }

    useEffect(() => {
        setActiveCard(getActiveCard());
        setActiveLink(getActiveLink());
    }, [scrollY]);

    useEffect(() => {
        if (!activeElm || !activeLink) return;
        if (activeElm.id.replace("card_", "") !== activeLink.id.replace("link_", "")) return;

        sidebarRef.current.scroll(0, activeLink!.offsetTop - 400);
    }, [activeElm, activeLink]);


    return (
        <>
            {[["White", whiteMethodImports], ["Yellow", yellowMethodImports]].map((arr) => {
                let [beltStr, beltIndex] = arr;
                return (
                    <div key={hashString(beltStr.toString())}>
                        <p className={`${styles.sidebarItem} ${styles.sidebarItemCategory}`}> {beltStr} </p>
                        {Object.values(beltIndex).sort().map((method: any) => {
                            const METHOD_TITLE = method.default.substring(
                                method.default.lastIndexOf("/") + 1,
                                method.default.indexOf(".")
                            );
                            const HASHED_ELM = document.getElementById(`card_${(METHOD_TITLE)}`);

                            if (searchValue && !METHOD_TITLE.toLowerCase().includes(searchValue)) return;

                            return (
                                <a className={styles.link} href={`#card_${METHOD_TITLE}`} key={hashString(METHOD_TITLE)} id={`link_${METHOD_TITLE}`}>
                                    <div className={`${styles.sidebarItemContainer} ${activeElm === HASHED_ELM ? styles.activeElm : ''}`}>
                                        <span className={`${styles.sidebarItem}`}>
                                            {METHOD_TITLE}
                                        </span>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                )
            })}

        </>
    )
}

export default React.memo(Category);