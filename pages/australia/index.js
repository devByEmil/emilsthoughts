import SectionCover from "../../components/SectionCover";
import MyImage from "../../components/my/MyImage";
import MainButton from "../../components/buttons/MainButton";

import styles from "../../styles/pages/australia/australiaHome.module.scss";
import images from "../../data/images";
import text from "../../data/text";

const AustraliaHome = ({ posts, data }) => {
    return (
        <>
            <SectionCover imagesrc={images.covers.australia}>
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
                    <p className={styles.logobox__title}>Australia</p>
                </div>
                <p className={styles.description}>
                    {text.australia.description}
                </p>
                <div className={styles.buttonbox}>
                    <MainButton href="australia/posts" title="All Posts" />
                    <MainButton
                        href="australia/collections"
                        title="Collections"
                    />
                </div>
            </SectionCover>
        </>
    );
};

export default AustraliaHome;
