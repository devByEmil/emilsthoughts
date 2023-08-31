import Head from "next/head";

/* Props
? title: Meta title
? description: Meta description
? keywords: Meta keywords
*/

const Meta = (props) => {
    return (
        <Head>
            <title>
                {props.title
                    ? props.title + " | emilsthoughts"
                    : "emilsthoughts | Travel, Photography and Thoughts"}
            </title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="author" content="Emil Rädsch" />
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta
                name="description"
                content={
                    props.description
                        ? props.description
                        : "Travel, Photography, Philosophy - Just writing about stuff I think about."
                }
            />
            <meta
                name="keywords"
                content={
                    props.keywords
                        ? props.keywords
                        : "Travel, Photography, Philosophy, Work and Travel, Thoughts, emilsthoughts, Writing, Coding"
                }
            />
        </Head>
    );
};

export default Meta;
