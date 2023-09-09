import Meta from "../components/Meta";
import SimpleHeader from "../components/SimpleHeader";
import Heading1 from "../components/typography/Heading1";

import styles from "../styles/pages/about.module.scss";

const About = (props) => {
    return (
        <>
            <Meta title="About" />
            <SimpleHeader />
            <main className={styles.content}>
                <Heading1 title="What and Why" />
                <p className={styles.content__text}>
                    This isn&apos;t the typical travel-blog focused on making
                    money, with guides, tips and tricks and stuff like that
                    (That said, I might try to earn a few bucks off this at some
                    point lol). This is a different kind of blog - somewhere
                    where I just write about things in my head, whenever I feel
                    like writing them down.
                    <br />
                    Why do I do this? Honestly, I was thinking about this quite
                    a while - at some point, a few months before going to
                    Australia, I just felt like starting a blog, and the idea
                    kind of just kept being on my mind - so I started building
                    it. This wasn&apos;t a continuous progress at all, there
                    where weeks in a row where I didn&apos;t do anything for the
                    website. Even now, as I am writing this, the blog isn&apos;t
                    nearly done; I haven&apos;t even finished the first post. I
                    am writing this so that everybody who happens to come across
                    this, knows what it is and more importantly, why it exists.
                    To come to an conclusion:
                    <br />
                    <br />
                    This is a random blog about things shooting around on my
                    mind, written down because I felt like it.
                </p>
            </main>
        </>
    );
};

export default About;
