import React from 'react';

import styles from './Example.module.scss';

export function ExampleComponent() {
    return (
        <div className={`${styles.rowItem} ${styles.example}`}>
            
        </div>
    )
}

export default React.memo(ExampleComponent);