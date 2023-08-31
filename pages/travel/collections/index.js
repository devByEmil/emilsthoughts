import SimpleBlogHeader from "../../../components/blog/SimpleBlogHeader";
import CollectionList from "../../../components/blog/CollectionList";
import Meta from "../../../components/Meta";

import styles from "../../../styles/pages/travel/travelAllCollections.module.scss";
import text from "../../../data/text";
import { getCollectionsByTag } from "../../../functions/cms";

export const getStaticProps = async () => {
    const ALLOWED_TAGS = ["travel"];
    const { data, collections } = await getCollectionsByTag(ALLOWED_TAGS);

    return { props: { collections, data } };
};

const AllCollectionsListing = (props) => {
    console.log(props.collections);

    return (
        <>
            <Meta
                title="Travel: Collections"
                description={text.travel.metaDescription}
            />
            <SimpleBlogHeader title="Travel: Collections" link="/travel" />
            <CollectionList
                collections={props.collections}
                className={styles.list}
            />
        </>
    );
};

export default AllCollectionsListing;
