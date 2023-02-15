import styles from "../../styles/components/buttons/PreviousPageButton.module.scss";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";

/* PROPS
? className=div classname
*/

const PreviousPageButton = (props) => {
    const router = useRouter();

    return (
        <div
            className={
                styles.wrapper + props.className ? " " + props.className : ""
            }
            onClick={() => router.back()}
        >
            <IoIosArrowBack className={styles.wrapper__icon} />
        </div>
    );
};

export default PreviousPageButton;
