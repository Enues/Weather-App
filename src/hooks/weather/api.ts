
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export type WeatherFilters = {
    cityName: string,
}
export async function getWeather(
    {cityName}: WeatherFilters
){

    return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`, 
    ).then((res) => {
        if (!res.ok) throw new Error(`WEATHER REQUEST FAILED ${res.status}`)
        return res.json()
    })




}