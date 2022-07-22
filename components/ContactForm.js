import Heading1 from "./typography/Heading1";
import Heading3 from "./typography/Heading3";

import styles from "../styles/components/ContactForm.module.scss";

const ContactForm = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.info__heading}>
                    <Heading1 title="Interested?" color="white" />
                    <Heading3
                        title="contact me."
                        color="white"
                        className={styles.info__heading__subheading}
                    />
                </div>
            </div>
            <div className={styles.formbox}>
                <form action="/api/mail" method="POST">
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="name">Name</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" id="heading" name="heading" required />
                    <label htmlFor="heading">Heading</label>
                    <input type="text" id="topic" name="topic" required />
                    <input type="text" id="message" name="message" required />
                    <label htmlFor="message">Message</label>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
