import { NavLink } from "react-router-dom";
import "./Footer.scss";
import { TbMapPinFilled, TbMailFilled, TbArticleFilledFilled } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";


function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <nav>
                <NavLink to="/"><GoHomeFill /></NavLink >
                <NavLink to="/1"><TbMapPinFilled /></NavLink >
                <NavLink to="/2"><TbMailFilled /></NavLink >
                <NavLink to="/3"><TbArticleFilledFilled /></NavLink >
            </nav>
            <span className="copyright">
                &#169; האפליקציה פותחה בהתנדבות ע״י <em>דניאל חן</em>
            </span>
        </div>
    );
}

export default Footer;
