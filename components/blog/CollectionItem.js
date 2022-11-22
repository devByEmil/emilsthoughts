import Link from "next/link";

import { forwardRef } from "react";
import styles from "../../styles/components/blog/CollectionItem.module.scss";

const CollectionItem = forwardRef(({ collection }, ref) => {
    return (
        <>
            <style jsx>{`
                .item {
                    background-image: linear-gradient(
                            to right,
                            rgba(0, 0, 0, 0.4),
                            rgba(0, 0, 0, 0.4)
                        ),
                        url(${collection.cover.url});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            `}</style>
            <Link href={"/australia/collections/" + collection.slug}>
                <div className={styles.item + " item"} ref={ref}>
                    <a>
                        <div className={styles.item__box}>
                            <h1 className={styles.item__box__title}>
                                {collection.title}
                            </h1>
                            <h3 className={styles.item__box__description}>
                                {collection.description}
                            </h3>
                        </div>
                    </a>
                </div>
            </Link>
        </>
    );
});

export default CollectionItem;
