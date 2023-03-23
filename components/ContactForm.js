import emailjs from "@emailjs/browser";
import Heading1 from "./typography/Heading1";
import Heading3 from "./typography/Heading3";
import { useState } from "react";

import styles from "../styles/components/ContactForm.module.scss";
import images from "../data/images";

const ContactForm = (props) => {
    const [loading, setLoading] = useState(false);

    const sendMail = async (e) => {
        setLoading(true);
        e.preventDefault();

        // build email
        const content = e.target.elements;
        const emailparams = {
            name: content.name.value,
            user_email: content.user_email.value,
            heading: content.heading.value,
            topic: content.topic.value,
            message: content.message.value,
        };

        // emailjs config
        const public_key = "LX4QhyiQR8-qG1A8e";

        // send email
        await emailjs.send(
            "default_service",
            "et_contact_form",
            emailparams,
            public_key
        );

        // clear form
        e.target.reset();

        setLoading(false);
    };

    return (
        <>
            <style jsx>{`
                #wrapper {
                    background-image: linear-gradient(
                            to top right,
                            rgba(255, 255, 255, 0.7),
                            rgba(255, 255, 255, 0.7)
                        ),
                        url("${images.contactbg}");
                }
            `}</style>
            <div className={styles.wrapper} id="wrapper">
                {loading && (
                    <div className={styles.sending}>
                        <h1 className={styles.sending__text}>Sending...</h1>
                    </div>
                )}
                <div className={styles.info}>
                    <div className={styles.info__heading}>
                        <Heading1 title="Interested?" color="white" />
                        <Heading3
                            title="contact me."
                            color="white"
                            className={styles.info__heading__subheading}
                        />
                    </div>
                    <label
                        htmlFor="formsubmit"
                        className={styles.info__formsubmit}
                    >
                        Send
                    </label>
                </div>
                <form onSubmit={sendMail} className={styles.formbox}>
                    <div className={styles.formbox__row}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className={styles.formbox__input}
                            required
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your EMail"
                            className={styles.formbox__input}
                            required
                        />
                    </div>
                    <div className={styles.formbox__row}>
                        <input
                            type="text"
                            name="heading"
                            placeholder="Heading"
                            className={styles.formbox__input}
                            required
                        />
                        <select
                            name="topic"
                            className={styles.formbox__dropdown}
                            required
                        >
                            <option value="" disabled selected>
                                Concerning what topic?
                            </option>
                            <option value="Australia">Australia</option>
                            <option value="Philosophy">Philosophy</option>
                            <option value="Photography">Photography</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className={styles.formbox__row}>
                        <textarea
                            name="message"
                            placeholder="What do you want to say?"
                            className={styles.formbox__textarea}
                            required
                        />
                    </div>
                    <input
                        type="submit"
                        id="formsubmit"
                        className={styles.formbox__hiddensubmit}
                    />
                </form>
            </div>
        </>
    );
};

export default ContactForm;
