import Search from './components/search/search';
import './App.css';
import CurrentWeather from './components/search/current-weather/cuurent-weather';

/**
 * Main application componenet.
 * This component renders the Search component and handles the selection of cities.
 * @returns {JSX.Element} - JSX for rendering the App componenet.
 */

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData); // Log the selected city data to the console
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
