import React from 'react';
import templateLinksFromMarkdown from "../../../shared/utils/templateLinksFromMarkdown";
import CopyComponent from "./CopyComponent";
import { CopyContainerInterface } from "./CopyInterfaces";

export function CopyContainer(props: CopyContainerInterface) {
    const {copy} = props;

    return <CopyComponent templatedMarkdown={templateLinksFromMarkdown(copy)} />;
}

export default React.memo(CopyContainer);