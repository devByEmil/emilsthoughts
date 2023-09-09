import CollectionHeader from "../../../components/blog/CollectionHeader";
import PostListing from "../../../components/blog/PostList";
import Meta from "../../../components/Meta";

import {
    getCollectionBySlug,
    getCollectionsByTag,
} from "../../../functions/cms";

export const getStaticPaths = async () => {
    const ALLOWED_TAGS = ["travel"];
    const { collections } = await getCollectionsByTag(ALLOWED_TAGS);

    const paths = collections.map((item) => ({
        params: { slug: item.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const COLLECTION_SLUG = context.params.slug;
    const { collection } = await getCollectionBySlug(COLLECTION_SLUG);

    return { props: { collection } };
};

const CollectionPage = ({ collection }) => {
    return (
        <>
            <Meta
                title={collection.title}
                description={collection.description}
            />
            <CollectionHeader
                title={collection.title}
                description={collection.description}
                cover={collection.cover}
            />
            <main>
                <PostListing posts={collection.posts} />
            </main>
        </>
    );
};

export default CollectionPage;
