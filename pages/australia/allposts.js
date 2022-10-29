import PostItem from "../../components/blog/PostItem";
import SimpleBlogHeader from "../../components/blog/SimpleBlogHeader";

import styles from "../../styles/pages/australia/australiaAllPosts.module.scss";

export const getStaticProps = async () => {
    const SPACE_ID = process.env.SPACE_ID;
    const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
    const ALLOWED_TAGS = ["australia"];
    const SORT_ORDER = 1; // -1 = ascending, 1 = descending

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

    posts.sort((a, b) => {
        // from "dd/mm/yyyy" to [yyyy,mm,dd]
        a = a.publishDate.split("/").reverse();
        b = b.publishDate.split("/").reverse();
        a.map((item) => parseInt(item));
        b.map((item) => parseInt(item));

        if (b[0] - a[0] === 0) {
            // same year
            if (b[1] - a[1] === 0) {
                // same month
                if (b[2] - a[2] === 0) {
                    // same day > same date > do nothing
                    return 0;
                } else if (b[2] > a[2]) {
                    // day b is greater than day a
                    return SORT_ORDER;
                } else {
                    // day b is smaller than day a
                    return -SORT_ORDER;
                }
            } else if (b[1] > a[1]) {
                // month b is greater than month a
                return SORT_ORDER;
            } else {
                // month b is smaller than month a
                return -SORT_ORDER;
            }
        } else if (b[0] > a[0]) {
            // year b is greater than year a
            return SORT_ORDER;
        } else {
            // year b is smaller than year a
            return -SORT_ORDER;
        }
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
