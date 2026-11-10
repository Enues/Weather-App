import { useState, type FormEvent } from "react";
import { getWeather } from "../../hooks/weather/api";

const WeatherSearchForm = () => {

    const [cityName, setCityName] = useState<string>();
    const [error, setError] = useState<string>("");

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getWeather({cityName: cityName ?? "Paris"})
        .then((data) => {
            console.log(data)
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

