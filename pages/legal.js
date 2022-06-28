import styles from "../styles/pages/legal.module.scss";
import FloatingNav from "../components/FloatingNav";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import SimpleHeader from "../components/SimpleHeader";

import legalData from "../data/legalData";

// subcomponent
const LegalItem = (props) => {
    return (
        <>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </>
    );
};

const Legal = (props) => {
    return (
        <>
            <Meta title="Legal Information" />
            <FloatingNav />
            <SimpleHeader />
            <main className={styles.legal}>
                {legalData.map((item) => (
                    <LegalItem title={item.title} content={item.content} />
                ))}
            </main>
            <Footer />
        </>
    );
};

export default Legal;
