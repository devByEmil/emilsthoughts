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
                    }
                `}
            </style>
            <div className={coverStyles.container + " background"}>
                {props.children}
            </div>
        </>
    );
};

export default SectionCover;
