import SimpleHeader from "../components/SimpleHeader";
import Link from "next/link";

import styles from "../styles/pages/workinprogress.module.scss";

const WIP = () => {
    return (
        <>
            <SimpleHeader />
            <div className={styles.box}>
                <h1 className={styles.box__heading}>Sorry.</h1>
                <p className={styles.box__text}>
                    This section of emilsthoughts is still under construction.
                </p>
                <Link href="/">
                    <a>Go Back</a>
                </Link>
            </div>
        </>
    );
};

export default WIP;
