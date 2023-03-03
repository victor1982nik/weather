import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import { SearchBar } from "./SearchBar/SearchBar";
import { Forecast } from "./Forecast/Forecast";
import { getCities, getForecast } from "./api/fetchData";

const API_KEY = "f84519cc88de7b9b4e6a53de54726931";
const BASE_URL = "https://api.openweathermap.org";
axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  appid: API_KEY,
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);
  const [cities, setCities] = useState([]);
  

  useEffect(() => {
    if (!query) return;
    const getCitiesByquery = async (query) => {
      const response = await getCities(query);
      console.log(response.data);
      setCities(response.data);
    };
    getCitiesByquery(query);
  }, [query]);

  const handleQueryChange = (e) => {
    e.preventDefault();
  };

  const handleChangeInput = (e) => {    
    const input = e.target;
    setQuery(input.value);
  };

  const handleClick = (city) =>{
      // todo выбран город сделать запрос с координатами
      console.log(city)
  }

  return (
    <div className="App">
      <SearchBar
        inputText={query}
        onSubmit={handleQueryChange}
        onChange={handleChangeInput}
        citiesList={cities}
        onClick={handleClick}
      />
      <Forecast weatherObj={weather}></Forecast>
    </div>
  );
}

export default App;
