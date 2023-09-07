import Link from "next/link";
import Heading1 from "../typography/Heading1";

import styles from "../../styles/components/blog/CollectionItem.module.scss";

const CollectionItem = ({ collection }) => {
    return (
        <>
            <style jsx>
                {`
                    .image {
                        background-image: linear-gradient(
                                to right,
                                rgba(0, 0, 0, 0.2),
                                rgba(0, 0, 0, 0.2)
                            ),
                            url(${collection.cover.url});
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                `}
            </style>
            <Link href={`/travel/collections/${collection.slug}`}>
                <a className={styles.wrapper}>
                    <div className={styles.wrapper__left + " image"}></div>
                    <div className={styles.wrapper__right}>
                        <Heading1
                            title={collection.title}
                            className={styles.wrapper__right__title}
                        />
                        <p>{collection.description}</p>
                        <p className={styles.wrapper__right__info}>
                            {collection.postCount}{" "}
                            {collection.postCount === 1 ? "Post" : "Posts"} |
                            Updated {collection.lastUpdated}
                        </p>
                    </div>
                </a>
            </Link>
        </>
    );
};

export default CollectionItem;
