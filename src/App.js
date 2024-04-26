import Search from './components/search/search';
import './App.css';
import CurrentWeather from './components/search/current-weather/current-weather';
import { WEATHER_API_URL } from './api';
import { WEATHER_API_KEY } from './api';
import { useState } from 'react';

/**
 * Main application componenet.
 * This component renders the Search component and handles the selection of cities.
 * @returns {JSX.Element} - JSX for rendering the App componenet.
 */

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    let [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    
    Promise.add([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse});
        setForecast({ city: searchData.label, ...forecastResponse});
      })
      .catch((err) => console.log(err));
  }


  return (
    <div className="container">
      {/* Render the Search componenet and pass the callback function */}
      <Search onSearchChange={handleOnSearchChange}/>
    {currentWeather && <CurrentWeather data={currentWeather} /> }
    </div>
  );
}

export default App;
