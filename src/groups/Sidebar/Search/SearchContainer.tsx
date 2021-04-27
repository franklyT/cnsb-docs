import React, { useContext } from 'react';
import SearchContext from '../SearchContext';
import SearchComponent from "./SearchComponent";

export function SearchContainer() {
    const {searchValue, setSearchValue} = useContext(SearchContext);

    return <SearchComponent props={{searchValue, setSearchValue}} />;
}

export default React.memo(SearchContainer);