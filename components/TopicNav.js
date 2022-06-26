import Link from "next/link";

import styles from "../styles/components/TopicNav.module.scss";

import images from "../data/images";

/* PROPS
- className: add styles to nav container
*/

const TopicNav = (props) => {
    return (
        <nav
            className={
                styles.container + ` ${props.className ? props.className : ""}`
            }
        >
            <style jsx>{`
                nav a:nth-child(1) {
                    grid-row: 1/3;
                    background-image: linear-gradient(
                            to right,
                            rgba(0, 0, 0, 0.4),
                            rgba(0, 0, 0, 0.4)
                        ),
                        url(${images.covers.australia});
                }
                nav a:nth-child(2) {
                    background-image: linear-gradient(
                            to right,
                            rgba(0, 0, 0, 0.4),
                            rgba(0, 0, 0, 0.4)
                        ),
                        url(${images.covers.philosophy});
                }
                nav a:nth-child(3) {
                    background-image: linear-gradient(
                            to right,
                            rgba(0, 0, 0, 0.4),
                            rgba(0, 0, 0, 0.4)
                        ),
                        url(${images.covers.photography});
                }
            `}</style>
            <Link href="#">
                <a className={styles.topic}>
                    <p className={styles.topicTitle}>Australia</p>
                </a>
            </Link>
            <Link href="#">
                <a className={styles.topic}>
                    <p className={styles.topicTitle}>Philosophy</p>
                </a>
            </Link>
            <Link href="#">
                <a className={styles.topic}>
                    <p className={styles.topicTitle}>Photography</p>
                </a>
            </Link>
        </nav>
    );
};

export default TopicNav;
