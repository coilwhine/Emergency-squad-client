import "./CommanderMessageCard.scss";

function CommanderMessageCard(): JSX.Element {
    return (
        <div className="CommanderMessageCard data-card">
            <h2 className="heading">דברי המפקד</h2>
            <span>
                בוקר טוב אלופים! מחר (21.02) יש ביקורת איפסון נשקים בכל הבתים, מצרף לינק להנחיות בנושא -  🫡 🔫 <a href="https://www.gov.il/he/departments/guides/firearm_storage" target="_blank">https://www.gov.il/he/departments/guides/firearm_storage</a>
            </span>
        </div>
    );
}

export default CommanderMessageCard;
