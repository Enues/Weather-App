import { useWeather } from "../../hooks/weather/useWeather";

const WeatherTable = () => {
  const { weatherData } = useWeather();

  if (!weatherData) {
    return <p className="weather-empty">Search for a city to see the weather.</p>;
  }

  return (
    <div className="weather-result">
      <h2 className="weather-city">{weatherData.cityName}</h2>
      <dl className="weather-grid">
        <div className="weather-item">
          <dt>Temperature</dt>
          <dd>{weatherData.temperature} °C</dd>
        </div>
        <div className="weather-item">
          <dt>Conditions</dt>
          <dd className="weather-description">{weatherData.weatherDescription}</dd>
        </div>
        <div className="weather-item">
          <dt>Humidity</dt>
          <dd>{weatherData.humidity} %</dd>
        </div>
        <div className="weather-item">
          <dt>Wind speed</dt>
          <dd>{weatherData.windSpeed} m/s</dd>
        </div>
      </dl>
    </div>
  );
};

export default WeatherTable;