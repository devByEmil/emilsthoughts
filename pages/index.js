import Image from "next/image";

import styles from "../styles/pages/home.module.scss";
import Meta from "../components/Meta";
import SectionCover from "../components/SectionCover";
import MainButton from "../components/buttons/MainButton";
import Heading1 from "../components/typography/Heading1";
import TopicNav from "../components/TopicNav";
import Footer from "../components/Footer";
import FloatingNav from "../components/FloatingNav";

import bannerVertical from "../public/Banner Big Vertical.png";
import images from "../data/images";

// Import: (1) Stuff made by others (2) My CSS, My Components (3) Everything else made by me

const Home = () => {
    return (
        <>
            <FloatingNav />
            <Meta />
            <section>
                <SectionCover imagesrc={images.covers.home}>
                    <div className={styles.headerLogo}>
                        <Image
                            src={bannerVertical}
                            alt="emilsthoughts Logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className={styles.headerText}>
                        <p className={styles.headerText__hi}>Hi!</p>
                        <p className={styles.headerText__text}>
                            I am Emil, an 18 year old boy from Germany,
                            currently in Australia.
                            <br />
                            On this blog, I write about my thoughts, experiences
                            and interests.
                        </p>
                        <MainButton
                            href="/about"
                            title="About"
                            className={styles.headerButton}
                        />
                    </div>
                </SectionCover>
            </section>
            <section className={styles.topics}>
                <Heading1 title="Topics" />
                <TopicNav className={styles.topicNavContainer} />
            </section>
            <section className={styles.footer}>
                <Footer />
            </section>
        </>
    );
};

export default Home;
