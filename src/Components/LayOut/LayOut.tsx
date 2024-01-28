import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./LayOut.scss";

function LayOut(): JSX.Element {
    return (
        <div className="LayOut">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default LayOut;
