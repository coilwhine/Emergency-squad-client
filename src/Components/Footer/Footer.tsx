import { NavLink } from "react-router-dom";
import "./Footer.scss";
import { TbMapPinFilled, TbMailFilled, TbArticleFilledFilled } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import browserBehavior from "../../Utils/browserBehavior";


function Footer(): JSX.Element {

    return (
        <div className="Footer">
            <nav>
                <NavLink
                    to="/"
                    onClick={() => browserBehavior.scrollToTheTop()}
                ><GoHomeFill /></NavLink >

                <NavLink
                    to="/1"
                    onClick={() => browserBehavior.scrollToTheTop()}
                ><TbMapPinFilled /></NavLink >

                <NavLink
                    to="/2"
                    onClick={() => browserBehavior.scrollToTheTop()}
                ><TbMailFilled /></NavLink >

                <NavLink
                    to="/3"
                    onClick={() => browserBehavior.scrollToTheTop()}
                ><TbArticleFilledFilled /></NavLink >
            </nav>
            <span className="copyright">
                &#169; האפליקציה פותחה בהתנדבות ע״י <em>דניאל חן</em>
            </span>
        </div>
    );
}

export default Footer;
