import Footer from "../components/Footer";
import FloatingNav from "../components/FloatingNav";
import Meta from "../components/Meta";

const Layout = (props) => {
    return (
        <>
            <Meta />
            <FloatingNav />
            {props.children}
            <Footer />
        </>
    );
};

export default Layout;
