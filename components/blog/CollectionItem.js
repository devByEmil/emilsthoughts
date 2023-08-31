import Link from "next/link";

import styles from "../../styles/components/blog/CollectionItem.module.scss";

const CollectionItem = ({ collection }) => {
    console.log(collection);
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
            <Link href={`/travel/collections/${collection.slug}`}>
                <a className={styles.wrapper + " item"}>
                    <div>
                        <h1 className={styles.wrapper__title}>
                            {collection.title}
                        </h1>
                        <h3 className={styles.wrapper__description}>
                            {collection.description}
                        </h3>
                    </div>
                </a>
            </Link>
        </>
    );
};

export default CollectionItem;
