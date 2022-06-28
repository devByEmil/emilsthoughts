import styles from "../styles/pages/contact.module.scss";
import FloatingNav from "../components/FloatingNav";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import SimpleHeader from "../components/SimpleHeader";

const Contact = (props) => {
    return (
        <>
            <Meta title="Contact" />
            <FloatingNav />
            <SimpleHeader />
            <Footer />
        </>
    );
};

export default Contact;
