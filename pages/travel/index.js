import SectionCover from "../../components/SectionCover";
import MyImage from "../../components/my/MyImage";
import MainButton from "../../components/buttons/MainButton";
import Heading1 from "../../components/typography/Heading1";
import Favourites from "../../components/blog/Favourites";
import Meta from "../../components/Meta";
import PostListing from "../../components/blog/PostList";
import CollectionList from "../../components/blog/CollectionList";

import { useState } from "react";
import styles from "../../styles/pages/travel/travelHome.module.scss";
import images from "../../data/images";
import text from "../../data/text";
import {
    getFavouritesByTag,
    getPostsByTag,
    getCollectionsByTag,
} from "../../functions/cms";

export const getStaticProps = async () => {
    const ALLOWED_TAGS = ["travel"];
    const { posts } = await getPostsByTag(ALLOWED_TAGS);
    const { collections } = await getCollectionsByTag(ALLOWED_TAGS);
    const { favourites } = await getFavouritesByTag(ALLOWED_TAGS);

    return { props: { favourites, posts, collections } };
};

const TravelHome = (props) => {
    // 1 = Collections; 2 = All Posts
    const [contentSwitch, setContentSwitch] = useState(1);

    return (
        <>
            <Meta title="Travel" description={text.travel.metaDescription} />
            <SectionCover imagesrc={images.covers.travel}>
                <div className={styles.logobox}>
                    <MyImage
                        src={images.logo}
                        height="1000"
                        width="1000"
                        maxwidth="20rem"
                        link="/"
                        alt="Australia"
                        dontcenter
                    />
                    <p className={styles.logobox__title}>Travel</p>
                </div>
                <p className={styles.description}>{text.travel.description}</p>
                <MainButton
                    className={styles.routebutton}
                    href="https://findpenguins.com/65bnkkro5pm6v/trip/australia-work-and-travel"
                    title="See my Route"
                    targetblank
                />
            </SectionCover>
            <section className={styles.content}>
                <div className={styles.content__switch}>
                    <h2
                        onClick={() => setContentSwitch(1)}
                        style={contentSwitch === 1 ? {} : { color: "#A3A3A3" }}
                    >
                        Collections
                    </h2>
                    <h2
                        onClick={() => setContentSwitch(2)}
                        style={contentSwitch === 2 ? {} : { color: "#A3A3A3" }}
                    >
                        All Posts
                    </h2>
                </div>
                {contentSwitch === 1 ? (
                    <CollectionList collections={props.collections} />
                ) : (
                    <PostListing posts={props.posts} />
                )}
            </section>
            {props.favourites.posts.length !== 0 && (
                <section className={styles.favourites}>
                    <Heading1
                        title="Must-Read Posts"
                        className={styles.favourites__title}
                    />
                    <Favourites data={props.favourites} />
                </section>
            )}
        </>
    );
};

export default TravelHome;
