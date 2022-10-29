// Header component for simple blog pages, f.e. Post or Collection Listings
import Heading1 from "../typography/Heading1";
import MyImage from "../my/MyImage";

import styles from "../../styles/components/blog/SimpleBlogHeader.module.scss";
import images from "../../data/images";

/* PROPS
- title: Heading
? link: link (default is Homepage)
*/

const SimpleBlogHeader = (props) => {
    return (
        <header className={styles.wrapper}>
            <MyImage
                src={images.logo}
                height="1000"
                width="1000"
                maxwidth="10rem"
                alt="emilsthoughts Logo"
                dontcenter
                link={props.link ? props.link : "/"}
            />
            <Heading1 title={props.title} className={styles.wrapper__heading} />
        </header>
    );
};

export default SimpleBlogHeader;
