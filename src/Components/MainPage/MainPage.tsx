import CommanderMessageCard from "./CommanderMessageCard/CommanderMessageCard";
import "./MainPage.scss";
import NextBriefingCard from "./NextBriefingCard/NextBriefingCard";
import SoldierCountCard from "./SoldierCountCard/SoldierCountCard";
import WeatherCard from "./WeatherCard/WeatherCard";

function MainPage(): JSX.Element {
    return (
        <div className="MainPage">
            <div className="small-cards-wraper">
                <SoldierCountCard />
                <WeatherCard />
            </div>
            <NextBriefingCard />
            <CommanderMessageCard />
        </div>
    );
}

export default MainPage;
