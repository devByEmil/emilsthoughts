import Meta from "../components/Meta";
import SimpleHeader from "../components/SimpleHeader";

import styles from "../styles/pages/supportme.module.scss";

const SupportMe = (props) => {
    return (
        <>
            <Meta title="Support Me" />
            <SimpleHeader />
            <main className={styles.content}>
                <p className={styles.content__WIP}>Coming Soon</p>
            </main>
        </>
    );
};

export default SupportMe;
