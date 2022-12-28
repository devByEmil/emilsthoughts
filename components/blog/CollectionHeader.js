import styles from "../../styles/components/blog/CollectionHeader.module.scss";

/* PROPS ?=optional
title: title
description: description
cover: cover
*/

const CollectionHeader = (props) => {
    return (
        <>
            <style jsx>{`
                .header {
                    background-image: linear-gradient(
                            to right,
                            rgba(0, 0, 0, 0.5),
                            rgba(0, 0, 0, 0.5)
                        ),
                        url(${props.cover.url});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            `}</style>
            <header className={styles.header + " header"}>
                <div className={styles.header__box}>
                    <h1 className={styles.header__box__title}>{props.title}</h1>
                    <h3 className={styles.header__box__description}>
                        {props.description}
                    </h3>
                </div>
            </header>
        </>
    );
};

export default CollectionHeader;
