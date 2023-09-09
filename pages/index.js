import Image from "next/image";
import SectionCover from "../components/SectionCover";
import MainButton from "../components/buttons/MainButton";
import Heading1 from "../components/typography/Heading1";
import TopicNav from "../components/TopicNav";
import PostListing from "../components/blog/PostList";

import styles from "../styles/pages/home.module.scss";
import images from "../data/images";
import { getFavouritesByTag } from "../functions/cms";

// Import: (1) Components (2) styles, data, etc

export const getStaticProps = async () => {
    const ALLOWED_TAGS = ["general"];
    const { favourites } = await getFavouritesByTag(ALLOWED_TAGS);

    return { props: { favourites } };
};

const Home = (props) => {
    return (
        <>
            <section>
                <SectionCover imagesrc={images.covers.home}>
                    <div className={styles.headerLogo}>
                        <Image
                            src={images.bannerBigV}
                            alt="emilsthoughts Logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className={styles.headerText}>
                        <p className={styles.headerText__hi}>Hi!</p>
                        <p className={styles.headerText__text}>
                            I am Emil, a 20 year old boy from Germany, currently
                            in Australia.
                            <br />
                            On this blog, I write about my thoughts, experiences
                            and interests.
                        </p>
                        <MainButton
                            href="/about"
                            title="What and Why"
                            className={styles.headerButton}
                        />
                    </div>
                </SectionCover>
            </section>
            <section className={styles.topics}>
                <Heading1 title="Topics" />
                <TopicNav className={styles.topicNavContainer} />
            </section>
            {props.favourites.posts.length > 0 && (
                <section className={styles.favourites}>
                    <Heading1
                        title="My Best Stuff"
                        className={styles.favourites__title}
                    />
                    <PostListing posts={props.favourites.posts} />
                </section>
            )}
        </>
    );
};

export default Home;
