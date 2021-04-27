import React from 'react';
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';

import styles from './Copy.module.scss';
import { CopyComponentInterface } from "./CopyInterfaces";

export function CopyComponent(props: CopyComponentInterface) {
    const { templatedMarkdown } = props;

    return (
        <div className={styles.rowItem}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]} children={templatedMarkdown} />
        </div>
    )
}

export default React.memo(CopyComponent);