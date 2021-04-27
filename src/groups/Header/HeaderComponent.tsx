import { useState } from 'react';
import styles from './Header.module.scss';
import banner from './images/cnsb-banner.png';

export function HeaderComponent() {
    const [loaded, setLoaded] = useState(false);

    return (
        <header className={styles.header}>
            <a href="https://www.codeninjas.com/">
                <div className={styles.placeholder} style={loaded ? { display: 'none' } : {}} />
                <img onLoad={() => setLoaded(true)} className={styles.banner} src={banner} alt="Code Ninjas Banner" />
            </a>
        </header>
    )
}

export default HeaderComponent;
