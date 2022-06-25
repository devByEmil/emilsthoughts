import Image from "next/image";

import styles from "../styles/pages/Home.module.scss";
import Meta from "../components/Meta";
import SectionCover from "../components/SectionCover";
import MainButton from "../components/buttons/MainButton";

import bannerVertical from "../public/Banner Big Vertical.png";
import coverPicture from "../public/covers/HomeCover.JPG";

// Import: (1) Stuff made by others (2) My CSS, My Components (3) Everything else made by me

const Home = () => {
    return (
        <>
            <Meta />
            <SectionCover imagesrc={coverPicture.src}>
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
                        I am Emil, an 18 year old boy from Germany, currently in
                        Australia.
                        <br />
                        On this blog, I write about my thoughts, experiences and
                        interests.
                    </p>
                    <MainButton
                        href="#"
                        title="About"
                        className={styles.headerButton}
                    />
                </div>
            </SectionCover>
        </>
    );
};

export default Home;
