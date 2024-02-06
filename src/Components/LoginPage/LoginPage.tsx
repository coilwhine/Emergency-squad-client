import { useEffect, useState } from "react";
import "./LoginPage.scss";
import { FaGoogle } from "react-icons/fa";


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
            <div className="all-content-card">
                <h1>כיתת כוננות</h1>
                <div className="action-wraper">
                    <div className="text">
                        <span>כדי להשתמש באפליקציה הנך נדרש להתחבר למשתמש </span>
                        <span className="google-word">
                            <span className="google-blue">G</span>
                            <span className="google-red">O</span>
                            <span className="google-yellow">O</span>
                            <span className="google-blue">G</span>
                            <span className="google-green">L</span>
                            <span className="google-red">E</span>
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
