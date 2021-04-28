import React, { useContext } from 'react';
import SearchContext from '../SearchContext';
import SearchComponent from "./SearchComponent";

export function SearchContainer() {
    // TODO: render differently based on a search value, just a raw list of matching elements

    const {searchValue, setSearchValue} = useContext(SearchContext);

    return <SearchComponent props={{searchValue, setSearchValue}} />;
}

export default React.memo(SearchContainer);