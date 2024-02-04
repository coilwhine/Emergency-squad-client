import "./LoginPage.scss";


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

    return (
        <div className="LoginPage">
            <button onClick={() => testbtn()}>test btn</button>
        </div>
    );
}

export default LoginPage;
