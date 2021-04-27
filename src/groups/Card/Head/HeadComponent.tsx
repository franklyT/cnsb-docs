import React from 'react';
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/light-async";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import styles from './Head.module.scss';
import { HeadComponentInterface } from "./HeadInterfaces";

export function HeadComponent(props: HeadComponentInterface) {
    const { title } = props.markdownObj;

    return (
        <div className={styles.rowItem} style={{ width: "100%", flexBasis: "100%", height: "fit-content" }}>
            <hr style={{ height: "0", borderTop: "4px solid rgb(200, 200, 200)", marginBottom: "3rem", marginTop: "3rem" }} />
            <div style={{ marginLeft: "2rem" }}> {title} </div>
            <div style={{ marginLeft: "2rem" }}> <SyntaxHighlighter style={a11yDark} showLineNumbers={true} language={"javascript"} code={title} /> </div>
        </div>
    )
}

export default React.memo(HeadComponent);