import React from 'react';

import { BeltItem } from './BeltItem';

export function Belt(props: any) {
        const { activeElm,  markdownImports } = props.props;

        function getMethodTitle(method: any) {
            return method.default.substring(method.default.lastIndexOf("/") + 1, method.default.indexOf("."));
        }

        return (
            <div>
                {Object.values(markdownImports).sort( (a: any, b: any) => getMethodTitle(a).localeCompare(getMethodTitle(b), 'en', { numeric: true }) ).map((method: any) => {

                    return <BeltItem props={{ activeElm: activeElm, method: method }} key={getMethodTitle(method)} />;
                })
                }
            </div>
        )
}

export default React.memo(Belt);