import SimpleBlogHeader from "../../../components/blog/SimpleBlogHeader";
import PostList from "../../../components/blog/PostList";
import Meta from "../../../components/Meta";

import styles from "../../../styles/pages/travel/travelAllPosts.module.scss";
import text from "../../../data/text";
import { getPostsByTag } from "../../../functions/cms";

export const getStaticProps = async () => {
    const ALLOWED_TAGS = ["travel"];
    const { posts } = await getPostsByTag(ALLOWED_TAGS);

    return {
        props: { posts },
    };
};

const AllPostsListing = ({ posts }) => {
    console.log(posts);
    return (
        <>
            <Meta
                title="Travel: Posts"
                description={text.travel.metaDescription}
            />
            <SimpleBlogHeader title="Travel: All Posts" link="/travel" />
            <PostList posts={posts} />
        </>
    );
};

export default AllPostsListing;
