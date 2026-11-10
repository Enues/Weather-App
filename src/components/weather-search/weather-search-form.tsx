const WeatherSearchForm = () => {

  return (
    <form className="weather-search-form">

        <input
            type='text'
            placeholder= 'Write City Name'
            defaultValue= 'Ain Smara'
        />
        <input
            type="submit"
            defaultValue="Search"
        />

    </form>
  )
}

export default WeatherSearchForm