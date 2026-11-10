import { useState, type FormEvent } from "react";
import { getWeather } from "../../hooks/weather/api";
import { useWeather } from "../../hooks/weather/useWeather";

const WeatherSearchForm = () => {
  const { setWeatherData } = useWeather();
  const [cityName, setCityName] = useState<string>("Ain Smara");
  const [error, setError] = useState<string>("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    setError("");
    e.preventDefault();
    getWeather({ cityName: cityName })
      .then((data) => {
        setWeatherData({
          cityName: data.name,
          temperature: data.main.temp,
          weatherDescription: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="weather-search">
      <form className="weather-form" onSubmit={submit}>
        <input
          className="weather-input"
          type="text"
          placeholder="Enter city name"
          defaultValue="Ain Smara"
          onChange={(event) => {
            setCityName(event.target.value);
          }}
        />
        <button className="weather-button" type="submit">
          Search
        </button>
      </form>
      {error ? <p className="weather-error">{error}</p> : null}
    </div>
  );
};

export default WeatherSearchForm;
