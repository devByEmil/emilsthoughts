import PostItem from "../../components/blog/PostItem";
import SimpleBlogHeader from "../../components/blog/SimpleBlogHeader";

import styles from "../../styles/pages/australia/australiaAllPosts.module.scss";
import { getPostsByTag } from "../../functions/cms";

export const getStaticProps = async () => {
    const ALLOWED_TAGS = ["australia"];
    const { posts } = await getPostsByTag(ALLOWED_TAGS);

    return {
        props: { posts },
    };
};

const AllPostsListing = ({ posts }) => {
    console.log(posts);
    return (
        <>
            <SimpleBlogHeader title="Australia: All Posts" link="/australia" />
            <section className={styles.posts}>
                <div className={styles.posts__wrapper}>
                    {posts.map((post) => (
                        <PostItem post={post} key={post.id} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default AllPostsListing;
