import './App.css'
import './components/weather-search/weather.css'
import WeatherContext from './components/weather-search/weather-context'
import WeatherSearchForm from './components/weather-search/weather-search-form'
import WeatherTable from './components/weather-search/weather-table'

function App() {
  return (
    <WeatherContext>
      <main className="app">
        <section className="weather-card">
          <header className="weather-header">
            <h1>Weather</h1>
            <p>Search current conditions by city</p>
          </header>
          <WeatherSearchForm />
          <WeatherTable />
        </section>
      </main>
    </WeatherContext>
  )
}

export default App
