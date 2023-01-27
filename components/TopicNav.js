import Link from "next/link";

import styles from "../styles/components/TopicNav.module.scss";
import Heading3 from "./typography/Heading3";

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
            <Link href="/australia">
                <a className={styles.topic}>
                    <Heading3 title="Australia" color="white" />
                </a>
            </Link>
            <Link href="/workinprogress">
                <a className={styles.topic}>
                    <Heading3 title="Philosophy" color="white" />
                </a>
            </Link>
            <Link href="/workinprogress">
                <a className={styles.topic}>
                    <Heading3 title="Photography" color="white" />
                </a>
            </Link>
        </nav>
    );
};

export default TopicNav;
