import React from 'react';
import templateLinksFromMarkdown from "../../../shared/utils/templateLinksFromMarkdown";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';

import styles from './Copy.module.scss';


interface ICopy {
    copy: any;
}

export function Copy(props: ICopy) {
    const {copy} = props;

    return (<div className={styles.rowItem}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={templateLinksFromMarkdown(copy)} />
    </div>
    )
}

export default React.memo(Copy);