import styles from './ObjectSelector.module.scss';

export function ObjectSelector(props: any) {
    const {objectName, eventName} = props.props;

    return (
        <>
            <div className={styles.row}>
                <div className={`${styles.col} ${styles.tabs} ${styles.active} ${styles.events}`}> Events </div>
                <div className={`${styles.col} ${styles.tabs} ${styles.debug}`}> Debug </div>
                <div className={`${styles.col} ${styles.tabs} ${styles.properties}`}> Properties </div>
            </div>

            <div className={styles.row}>
                <div className={`${styles.col} ${styles.objectName}`}> {objectName} </div>
                <div className={`${styles.col} ${styles.eventName}`}> {eventName} </div>
            </div>
        </>
    )
}

export default ObjectSelector;