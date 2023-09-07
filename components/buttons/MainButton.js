import Link from "next/link";

import styles from "../../styles/components/buttons/MainButton.module.scss";

/* PROPS
href: href
title: title
? className: style <a></a>
? targetblank: open target in new tab
*/

const MainButton = (props) => {
    return (
        <Link href={props.href ? props.href : "#"}>
            <a
                className={
                    styles.container +
                    ` ${props.className ? props.className : ""}`
                }
                target={props.targetblank ? "_blank" : "_self"}
            >
                <p className={styles.title}>
                    {props.title ? props.title : "Button"}
                </p>
            </a>
        </Link>
    );
};

export default MainButton;
