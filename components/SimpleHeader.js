// Header component for simple pages (about, legal, etc)
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/components/SimpleHeader.module.scss";
import MyImage from "./my/MyImage";

import images from "../data/images";

const SimpleHeader = (props) => {
    return (
        <header className={styles.header}>
            <MyImage
                src={images.bannerBigV}
                height="1000"
                width="2000"
                alt="emilsthoughts Logo"
                maxwidth="40rem"
                link="/"
            />
        </header>
    );
};

export default SimpleHeader;
