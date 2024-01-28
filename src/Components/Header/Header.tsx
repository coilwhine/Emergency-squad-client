import "./Header.scss";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <div
                className="user-team img"
                style={{ backgroundImage: 'url("./src/assets/Alfei_Menashe.png")' }}>
            </div>
            <h1 className="heading">כיתת כוננות</h1>
            <div
                className="user-img img"
                style={{ backgroundImage: 'url("./src/assets/daniel_hen.png")' }}>
            </div>
        </div>
    );
}

export default Header;
