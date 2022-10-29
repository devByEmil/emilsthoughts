import Link from "next/link";
/*
                .wrapper:hover {
                    background-image: linear-gradient(
                            to right,
                            rgba(0, 0, 0, 0.6),
                            rgba(0, 0, 0, 0.6)
                        ),
                        url(${post.cover.url});
                }*/
import styles from "../../styles/components/blog/PostItem.module.scss";

const PostItem = ({ post }) => {
    return (
        <>
            <style jsx>{`
                .wrapper {
                    background-image: linear-gradient(
                            to right,
                            rgba(0, 0, 0, 0.2),
                            rgba(0, 0, 0, 0.2)
                        ),
                        url(${post.cover.url});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            `}</style>
            <Link href={`/australia/${post.slug}`}>
                <a>
                    <div className={`${styles.wrapper} wrapper`}>
                        <p className={styles.wrapper__publishDate}>
                            {post.publishDate}
                        </p>
                        <h3 className={styles.wrapper__title}>{post.title}</h3>
                        <div className={styles.wrapper__descriptionbox}>
                            <p className={styles.wrapper__description}>
                                {post.description}
                            </p>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    );
};

export default PostItem;
