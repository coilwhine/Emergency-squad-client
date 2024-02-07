import { useDispatch, useSelector } from "react-redux";
import "./Header.scss";
import { UserModel } from "../../Models/auth-models";
import { logout } from "../../App/authTokenSlice";

function Header(): JSX.Element {
    const user = useSelector((state: { authData: UserModel }) => state.authData);
    const dispatch = useDispatch();

    return (
        <div className="Header">
            {user && <div
                className="user-team img"
                style={{ backgroundImage: 'url("./src/assets/app-logo.png")' }}>
            </div>}
            <h1 className="heading">כיתת כוננות</h1>
            {user && <div
                className="user-img img"
                style={{ backgroundImage: `url(${user.image ? user.image : "./src/assets/default-profile-image.png"})` }}
                onClick={() => dispatch(logout())}
            >
            </div>}
        </div >
    );
}

export default Header;
