import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoApiOption } from "../../api";

/**
 * Search component for searching and selecting cities asynchronomously
 * @param {Object} props - The props passed to the Search Component. 
 * @params {Function} props.onSearchChange - Function to be called when a city is selected.
 * @returns {JSX.Element} - JSX for rendering the Search component.
 */

const Search = ({onSearchChange}) => {

  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    // Fetch from API URL, cities with min population
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOption)
    // Then we get response from Json, then log out response
    .then((response) => response.json())
    .then((response) => {
      return {
        // Need to store value to Latitude and Longitude
        options: response.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          }
        })
      }
    }
    .catch((err) => console.error(err))
  }

  // State for managing the search query
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData); // Call the parent component's callback function with selected data
  }

  return (
    <AsyncPaginate 
      placeholder ="Search for city"
      debounceTimeout ={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search;