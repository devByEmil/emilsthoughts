import { useRef } from "react";

import styles from "../styles/components/FloatingNav.module.scss";
import TopicNav from "./TopicNav";
import MyImage from "./my/MyImage";
import images from "../data/images";

const FloatingNav = (props) => {
    const checkbox = useRef();

    return (
        <div className={styles.nav}>
            <input
                type="checkbox"
                className={styles.nav__checkbox}
                id="nav__checkbox"
                ref={checkbox}
            />
            <label className={styles.nav__label} htmlFor="nav__checkbox">
                <span className={styles.nav__label__span}></span>
            </label>
            <div className={styles.nav__background}></div>
            <nav className={styles.nav__navigation}>
                <MyImage
                    height="750"
                    width="2500"
                    src={images.bannerBigH}
                    alt="emilsthoughts Logo"
                    link="/"
                    maxwidth="50rem"
                    floatingNavBtn={checkbox}
                />
                <TopicNav
                    className={styles.nav__navigation__topicnav}
                    floatingNavBtn={checkbox}
                />
            </nav>
        </div>
    );
};

export default FloatingNav;
