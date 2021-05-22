import React, { useContext } from 'react';
import SearchContext from '../SearchContext';
import styles from './Search.module.scss';

export function Search() {
    // TODO: render differently based on a search value, just a raw list of matching elements

    const { setSearchValue } = useContext(SearchContext);

    return (
    <>
        <input className={styles.searchbar} onChange={(evt) => setSearchValue(evt.target.value.toLowerCase())} />
    </>
    )
}

export default React.memo(Search);