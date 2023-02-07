import SimpleBlogHeader from "../../../components/blog/SimpleBlogHeader";
import CollectionList from "../../../components/blog/CollectionList";

import styles from "../../../styles/pages/australia/australiaAllCollections.module.scss";
import { getCollectionsByTag } from "../../../functions/cms";

export const getStaticProps = async () => {
    const ALLOWED_TAGS = ["australia"];
    const { data, collections } = await getCollectionsByTag(ALLOWED_TAGS);

    return { props: { collections, data } };
};

const AllCollectionsListing = (props) => {
    console.log(props.collections);

    return (
        <>
            <SimpleBlogHeader
                title="Australia: Collections"
                link="/australia"
            />
            <CollectionList
                collections={props.collections}
                className={styles.list}
            />
        </>
    );
};

export default AllCollectionsListing;
