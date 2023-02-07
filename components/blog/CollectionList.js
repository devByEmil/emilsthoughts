import CollectionItem from "./CollectionItem";

import styles from "../../styles/components/blog/CollectionList.module.scss";

/* PROPS
- collections: collections data
? className: wrapper styling
*/

const CollectionList = (props) => {
    const cN = props.className ? " " + props.className : "";

    return (
        <div className={styles.wrapper + cN}>
            {props.collections.map((collection) => (
                <CollectionItem collection={collection} key={collection.id} />
            ))}
        </div>
    );
};

export default CollectionList;
