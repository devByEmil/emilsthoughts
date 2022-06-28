// Header component for simple pages (about, legal, etc)
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/components/SimpleHeader.module.scss";

import images from "../data/images";

const SimpleHeader = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.header__image}>
                <Link href="/">
                    <a>
                        <Image
                            src={images.bannerBigV}
                            alt="emilsthoughts Logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </Link>
            </div>
        </header>
    );
};

export default SimpleHeader;
