import coverStyles from "../styles/components/SectionCover.module.scss";

// Import Cover-Picture in parent element, than pass image.src as imagesrc-prop
const SectionCover = (props) => {
    return (
        <>
            <style jsx>
                {`
                    .background {
                        background-image: linear-gradient(
                                to right,
                                rgba(0, 0, 0, 0.3),
                                rgba(0, 0, 0, 0.3)
                            ),
                            url(${props.imagesrc});
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                `}
            </style>
            <header className={coverStyles.container + " background"}>
                {props.children}
            </header>
        </>
    );
};

export default SectionCover;
