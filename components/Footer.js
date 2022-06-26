import Image from "next/image";
import Link from "next/link";

import styles from "../styles/components/Footer.module.scss";
import MainButton from "./buttons/MainButton";

import images from "../data/images";

const Footer = (props) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__image}>
                <Image
                    src={images.bannerBigH}
                    alt="emilsthoughts Logo"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <nav className={styles.footer__nav}>
                <Link href="#">
                    <a className={styles.footer__nav__link}>About</a>
                </Link>
                <Link href="#">
                    <a className={styles.footer__nav__link}>Contact</a>
                </Link>
                <Link href="#">
                    <a className={styles.footer__nav__link}>Legal</a>
                </Link>
            </nav>
            <MainButton
                title="Support Me!"
                href="#"
                className={styles.footer__button}
            />
            <p className={styles.footer__copyright}>&copy; Emil Rädsch 2022</p>
        </footer>
    );
};

export default Footer;
