import Link from "next/link";

import styles from "../../styles/components/blog/Favourites.module.scss";

/* PROPS ?=optional
data: favourite data
*/

const FavouritePost = ({ item }) => {
    return (
        <>
            <style jsx>{`
                .item {
                    background-image: linear-gradient(
                            to right,
                            rgba(0, 0, 0, 0.35),
                            rgba(0, 0, 0, 0.35)
                        ),
                        url("${item.cover.url}");
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            `}</style>
            <Link href={"australia/posts/" + item.slug}>
                <a>
                    <div className={styles.item + " item"}>
                        <h2 className={styles.item__title}>{item.title}</h2>
                        <p className={styles.item__date}>{item.publishDate}</p>
                    </div>
                </a>
            </Link>
        </>
    );
};

const Favourites = ({ data }) => {
    return (
        <div className={styles.favourites}>
            {data.posts.map((item) => (
                <FavouritePost item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Favourites;
