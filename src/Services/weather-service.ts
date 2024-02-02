type Location = {
    latitude: number,
    longitude: number
}

class WeatherServices {

    async localWeather(location: Location) {

        const requestOptions: RequestInit = {
            method: 'GET',
            redirect: 'follow'
        };

        try {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,is_day,rain,snowfall,weather_code,wind_speed_10m,wind_direction_10m`, requestOptions);
            const result = await response.json();

            return result;
        } catch (error) {
            console.error(error);
        }
    }
}

const weatherServices = new WeatherServices();
export default weatherServices;
