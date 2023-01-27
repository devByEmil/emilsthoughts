import CollectionItem from "./CollectionItem";
import { motion } from "framer-motion";

import styles from "../../styles/components/blog/CollectionList.module.scss";
import { useRef, useEffect, useState } from "react";

/* PROPS
- collections: collection data
*/

const CollectionList = (props) => {
    const carousel = useRef();
    const card = useRef();
    const [maxwidth, setMaxWidth] = useState(0);
    const [currentScroll, setCurrentScroll] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        console.log(card.current);
        setMaxWidth(
            carousel.current.scrollWidth - carousel.current.offsetWidth + 7.5
        ); // 7.5 to have enough space to be able to show shadow of last card
        setCardWidth(card.current.clientWidth + 30); //30 for the amount of margin on each card, can't read that
    }, []);

    return (
        <>
            <section className={styles.carousel_wapper}>
                <motion.div
                    className={styles.carousel}
                    ref={carousel}
                    animate={{ translateX: currentScroll }}
                >
                    {props.collections.map((collection) => (
                        <CollectionItem
                            collection={collection}
                            key={collection.id}
                            ref={card}
                        />
                    ))}
                </motion.div>
                <div
                    className={
                        styles.button_wrapper +
                        " " +
                        styles.button_wrapper__right
                    }
                    onClick={() => {
                        if (currentScroll - cardWidth < -maxwidth) {
                            setCurrentScroll(-maxwidth);
                        } else {
                            setCurrentScroll(currentScroll - cardWidth);
                        }
                    }}
                >
                    <div
                        className={styles.button__right + " " + styles.button}
                    ></div>
                </div>
                <div
                    className={
                        styles.button_wrapper + " " + styles.button_wrapper_left
                    }
                    onClick={() => {
                        if (currentScroll + cardWidth > 0) {
                            setCurrentScroll(0);
                        } else {
                            setCurrentScroll(currentScroll + cardWidth);
                        }
                    }}
                >
                    <div
                        className={styles.button__left + " " + styles.button}
                    ></div>
                </div>
            </section>
        </>
    );
};

export default CollectionList;
