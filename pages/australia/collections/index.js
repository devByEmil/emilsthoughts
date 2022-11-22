import SimpleBlogHeader from "../../../components/blog/SimpleBlogHeader";
import CollectionList from "../../../components/blog/CollectionList";

import { getCollectionsByTag } from "../../../functions/cms";

export const getStaticProps = async () => {
    const ALLOWED_TAGS = ["australia"];
    const { data, collections } = await getCollectionsByTag(ALLOWED_TAGS);
    console.log(data);

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
            <CollectionList collections={props.collections} />
        </>
    );
};

export default AllCollectionsListing;
