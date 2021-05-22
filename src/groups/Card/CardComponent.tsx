import React, { useEffect, useRef } from 'react';
import styles from './Card.module.scss';
import HeadContainer from './Head/Head';
import CopyContainer from './Copy/Copy';
import ExampleContainer from './Example/Example';

interface CardComponentInterface {
    props: {
        markdownObj: any;
        linkedCard: any;
    }
}

export function CardComponent(props: CardComponentInterface) {
    const { markdownObj, linkedCard } = props.props;

    const myRef = useRef((null as any));

    useEffect(() => {
        linkedCard && myRef.current.id === linkedCard && myRef.current.scrollIntoView(true);
    }, []);

    if (!props || !markdownObj) return null;

    const { id, copy, example } = markdownObj;

    return (
            <div className={styles.container}>
                <div id={id} ref={myRef} className={styles.row}>
                    <div style={{ width: "80%", flexDirection: "column", flexBasis: "80%", marginLeft: "auto", marginRight: "auto", alignSelf: "center", justifySelf: "center", alignContent: "center", justifyContent: "center", alignItems: "center", justifyItems: 'center' }}>
                        <HeadContainer markdownObj={markdownObj} />
                        <CopyContainer copy={copy} />
                        <ExampleContainer example={example} />
                    </div>
                </div>
            </div>
    )
}

export default React.memo(CardComponent);