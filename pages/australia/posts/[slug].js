import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";
import MyImage from "../../../components/my/MyImage";
import PreviousPageButton from "../../../components/buttons/PreviousPageButton";
import Meta from "../../../components/Meta";

import styles from "../../../styles/pages/australia/australiaPost.module.scss";
import { getPostBySlug, getPostsByTag } from "../../../functions/cms";

export const getStaticPaths = async () => {
    const ALLOWED_TAGS = ["australia"];
    const { posts } = await getPostsByTag(ALLOWED_TAGS);

    const paths = posts.map((item) => ({
        params: { slug: item.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const ENTRY_SLUG = context.params.slug;
    const { post } = await getPostBySlug(ENTRY_SLUG);

    return {
        props: { post },
    };
};

const AustraliaPostPage = ({ post }) => {
    const RICH_TEXT_OPTIONS = {
        renderNode: {
            [BLOCKS.HR]: () => <hr className={styles.richtext__hr} />,
            [BLOCKS.HEADING_4]: (_, children) => (
                <h4 className={styles.richtext__h4}>{children}</h4>
            ),
            [BLOCKS.HEADING_5]: (_, children) => (
                <h5 className={styles.richtext__h5}>{children}</h5>
            ),
            [BLOCKS.HEADING_6]: (_, children) => (
                <h6 className={styles.richtext__h6}>{children}</h6>
            ),
            [INLINES.HYPERLINK]: (node, children) => (
                <Link href={node.data.uri}>
                    <a target="_blank">{children}</a>
                </Link>
            ),
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const data = node.data.target.fields;
                return (
                    <div className={styles.richtext__imagewrapper}>
                        <MyImage
                            src={"https:" + data.file.url}
                            height={data.file.details.image.height}
                            width={data.file.details.image.width}
                            maxwidth="100%"
                            alt={data.title}
                        />
                    </div>
                );
            },
        },
    };

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
            <Meta title={post.title} description={post.description} />
            <header className={styles.header + " header"}>
                <p className={styles.header__title}>{post.title}</p>
                <p className={styles.header__publishDate}>{post.publishDate}</p>
                <PreviousPageButton className={styles.header__previousButton} />
            </header>
            <main className={styles.main}>
                {documentToReactComponents(post.content, RICH_TEXT_OPTIONS)}
            </main>
        </>
    );
};

export default AustraliaPostPage;
