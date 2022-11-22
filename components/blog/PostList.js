import PostItem from "./PostItem";

import styles from "../../styles/components/blog/PostList.module.scss";

/* PROPS
- posts: posts data
*/

const PostListing = (props) => {
    return (
        <section className={styles.posts}>
            <div className={styles.posts__wrapper}>
                {props.posts.map((post) => (
                    <PostItem post={post} key={post.id} />
                ))}
            </div>
        </section>
    );
};

export default PostListing;
