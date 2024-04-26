import Search from './components/search/search';
import './App.css';
import CurrentWeather from './components/search/current-weather/current-weather';

/**
 * Main application componenet.
 * This component renders the Search component and handles the selection of cities.
 * @returns {JSX.Element} - JSX for rendering the App componenet.
 */

function App() {

  const handleOnSearchChange = (searchData) => {
    let [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`/weather?lat={lat}&lon={lon}&appid={API key}`)

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
