import Meta from "../components/Meta";
import SimpleHeader from "../components/SimpleHeader";
import ContactForm from "../components/ContactForm";

import styles from "../styles/pages/contact.module.scss";

const Contact = (props) => {
    return (
        <>
            <Meta title="Contact" />
            <SimpleHeader />
            <main className={styles.main}>
                <ContactForm />
            </main>
        </>
    );
};

export default Contact;
