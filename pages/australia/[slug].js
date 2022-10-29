import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import styles from "../../styles/pages/australia/australiaPost.module.scss";
import images from "../../data/images";

export const getStaticPaths = async () => {
    const SPACE_ID = process.env.SPACE_ID;
    const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
    const ALLOWED_TAGS = ["australia"];

    const res = await fetch(
        `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}&metadata.tags.sys.id[in]=${ALLOWED_TAGS}`
    );
    const data = await res.json();

    const paths = data.items.map((item) => ({
        params: { slug: item.fields.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const SPACE_ID = process.env.SPACE_ID;
    const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
    const ENTRY_SLUG = context.params.slug;
    const ENTRY_CONTENT_TYPE = "post";

    const res = await fetch(
        `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=${ENTRY_CONTENT_TYPE}&fields.slug=${ENTRY_SLUG}`
    );
    const data = await res.json();
    const item = data.items[0];

    let post = {
        id: item.sys.id,
        slug: item.fields.slug,
        title: item.fields.title,
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
        content: item.fields.content,
    };
    data.includes.Asset.forEach((asset) => {
        if (asset.sys.id == item.fields.cover.sys.id) {
            post.cover.title = asset.fields.title;
            post.cover.url = asset.fields.file.url;
            post.cover.details = asset.fields.file.details.image;
        }
    });

    return {
        props: { data, post },
    };
};

const AustraliaPostPage = ({ data, post }) => {
    console.log(data);
    console.log(post);
    return (
        <>
            <style jsx>{`
                .header {
                    background-image: linear-gradient(
                            to right,
                            rgba(0, 0, 0, 0.35),
                            rgba(0, 0, 0, 0.35)
                        ),
                        url("${post.cover.url}");
                }
            `}</style>
            <header className={styles.header + " header"}>
                <p className={styles.header__title}>{post.title}</p>
                <p className={styles.header__publishDate}>{post.publishDate}</p>
            </header>
            <main className={styles.main}>
                {documentToReactComponents(post.content)}
            </main>
        </>
    );
};

export default AustraliaPostPage;
