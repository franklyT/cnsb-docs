import React from 'react';
import styles from './Search.module.scss';

export function Search(props: any) {
    const { searchValue, setSearchValue } = props.props;

    return (
        <>
            <input className={styles.searchbar} onChange={ (evt) => setSearchValue(evt.target.value.toLowerCase())} />
        </>
    )
}

export default React.memo(Search);