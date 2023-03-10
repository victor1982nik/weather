import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./SearchBar/SearchBar";
import { CurrentWeather } from "./CurrentWeather/CurrentWeather";
import {  getCurrentWeather, getForecast } from "./api/fetchData";
import { Forecast } from "./Forecast/Forecast";

function App() {  
  const [currentWeather, setCurrentWeather] = useState([]);  
  const [forecast, setForecast] = useState([]);  
  const [city, setCity] = useState([]);
  
  useEffect(() => {
    if (city.length ===0) return;
     console.log("in useEffect", city)    
    
    const getForecastByCoordinates = async (lat,lon)=>{
      const responseCurrent = await getCurrentWeather(lat, lon);
      const responseForecast = await getForecast(lat, lon);
      //console.log(response.data);
      setCurrentWeather(responseCurrent.data);
      setForecast(responseForecast.data);     
    }
    getForecastByCoordinates(city.lat, city.lon)
  }, [city]);

  const handleQueryChange = (e) => {
    e.preventDefault();    
  };

  const handleClick = (selectedCity) =>{     
      setCity(selectedCity);      
  }
  //console.log("forecast", forecast)
  return (
    <div className="App container">
      
      <SearchBar        
        onSubmit={handleQueryChange}          
        onClick={handleClick}        
      />
       {currentWeather && <CurrentWeather weatherObj={currentWeather}></CurrentWeather> }
        {forecast && <Forecast forecast={forecast}></Forecast>}
    </div>
  );
}

export default App;
