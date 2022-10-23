import Link from "next/link";
import Meta from "../components/Meta";
import SimpleHeader from "../components/SimpleHeader";
import Heading3 from "../components/typography/Heading3";

import styles from "../styles/pages/legal.module.scss";
import legalData from "../data/legalData";

// subcomponent
const LegalItem = (props) => {
    return (
        <div className={styles.legal__item}>
            <Heading3 title={props.title} color={"var(--color-primary)"} />
            {props.content.map((item) => (
                <p>{item}</p>
            ))}
            {props.links
                ? props.links.map((item, index) => (
                      <>
                          <a
                              className={styles.legal__item__link}
                              target="_blank"
                              href={item.href}
                          >
                              {item.title}
                          </a>
                          {index != props.links.length - 1 ? <br /> : ""}
                      </>
                  ))
                : ""}
        </div>
    );
};

const Legal = (props) => {
    return (
        <>
            <Meta title="Legal Information" />
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
        </>
    );
};

export default Legal;
