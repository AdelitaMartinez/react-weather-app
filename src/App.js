import Search from './components/search/search';
import './App.css';
import CurrentWeather from './components/search/current-weather/current-weather';
import { WEATHER_API_URL } from './api';
import { WEATHER_API_KEY } from './api';

/**
 * Main application componenet.
 * This component renders the Search component and handles the selection of cities.
 * @returns {JSX.Element} - JSX for rendering the App componenet.
 */

function App() {

  const handleOnSearchChange = (searchData) => {
    let [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    const forcastFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    
    Promise.add([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
      })

    api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}


  }

  return (
    <div className="container">
      {/* Render the Search componenet and pass the callback function */}
      <Search onSearchChange={handleOnSearchChange}/>
      < CurrentWeather /> 
    </div>
  );
}

export default App;
