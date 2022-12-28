import SectionCover from "../../components/SectionCover";
import MyImage from "../../components/my/MyImage";
import MainButton from "../../components/buttons/MainButton";
import Heading1 from "../../components/typography/Heading1";

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
            <section className={styles.map}>
                <Heading1 title="Where am I now?" />
                <div
                    class="findpenguins-media"
                    findpgns-version="1"
                    findpgns-embed="user"
                >
                    <a
                        href="https://findpenguins.com/65bnkkro5pm6v/trip/australia-work-and-travel"
                        target="_top"
                    >
                        Map
                    </a>
                </div>
                <script
                    async
                    defer
                    src="//findpenguins.com/js/embed.js"
                ></script>
            </section>
        </>
    );
};

export default AustraliaHome;
