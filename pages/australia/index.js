import SectionCover from "../../components/SectionCover";
import PostItem from "../../components/blog/PostItem";

import styles from "../../styles/pages/australia/australiaHome.module.scss";
import images from "../../data/images";

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
            publishDate: item.fields.publishDate,
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

const AustraliaHome = ({ posts, data }) => {
    console.log(data);
    return (
        <>
            <SectionCover imagesrc={images.covers.australia}></SectionCover>
            <section className="posts">
                {posts.map((post) => (
                    <PostItem post={post} key={post.id} />
                ))}
            </section>
        </>
    );
};

export default AustraliaHome;
