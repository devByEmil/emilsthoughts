import FloatingNav from "../components/FloatingNav";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import SimpleHeader from "../components/SimpleHeader";
import ContactForm from "../components/ContactForm";

import styles from "../styles/pages/contact.module.scss";

const Contact = (props) => {
    return (
        <>
            <Meta title="Contact" />
            <FloatingNav />
            <SimpleHeader />
            <main className={styles.main}>
                <ContactForm />
            </main>
            <Footer />
        </>
    );
};

export default Contact;
