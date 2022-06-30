import styles from "../../styles/components/typography/Heading3.module.scss";

/* PROPS
- title: heading title
- color: title color
? className: h3 styling
*/

const Heading3 = (props) => {
    return (
        <>
            <style jsx>
                {`
                    h3 {
                        color: ${props.color};
                    }
                `}
            </style>
            <h3
                className={
                    styles.heading +
                    ` ${props.className ? props.className : ""}`
                }
            >
                {props.title}
            </h3>
        </>
    );
};

export default Heading3;
