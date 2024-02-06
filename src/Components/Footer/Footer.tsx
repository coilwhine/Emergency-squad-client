import { NavLink } from "react-router-dom";
import "./Footer.scss";
import { TbMapPinFilled, TbMailFilled, TbArticleFilledFilled } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";


function Footer(): JSX.Element {

    function scrollToTheTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="Footer">
            <nav>
                <NavLink to="/" onClick={() => scrollToTheTop()}><GoHomeFill /></NavLink >
                <NavLink to="/1" onClick={() => scrollToTheTop()}><TbMapPinFilled /></NavLink >
                <NavLink to="/2" onClick={() => scrollToTheTop()}><TbMailFilled /></NavLink >
                <NavLink to="/3" onClick={() => scrollToTheTop()}><TbArticleFilledFilled /></NavLink >
            </nav>
            <span className="copyright">
                &#169; האפליקציה פותחה בהתנדבות ע״י <em>דניאל חן</em>
            </span>
        </div>
    );
}

export default Footer;
