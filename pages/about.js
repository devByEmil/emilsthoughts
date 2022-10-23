import Meta from "../components/Meta";
import SimpleHeader from "../components/SimpleHeader";

import styles from "../styles/pages/about.module.scss";

const About = (props) => {
    return (
        <>
            <Meta title="About" />
            <SimpleHeader />
            <main className={styles.content}>
                <p className={styles.content__WIP}>Coming Soon</p>
            </main>
        </>
    );
};

export default About;
