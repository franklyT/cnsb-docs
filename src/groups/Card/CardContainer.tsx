import importFolder from "../../shared/utils/importFolder";
import React, { useEffect, useState } from 'react';
import styles from './Card.module.scss';

// should just append to context rather than building twice
const gdpImports = importFolder(require.context('./../../../docs/gdp/', true, /\.md/));
const conceptImports = importFolder(require.context('./../../../docs/concepts/', true, /\.md/));
const exampleGamesImports = importFolder(require.context('./../../../docs/exampleGames/', true, /\.md/));

const CardComponent = React.lazy(() => import("./CardComponent"));

export function CardContainer() {
    const [gdpState, setMethodState] = useState(({} as any));

    const linkedCard = window.location.href.substring(window.location.href.indexOf('#') + 1, window.location.href.length);

    // need to reason out how to do this
    useEffect(() => {
            Promise.allSettled(
                Object.values(gdpImports).map((belt: any) => fetch(/*url*/ belt.default).then(response => response.text()
                    .then(text => parseMarkdown(belt.default, text)))))
                .then((res) => setMethodState(res.map((res: any) => res.value)))
        }, []);

        useEffect(() => {
            Promise.allSettled(
                Object.values(conceptImports).map((belt: any) => fetch(/*url*/ belt.default).then(response => response.text()
                    .then(text => parseMarkdown(belt.default, text)))))
                .then((res) => setMethodState(res.map((res: any) => res.value)))
        }, []);

        useEffect(() => {
            Promise.allSettled(
                Object.values(exampleGamesImports).map((belt: any) => fetch(/*url*/ belt.default).then(response => response.text()
                    .then(text => parseMarkdown(belt.default, text)))))
                .then((res) => setMethodState(res.map((res: any) => res.value)))
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

    const Loading = () => <div className={styles.loaderC}> <div className={styles.loader} /> </div>;

    return (
        <React.Suspense fallback={<Loading />}>
            {Object.values(gdpState).sort((a: any, b: any) => a.title.localeCompare(b.title, 'en', { numeric: true })).map((res: any) => {
                return <CardComponent key={res.id} props={{ markdownObj: res, linkedCard: linkedCard }} />;
            })}
        </React.Suspense>
    )

}

export default React.memo(CardContainer);