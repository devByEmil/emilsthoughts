import styles from "../styles/pages/supportme.module.scss";
import FloatingNav from "../components/FloatingNav";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import SimpleHeader from "../components/SimpleHeader";

const SupportMe = (props) => {
    return (
        <>
            <Meta title="Support Me" />
            <FloatingNav />
            <SimpleHeader />
            <main className={styles.content}>
                <p className={styles.content__WIP}>Coming Soon</p>
            </main>
            <Footer />
        </>
    );
};

export default SupportMe;
