import SimpleBlogHeader from "../../../components/blog/SimpleBlogHeader";
import PostList from "../../../components/blog/PostList";

import styles from "../../../styles/pages/australia/australiaAllPosts.module.scss";
import { getPostsByTag } from "../../../functions/cms";

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
            <PostList posts={posts} />
        </>
    );
};

export default AllPostsListing;
