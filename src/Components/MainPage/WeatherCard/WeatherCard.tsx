import { useEffect, useState } from "react";
import "./WeatherCard.scss";
import weatherServices from "../../../Services/weather-service";
import { TbLocationFilled } from "react-icons/tb";
import { FaSun, FaCloudSun, FaCloud, FaCloudSunRain } from "react-icons/fa";
import { TiArrowUp } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../../App/weatherSlice";


function WeatherCard(): JSX.Element {
    const [location, setLocation] = useState(null);
    const weatherData = useSelector((state: { weatherData: WeatherData }) => state.weatherData);
    const dispatch = useDispatch();

    function getLocation() {

        try {
            const locationRequest = navigator.geolocation;

            if (locationRequest) {
                navigator.geolocation.getCurrentPosition((res) => {
                    setLocation({
                        latitude: res.coords.latitude,
                        longitude: res.coords.longitude
                    })
                });
            } else {
                console.log("User didn't consent to provide geolocation.");
            }
        } catch (error) {
            console.error(error)
        }
    }

    function weatherIconSelector(status: number) {
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
        if (!weatherData) {
            getLocation();
        }
    }, [])

    useEffect(() => {

        async function fetchWeatherData() {
            const data = await weatherServices.localWeather(location)
            dispatch(getWeather(data.current));
        }

        if (location) {
            fetchWeatherData();
        }

    }, [location])

    return (
        <div className="WeatherCard data-card">
            <h2 className="heading">מזג אוויר</h2>
            {weatherData ?
                (
                    <>
                        <i className="weather-icon">{weatherIconSelector(weatherData.weather_code)}</i>
                        <div className="location">
                            <i><TbLocationFilled /></i>
                            <span>כפר סבא</span>
                        </div>
                        <div className="data-wraper">
                            <span>&#8451;{weatherData.temperature_2m}</span>

                            <span className="wind">
                                <i style={{ transform: `rotate(${weatherData.wind_direction_10m}deg)` }}><TiArrowUp /></i>
                                {weatherData.wind_speed_10m}
                            </span>
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
                        <div className="data-wraper">
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
