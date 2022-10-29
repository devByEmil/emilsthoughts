import PostItem from "../../components/blog/PostItem";
import SimpleBlogHeader from "../../components/blog/SimpleBlogHeader";

import styles from "../../styles/pages/australia/australiaAllPosts.module.scss";

export const getStaticProps = async () => {
    const SPACE_ID = process.env.SPACE_ID;
    const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
    const ALLOWED_TAGS = ["australia"];

    const res = await fetch(
        `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}&metadata.tags.sys.id[in]=${ALLOWED_TAGS}`
    );
    const data = await res.json();

    const posts = data.items.map((item) => {
        let newItem = {
            id: item.sys.id,
            slug: item.fields.slug,
            title: item.fields.title,
            description: item.fields.shortDescription,
            publishDate: item.fields.publishDate
                .split("-")
                .reverse()
                .toString()
                .replaceAll(",", "/"),
            cover: {
                title: "",
                url: "",
                details: {},
            },
            content: item.fields.content.content,
        };
        data.includes.Asset.forEach((asset) => {
            if (asset.sys.id == item.fields.cover.sys.id) {
                newItem.cover.title = asset.fields.title;
                newItem.cover.url = asset.fields.file.url;
                newItem.cover.details = asset.fields.file.details.image;
            }
        });
        return newItem;
    });

    return {
        props: { posts, data },
    };
};

const AllPostsListing = ({ posts }) => {
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
