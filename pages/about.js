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
                    I started building this blog before I came to Australia,
                    around july 2022.
                    <br />
                    <br />
                    Back then it wasn't so much much about the actual writing
                    part but more about the coding. I didn't use a CMS like
                    Wordpress or Squarespace, even though that would have been
                    much faster, because for me, the main bit was about coding
                    the website, not creating content for it. I didn't finish it
                    up before I left Germany though, there was just too much
                    going on at home that I couldn't find enough time. So it
                    became a bit of a side hobby while travelling, whenever I
                    had free time and felt the need to be productive.
                    <br />
                    <br />
                    This wasn't the case that often, especially in the first few
                    months after arriving; Everything was new and I couldn't put
                    any thought and effort into the blog. Every now and then I
                    kept working on it though. I made very slow progress, but I
                    made progress. While travelling I also started writing quite
                    a bit, be it for my diary, to cope with my thoughts or for
                    the blog, even though it wasn't published yet.
                    <br />
                    <br />I started to genuinely enjoy writing. About my
                    thoughts, my experiences, my struggles. It helps me cope
                    when I'm not feeling particularly well. It is the sort of
                    hobby where I can shut down into my own world and recharge
                    my social battery.
                    <br />
                    <br />
                    So this is what this is I guess. A place where I just write
                    about stuff I feel or experience, whenever I feel the need
                    to do so.
                </p>
            </main>
        </>
    );
};

export default About;
