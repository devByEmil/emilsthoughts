import Link from "next/link";

import styles from "../styles/pages/legal.module.scss";
import FloatingNav from "../components/FloatingNav";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import SimpleHeader from "../components/SimpleHeader";
import Heading3 from "../components/typography/Heading3";

import legalData from "../data/legalData";

// subcomponent
const LegalItem = (props) => {
    return (
        <>
            <Heading3 title={props.title} color={"var(--color-primary)"} />
            {props.content.map((item) => (
                <p className={styles.legal__content}>{item}</p>
            ))}
            {props.links
                ? props.links.map((item) => (
                      <Link href={item.href} className={styles.legal__link}>
                          <a>
                              <p>{item.title}</p>
                          </a>
                      </Link>
                  ))
                : ""}
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
                    <LegalItem
                        title={item.title}
                        content={item.content}
                        links={item.links ? item.links : []}
                    />
                ))}
            </main>
            <Footer />
        </>
    );
};

export default Legal;
