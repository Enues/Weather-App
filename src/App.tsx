import './App.css'
import WeatherContext from './components/weather-search/weather-context'
import WeatherSearchForm from './components/weather-search/weather-search-form'

function App() {


  return (
    <WeatherContext>
      <WeatherSearchForm/>
    </WeatherContext>
  )
}

export default App
