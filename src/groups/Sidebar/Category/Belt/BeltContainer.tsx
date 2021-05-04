import React, {useState} from 'react';
import styles from "../Category.module.scss";

export function BeltContainer(props: any) {
        const [beltIsCollapsed, setBeltIsCollapsed] = useState(false);
        const { name, markdownImports } = props.props;

        return (
            <div className={`${styles.sidebarItem} ${styles.sidebarItemCategory} ${beltIsCollapsed ? styles.sidebarItemCategoryActive : ""}`}>
                <p className={`${styles.sidebarItem} ${styles.sidebarItemCategory}`} onClick={() => setBeltIsCollapsed(!beltIsCollapsed)}>
                    {name}
                    <span> {'>'} </span>
                </p>

                {Object.values(markdownImports).sort().map((method: any) => {
                    const METHOD_TITLE = method.default.substring(
                        method.default.lastIndexOf("/") + 1,
                        method.default.indexOf(".")
                    );

                    return <CategoryItem props={{ method: method }} key={METHOD_TITLE} />;
                })
                }
            </div>
        )
}

export default React.memo(BeltContainer);