import Image from "next/image";
import Link from "next/link";

import styles from "../styles/components/FloatingNav.module.scss";
import TopicNav from "./TopicNav";

import images from "../data/images";

const FloatingNav = (props) => {
    return (
        <div className={styles.nav}>
            <input
                type="checkbox"
                className={styles.nav__checkbox}
                id="nav__checkbox"
            />
            <label className={styles.nav__label} for="nav__checkbox">
                <span className={styles.nav__label__span}></span>
            </label>
            <div className={styles.nav__background}></div>
            <nav className={styles.nav__navigation}>
                <div className={styles.nav__navigation__logo}>
                    <Link href="/">
                        <a>
                            <Image
                                src={images.bannerBigH}
                                alt="emilsthoughts logo"
                                layout="fill"
                                objectFit="contain"
                            />
                        </a>
                    </Link>
                </div>
                <TopicNav className={styles.nav__navigation__topicnav} />
            </nav>
        </div>
    );
};

export default FloatingNav;
