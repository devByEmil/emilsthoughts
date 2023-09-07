import Link from "next/link";
import styles from "../../styles/components/blog/PostItem.module.scss";

const PostItem = ({ post }) => {
    return (
        <>
            <style jsx>{`
                .image {
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

            <Link href={`/travel/posts/${post.slug}`}>
                <a className={styles.wrapperHoverLink}>
                    <div className={`${styles.wrapperHover} image`}>
                        <p className={styles.wrapperHover__publishDate}>
                            {post.publishDate}
                        </p>
                        <h3 className={styles.wrapperHover__title}>
                            {post.title}
                        </h3>
                        <div className={styles.wrapperHover__descriptionbox}>
                            <p className={styles.wrapperHover__description}>
                                {post.description}
                            </p>
                        </div>
                    </div>
                </a>
            </Link>
            <Link href={`/travel/posts/${post.slug}`}>
                <a className={styles.wrapperMobileLink}>
                    <div className={styles.wrapperMobile}>
                        <div className={styles.wrapperMobile__top + " image"}>
                            <p
                                className={
                                    styles.wrapperMobile__top__publishDate
                                }
                            >
                                {post.publishDate}
                            </p>
                            <h3 className={styles.wrapperMobile__top__title}>
                                {post.title}
                            </h3>
                        </div>
                        <div className={styles.wrapperMobile__bottom}>
                            <p className={styles.wrapperMobile__bottom__text}>
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
