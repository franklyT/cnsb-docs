import React, {useContext} from 'react';
import styles from './BeltItem.module.scss';
import SearchContext from "../../SearchContext";

export function BeltItem(props: any) {
    const { activeElm, method } = props.props;
    const { searchValue } = useContext(SearchContext);

    const METHOD_TITLE = method && method.default.substring(
        method.default.lastIndexOf("/") + 1,
        method.default.indexOf(".")
    );
    
    const HASHED_ELM = document.getElementById(`card_${(METHOD_TITLE)}`);

    if (searchValue && !METHOD_TITLE.toLowerCase().includes(searchValue)) return <></>;

    return (
        <a className={styles.link} href={`#card_${METHOD_TITLE}`} key={METHOD_TITLE} id={`link_${METHOD_TITLE}`}>
            <div className={`${styles.sidebarItemContainer} ${activeElm === HASHED_ELM ? styles.activeElm : ''}`}>
                    <span className={`${styles.sidebarItem}`}>
                        {METHOD_TITLE}
                    </span>
            </div>
        </a>
    )
}

export default React.memo(BeltItem);