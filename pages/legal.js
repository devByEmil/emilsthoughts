import styles from "../styles/pages/legal.module.scss";
import FloatingNav from "../components/FloatingNav";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import SimpleHeader from "../components/SimpleHeader";

const Legal = (props) => {
    return (
        <>
            <Meta title="Legal Information" />
            <FloatingNav />
            <SimpleHeader />
            <Footer />
        </>
    );
};

export default Legal;
