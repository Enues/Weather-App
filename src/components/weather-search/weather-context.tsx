import {  useState, type ReactNode } from "react";
import { Context, type WeatherData } from "../../hooks/weather/useWeather";


const WeatherContext = ({children}: {children: ReactNode}) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);



  return (
    <Context.Provider value={{weatherData, setWeatherData}}>
        {children}
    </Context.Provider>

  )
}

export default WeatherContext