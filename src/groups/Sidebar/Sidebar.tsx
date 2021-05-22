import Category from './Category/Category';
import { useRef, useState } from 'react';
import { Search } from './Search/Search';
import { SearchContextProvider } from './SearchContext';

import styles from './Sidebar.module.scss';

export function Sidebar() {
    const [searchValue, setSearchValue] = useState((null as any));
    const sidebarRef = useRef(null);

    return (
        <SearchContextProvider value={{searchValue, setSearchValue}}>
            <div className={styles.sidebar} ref={sidebarRef}>
                <Search />
                <Category sidebarRef={sidebarRef} />
            </div>
        </SearchContextProvider>
    )
}

export default Sidebar;