import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./SearchBar/SearchBar";
import { ForecastDaily} from "./ForecastDaily/ForecastDaily";
//import { Forecast, } from "./Forecast/Forecast";
import { getCities, getForecast, getDailyForecast } from "./api/fetchData";



function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getCitiesByQuery = async (query) => {
      const response = await getCities(query);
      // console.log(response.data);
      setCities(response.data);
    };
    getCitiesByQuery(query);
  }, [query]);

  useEffect(() => {
    if (city.length ===0) return;
     console.log("useEffect", city)
    
    //console.log(localTime)
    const getForecastByCoordinates = async (lat,lon)=>{

      const response = await getDailyForecast(lat, lon);
      //console.log(response.data);
      // setWeather(response.data)
      setIsSelected(false)
    }
    getForecastByCoordinates(city.lat, city.lon)
  }, [city]);

  const handleQueryChange = (e) => {
    e.preventDefault();
    
    const form = e.target;
    console.log(form.elements.query.value)
    setQuery(form.elements.query.value)
    setIsSelected(true);
    // handleChangeInput(e)
  };

  const handleChangeInput = (e) => {    
    const input = e.target;
    setQuery(input.value);
    setIsSelected(true);
  };

  const handleClick = (selectedCity) =>{      
      setCity(selectedCity);
      // setIsSelected(true);
      setQuery("");
  }

  

  return (
    <div className="App">
      <SearchBar
        inputText={query}
        onSubmit={handleQueryChange}
        onChange={handleChangeInput}
        citiesList={cities}
        onClick={handleClick}
        isSelected={isSelected}
      />
      {/* <Forecast weatherObj={weather}></Forecast> */}
      <ForecastDaily weatherObj={weather}></ForecastDaily>
    </div>
  );
}

export default App;
