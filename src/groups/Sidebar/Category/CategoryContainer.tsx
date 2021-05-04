import useScrollPosition from '@react-hook/window-scroll'
import React, { MutableRefObject, useContext, useEffect, useRef, useState } from "react";

import styles from './Category.module.scss';
import importFolder from "../../../shared/utils/importFolder";
import { BeltContainer } from './Belt/BeltContainer';

const whiteGdpImports = importFolder(require.context('../../../../docs/gdp/White', false, /\.md/));
const yellowGdpImports = importFolder(require.context('../../../../docs/gdp/Yellow', false, /\.md/));
const orangeGdpImports = importFolder(require.context('../../../../docs/gdp/Orange', false, /\.md/));
const greenGdpImports = importFolder(require.context('../../../../docs/gdp/Green', false, /\.md/));

const whiteConceptImports = importFolder(require.context('../../../../docs/concepts/White', false, /\.md/));
const yellowConceptImports = importFolder(require.context('../../../../docs/concepts/Yellow', false, /\.md/));
const orangeConceptImports = importFolder(require.context('../../../../docs/concepts/Orange', false, /\.md/));
const greenConceptImports = importFolder(require.context('../../../../docs/concepts/Green', false, /\.md/));

const whiteExampleGameImports = importFolder(require.context('../../../../docs/exampleGames/White', false, /\.md/));
const yellowExampleGameImports = importFolder(require.context('../../../../docs/exampleGames/Yellow', false, /\.md/));
const orangeExampleGameImports = importFolder(require.context('../../../../docs/exampleGames/Orange', false, /\.md/));
const greenExampleGameImports = importFolder(require.context('../../../../docs/exampleGames/Green', false, /\.md/));

export function Category(props: { sidebarRef: MutableRefObject<any> }) {
    const { sidebarRef } = props;
    const scrollY = useScrollPosition(3); /* 3 FPS is mostly sufficient and relatively low-impact on the CPU */
    const [activeElm, setActiveCard] = useState((null as any));
    const [activeLink, setActiveLink] = useState((null as any));

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

    const concepts = {
        category: "Concepts",
        white: {
            name: "White",
            markdownImports: whiteConceptImports
        },
        yellow: {
            name: "Yellow",
            markdownImports: yellowConceptImports
        },
        orange: {
            name: "Orange",
            markdownImports: orangeConceptImports
        },
        green: {
            name: "Green",
            markdownImports: greenConceptImports
        }
    }

    const GDP = {
        category: "GDP",
        white: {
            name: "White",
            markdownImports: whiteGdpImports
        },
        yellow: {
            name: "Yellow",
            markdownImports: yellowGdpImports
        },
        orange: {
            name: "Orange",
            markdownImports: orangeGdpImports
        },
        green: {
            name: "Green",
            markdownImports: greenGdpImports
        }
    }

    const exampleGames = {
        category: "Examle Games",
        white: {
            name: "White",
            markdownImports: whiteExampleGameImports
        },
        yellow: {
            name: "Yellow",
            markdownImports: yellowExampleGameImports
        },
        orange: {
            name: "Orange",
            markdownImports: orangeExampleGameImports
        },
        green: {
            name: "Green",
            markdownImports: greenExampleGameImports
        },
    }

    function Category(obj: any) {
        const { category } = obj;

        const [isCollapsed, setIsCollapsed] = useState(false);

        return (
            <div className={`${styles.sidebarItem} ${styles.sidebarItemCategory} ${isCollapsed ? styles.sidebarItemCategoryActive : ""}`}>

                <p className={`${styles.sidebarCategory}`} onClick={() => setIsCollapsed(!isCollapsed)}>
                    {category}
                    <span className={`${styles.caret} ${isCollapsed ? styles.caretRotated : ''}`}> {'>'} </span>
                </p>

                {Object.values(obj).filter(method => method !== category).map((method: any) => {
                    const { name, markdownImports } = method;

                    if (Object.keys(markdownImports).length === 0) return;

                    return <BeltContainer key={name} props={{ activeElm: activeElm, name: name, markdownImports: markdownImports }} />
                })}
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