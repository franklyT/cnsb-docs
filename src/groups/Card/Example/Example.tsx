import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';

import startCase from 'lodash/startCase';

import ObjectSelector from "../../../shared/components/ObjectSelector/ObjectSelector";

import styles from './Example.module.scss';

import React from 'react';

import templateLinksFromMarkdown from '../../../shared/utils/templateLinksFromMarkdown';

interface IExample {
    example: string;
}

export function Example(props: IExample) {
    const example = templateLinksFromMarkdown(props.example);

    /* 
    const Sandbox = (code: string) => {
        let rand = hashString((Math.random() * 100).toString());

        const explode = () => document.getElementById(`sandBox_${rand}`) && document.getElementById(`sandBox_${rand}`)!.remove();

        let secureEval = (script: string) => {
            var console = { log: (m: any) => { document.getElementById(`sandBox_${rand}`) && document.getElementById(`sandBox_${rand}`)!.insertAdjacentHTML('beforebegin', m) } }

            try {
                return eval(script)
            }
            catch (error) {
                return error;
            }
        }


        return <iframe src="" id={`sandBox_${rand}`} sandbox="allow-scripts" style={{ display: 'none' }}> <img src="dsdds.jpg" onError={() => { secureEval(`${code}`); explode() }} /> </iframe>;
    }
    */

    const components = {
        code({ node, inline, className, children, ...props }: { node?: any, inline: any, className?: any, children: any }) {
            const match = /language-(.*)/g.exec(className || '');
            const isGDP = !match || !match[1].includes('gdp') ? false : true;
            const gdpObject = (isGDP && match) && match[1].substring(match[1].indexOf(":") + 1, match[1].lastIndexOf(":"));
            const gdpEvent = (isGDP && match) && startCase(match[1].substring(match[1].lastIndexOf(":") + 1, match[1].length));

            const isShell = !match || !match[1].includes('shell') ? false : true;

            if (isShell) return <code className={styles.shell}> {"-> Output: " + String(children).replace(/\s+$/, '')}<span className={styles.shellCaret}>_</span> </code>;

            if (!inline && match) return (
                <>
                    {isGDP && <ObjectSelector props={{ objectName: gdpObject, eventName: gdpEvent }} />}
                    <SyntaxHighlighter showLineNumbers={true} style={a11yDark} language={isGDP ? "javascript" : match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
                </>
            );

            return <code>{children}</code>;
        }
    }


    //@ts-ignore
    return <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components} children={example} />;
}

export default React.memo(Example);