import styles from "../styles/pages/about.module.scss";
import FloatingNav from "../components/FloatingNav";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import SimpleHeader from "../components/SimpleHeader";

const About = (props) => {
    return (
        <>
            <Meta title="About" />
            <FloatingNav />
            <SimpleHeader />
            <main className={styles.content}>
                <p className={styles.content__WIP}>Coming Soon</p>
            </main>
            <Footer />
        </>
    );
};

export default About;
