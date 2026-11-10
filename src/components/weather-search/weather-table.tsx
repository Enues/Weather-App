import { useWeather } from "../../hooks/weather/useWeather"

const WeatherTable = () => {
    const {weatherData} = useWeather();


  return (
    <div>
        <span>{weatherData?.cityName ?? ""}</span><br/>
        <span>{weatherData?.temperature ?? ""}</span><br/>
        <span>{weatherData?.weatherDescription ?? ""}</span><br/>
        <span>{weatherData?.humidity ?? ""}</span><br/>
        <span>{weatherData?.windSpeed ?? ""}</span><br/>
    </div>
  )
}

export default WeatherTable