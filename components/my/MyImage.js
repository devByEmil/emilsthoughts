// MY components are modified external components
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/components/my/MyImage.module.scss";

/* PROPS (? = optional)
- height: image height
- width: image width
- maxwidth: wanted with of picture (for scale up and down)
- src: image src
? alt: image alternative text
? link: make image a link, provide source
*/

const MyImage = (props) => {
    return (
        <>
            <style jsx>
                {`
                    .container {
                        max-width: ${props.maxwidth};
                    }
                `}
            </style>
            <div className={styles.container + " container"}>
                <Link href={props.link ? props.link : ""}>
                    <a>
                        <Image
                            src={props.src}
                            alt={props.alt ? props.alt : "Alternative"}
                            height={props.height}
                            width={props.width}
                            layout="responsive"
                        />
                    </a>
                </Link>
            </div>
        </>
    );
};

export default MyImage;