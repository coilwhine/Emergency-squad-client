import { useEffect, useState } from "react";
import "./WeatherCard.scss";
import wheatherServices from "../../../Services/wheather-service";
import { TbLocationFilled } from "react-icons/tb";
import { FaSun, FaCloudSun, FaCloud, FaCloudSunRain } from "react-icons/fa";
import { TiArrowUp } from "react-icons/ti";



function WeatherCard(): JSX.Element {
    const [wheatherData, setWheatherData] = useState<wheatherData>(null);

    function wheatherIconSelector(status: number) {
        if (status = 0) {
            return <FaSun />;
        } else if (status < 4) {
            return <FaCloudSun />;
        } else if (status < 50) {
            return <FaCloud />;
        } else {
            return <FaCloudSunRain />;
        }
    }

    useEffect(() => {
        const fetchWheatherData = async () => {
            const data = await wheatherServices.localWeather()
            setWheatherData(data.current);
        }
        fetchWheatherData();
    }, [])

    return (
        <div className="WeatherCard data-card">
            <h2 className="heading">מזג אוויר</h2>
            {wheatherData ?
                (
                    <>
                        <i className="wheather-icon">{wheatherIconSelector(wheatherData.weather_code)}</i>
                        <div className="location">
                            <i><TbLocationFilled /></i>
                            <span>כפר סבא</span>
                        </div>
                        <div className="temperature-wraper">
                            <span>&#8451;{wheatherData.temperature_2m}</span>

                            <span className="wind">
                                <i style={{ transform: `rotate(${wheatherData.wind_direction_10m}deg)` }}><TiArrowUp /></i>
                                {wheatherData.wind_speed_10m}</span>
                        </div>
                    </>
                )
                :
                (
                    <>
                        <div className="location">
                            <i><TbLocationFilled /></i>
                            <span>--</span>
                        </div>
                        <div className="temperature-wraper">
                            <span>--</span>

                            <span className="wind">--</span>
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default WeatherCard;
