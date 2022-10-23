import Link from "next/link";

import styles from "../../styles/components/blog/PostItem.module.scss";

const PostItem = ({ post }) => {
    return (
        <Link href={`/australia/${post.slug}`}>
            <a>
                <div className={styles.wrapper}>
                    <h1>{post.title}</h1>
                </div>
            </a>
        </Link>
    );
};

export default PostItem;
