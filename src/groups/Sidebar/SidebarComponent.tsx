import Category from './Category/CategoryContainer';
import { useRef, useState } from 'react';
import { SearchContainer } from './Search/SearchContainer';
import { SearchContextProvider } from './SearchContext';

import styles from './Sidebar.module.scss';

export function Sidebar() {
    const [searchValue, setSearchValue] = useState((null as any));
    const sidebarRef = useRef(null);

    return (
        <SearchContextProvider value={{searchValue, setSearchValue}}>
            <div className={styles.sidebar} ref={sidebarRef}>
                <SearchContainer />
                <Category sidebarRef={sidebarRef} />
            </div>
        </SearchContextProvider>
    )
}

export default Sidebar;