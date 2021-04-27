import importFolder from "../../shared/utils/importFolder";
import CardComponent from "./CardComponent";

import React, { useEffect, useState } from 'react';

const methodImports = importFolder(require.context('./../../../docs/methods/', true, /\.md/));

export function CardContainer() {
    const [cardState, setCardState] = useState(({} as any));
    const linkedCard = window.location.href.substring(window.location.href.indexOf('#') + 1, window.location.href.length);

    // add loader
    useEffect(() => {
        Promise.allSettled(
            Object.values(methodImports).map((belt: any) => fetch(/*url*/ belt.default).then(response => response.text()
                .then(text => parseMarkdown(belt.default, text)))))
            .then((res) => setCardState(res.map((res: any) => res.value)))
    }, []);

    function parseMarkdown(url: string, text: string) {
        return {
            // TODO: indexOf/lastIndexOf might be able to replace expensive regex parses
            // TODO: space after // should be optional
            // const METHOD_TITLE = method.default.substring(method.default.lastIndexOf("/") + 1, method.default.indexOf("."));
            id: `card_${(url.substring(url.lastIndexOf("/") + 1, url.indexOf(".")))}`,
            title: text.match(/\/\/(.*?)[t|T]itle (.*)/) && text.match(/\/\/(.*?)[t|T]itle (.*)/)![2],
            copy: text.match(/\/\/\s@copy(.*)\/\/(.*)@example/s) && text.match(/\/\/\s@copy(.*)\/\/(.*)@example/s)![1],
            example: text.match(/\/\/\s@example(.*)/s) && text.match(/\/\/\s@example(.*)/s)![1],
        }
    }

    return (
        <>
            {Object.values(cardState).sort().map((res: any) => {
                return <CardComponent key={res.id} props={{ markdownObj: res, linkedCard: linkedCard }} />;
            })}
        </>
    )

}

export default React.memo(CardContainer);