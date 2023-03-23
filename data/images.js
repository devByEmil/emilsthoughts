import imageCoversHome from "../public/covers/HomeCover.JPG";
import imageCoversAustralia from "../public/covers/pexels-hugo-heimendinger-1766215.jpg";
import imageCoversPhilosophy from "../public/covers/pexels-janko-ferlic-590493.jpg";
import imageCoversPhotography from "../public/covers/pexels-aron-visuals-1686451.jpg";
import imageBannerBigH from "../public/Banner-Big-Horizontal.png";
import imageBannerBigV from "../public/Banner-Big-Vertical.png";
import imageLogo from "../public/Logo.png";
import contactBg from "../public/contact_component.jpg";

// in here are paths to images
const images = {
    covers: {
        home: imageCoversHome.src,
        australia: imageCoversAustralia.src,
        philosophy: imageCoversPhilosophy.src,
        photography: imageCoversPhotography.src,
    },
    bannerBigH: imageBannerBigH.src,
    bannerBigV: imageBannerBigV.src,
    logo: imageLogo.src,
    contactbg: contactBg.src,
};

export default images;
