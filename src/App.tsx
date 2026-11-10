import './App.css'
import WeatherContext from './components/weather-search/weather-context'
import WeatherSearchForm from './components/weather-search/weather-search-form'
import WeatherTable from './components/weather-search/weather-table'

function App() {


  return (
    <WeatherContext>
      <WeatherSearchForm/>
      <WeatherTable/>
    </WeatherContext>
  )
}

export default App
