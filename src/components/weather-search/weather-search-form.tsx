import { useState, type FormEvent } from "react";
import { getWeather } from "../../hooks/weather/api";
import { useWeather } from "../../hooks/weather/useWeather";

const WeatherSearchForm = () => {

    const {setWeatherData} = useWeather();
    const [cityName, setCityName] = useState<string>("Ain Smara");
    const [error, setError] = useState<string>("");

    const submit = (e: FormEvent<HTMLFormElement>) => {
        setError("")
        e.preventDefault();
        console.log(cityName)
        getWeather({cityName: cityName})
        .then((data) => {
            console.log(data)
            setWeatherData({
                cityName: data.name,
                temperature: data.main.temp,
                weatherDescription: data.weather[0].description,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
            })
        }).catch((error) => {
            setError(error.message)
        })
;
    }

  return (
    <div className="weather-search-form">

        <form className="weather-search-form" onSubmit={submit}>

            <input
                type='text'
                placeholder= 'Write City Name'
                defaultValue= 'Ain Smara'
                onChange={(event) => {
                    setCityName(event.target.value)
                }} 
                />
            <input
                type="submit"
                value="Search"
                />

        </form>

        <span>
            {error}
        </span>

    </div>
  )
}

export default WeatherSearchForm

