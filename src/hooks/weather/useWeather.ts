import { createContext} from "react";

export type WeatherData = {
    cityName: string,
    temperature: number,
    weatherDescription: string,
    humidity:number,
    windSpeed:number 
}

export type WeatherContextType = {
    weatherData: WeatherData | null;
    setWeatherData: (data: WeatherData | null) => void;
}

export const Context = createContext<WeatherContextType| null>(null)

