import SectionCover from "../../components/SectionCover";
import PostItem from "../../components/blog/PostItem";

import Link from "next/link";

import styles from "../../styles/pages/australia/australiaHome.module.scss";
import images from "../../data/images";

const AustraliaHome = ({ posts, data }) => {
    console.log(data);
    return (
        <>
            <SectionCover imagesrc={images.covers.australia}>
                <Link href="australia/allposts">
                    <a>
                        <p>All Posts</p>
                    </a>
                </Link>
                <Link href="australia/allcollections">
                    <a>
                        <p>All Collections</p>
                    </a>
                </Link>
            </SectionCover>
        </>
    );
};

export default AustraliaHome;
