import { useEffect, useState } from "react";
import "./LoginPage.scss";
import { FaGoogle } from "react-icons/fa";
import Header from "../Header/Header";


function LoginPage(): JSX.Element {

    function googleNavigate(url: string) {
        window.location.href = url;
    }

    async function testbtn() {
        const response = await fetch("http://localhost:3001/oauth",
            { method: "post" });
        const data = await response.json();
        googleNavigate(data.url);
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        const userDataString = urlParams.get('userData');
        const userAccessString = urlParams.get('accessToken');

        const userData = JSON.parse(decodeURIComponent(userDataString));
        const userAccess = JSON.parse(decodeURIComponent(userAccessString));

        if (userData) {
            const user = {
                googleId: userData.sub,
                firstName: userData.given_name,
                lastName: userData.family_name,
                email: userData.email,
                image: userData.picture,
                accessToken: userAccess
            };

            localStorage.setItem("squadUserData", JSON.stringify(user));
        }

    }, [])

    const [btnClr, setBtnClr] = useState<string>("var(--google-green)");

    useEffect(() => {

        const valArray = [
            "var(--google-blue)",
            "var(--google-red)",
            "var(--google-yellow)",
            "var(--google-green)"
        ];

        let clrCounter = 0;

        const colorChangeInterval = setInterval(() => {

            if (clrCounter >= 3) {
                clrCounter = 0
            } else {
                clrCounter++;
            }

            setBtnClr(valArray[clrCounter]);
        }, 3000);

        return () => clearInterval(colorChangeInterval);
    }, []);

    return (
        <div className="LoginPage">
            <Header />
            <div className="all-content-card">
                <h1>כיתת כוננות</h1>
                <div className="action-wraper">
                    <div className="text">
                        <span>כדי להשתמש באפליקציה הנך נדרש להתחבר למשתמש </span>
                        <span className="google-word">
                            <span className="google-letter google-blue">G</span>
                            <span className="google-letter google-red">O</span>
                            <span className="google-letter google-yellow">O</span>
                            <span className="google-letter google-blue">G</span>
                            <span className="google-letter google-green">L</span>
                            <span className="google-letter google-red">E</span>
                        </span>
                    </div>
                    <button
                        style={{ backgroundColor: btnClr }}
                        className="google-btn"
                        onClick={() => testbtn()}>
                        <FaGoogle />
                    </button>
                </div >
            </div>
        </div >
    );
}

export default LoginPage;
