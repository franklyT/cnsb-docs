import useScrollPosition from '@react-hook/window-scroll'
import React, { MutableRefObject, useContext, useEffect, useState } from "react";

import styles from './Category.module.scss';
import importFolder from "../../../shared/utils/importFolder";
import { Belt } from './Belt/Belt';
import SearchContext from '../SearchContext';

const gdpImports = importFolder(require.context('../../../../docs/gdp', true, /\.md/));

const conceptImports = importFolder(require.context('../../../../docs/concepts', true, /\.md/));

const exampleGamesImports = importFolder(require.context('../../../../docs/exampleGames', true, /\.md/));

export function Category(props: { sidebarRef: MutableRefObject<any> }) {
    const { sidebarRef } = props;
    const scrollY = useScrollPosition(3); /* 3 FPS is mostly sufficient and relatively low-impact on the CPU */
    const [activeCard, setActiveCard] = useState((null as any));
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
        if (!activeCard) return;

        // update url
        window.history.pushState("object or string", "Title", `/#${activeCard.id}`);

        return document.getElementById((`link_${(activeCard as any)!.id.replace('card_', '')}`));
    }

    useEffect(() => {
        // console.log('render count')

        setActiveCard(getActiveCard());
        setActiveLink(getActiveLink());
    }, [activeCard, scrollY]);

    useEffect(() => {
        if (!activeCard || !activeLink) return;

        if (activeCard.id.replace("card_", "") !== activeLink.id.replace("link_", "")) return;

        sidebarRef.current.scroll(0, activeLink!.offsetTop - 400);
    }, [activeCard, activeLink]);

    const GDP = {
        category: "GDP",
        markdownImports: gdpImports,
    }

    const concepts = {
        category: "Concepts",
        markdownImports: conceptImports,
    }

    const exampleGames = {
        category: "Example Games",
        markdownImports: exampleGamesImports,
    }

    function Category(obj: any) {
        const { category, markdownImports } = obj;
        

        const [isCollapsed, setIsCollapsed] = useState(false);

        useEffect(()=> {
            if (!activeLink || !activeLink.parentElement || !activeLink.parentElement.parentElement) return;

            if (searchValue || activeLink.parentElement.parentElement.id === `parent_${category}`) {
                setIsCollapsed(true);
            } else if (!searchValue) {
                setIsCollapsed(false);
            }
        }, [searchValue, activeLink]);    

        return (
            <div id={`parent_${category}`} className={`${styles.sidebarItem} ${styles.sidebarItemCategory} ${isCollapsed ? styles.sidebarItemCategoryActive : ""}`}>

                <p className={`${styles.sidebarCategory}`} onClick={() => setIsCollapsed(!isCollapsed)}>
                    {category}
                    <span className={`${styles.caret} ${isCollapsed ? styles.caretRotated : ''}`}> {'>'} </span>
                </p>

                <Belt props={{ activeElm: activeCard, markdownImports: markdownImports }} />
            </div>
        )
    }

    return (
        <>
            { Category(GDP) }
            { Category(concepts) }
            { Category(exampleGames) }
        </>
    )
}

export default React.memo(Category);