import styles from "../../styles/components/typography/Heading1.module.scss";

/* PROPS
- title: heading title
- accent: if true color is accent, default is primary
*/

const Heading1 = (props) => {
    return (
        <>
            <style jsx>
                {`
                    h1 {
                        ${props.accent
                            ? "color: var(--color-accent);"
                            : "color: var(--color-primary);"}
                    }
                `}
            </style>
            <h1 className={styles.heading}>{props.title}</h1>
        </>
    );
};

export default Heading1;
