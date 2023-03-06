import { nanoid } from "nanoid";
import { Container, Item, Ul } from "./Forecast.styled";
const { DateTime } = require('luxon');
const desktopParam = 8;

export const Forecast = ({ weatherObj }) => {
  if (weatherObj.length === 0) return;
  const { city } = weatherObj;

   console.log(weatherObj);
  const filteredData = weatherObj.list.filter((item, index) => index < desktopParam    
); //fiter today weather 
  // console.log(filteredData)
  //const {  list } = filteredData;
  const offset = city.timezone / 3600;
  //console.log(offset)
  const localTime = DateTime.utc().plus({hours: offset})
  //console.log(localTime.toFormat('hh-mm'))
  
  return (
    <Container>

      <div>Weather in the city: {city.name} </div>
      <div>Time: {localTime.toFormat('HH:mm')}</div>
      {filteredData && (
        <Ul>
          {filteredData.map((item) => (
            <Item key={nanoid()}>
              <div>                
                {item.dt_txt.slice(11,13)}                
              </div>
              <div>
                Temperature: {Math.round(item.main.temp)}
                <sup>o</sup>
              </div>
              <div>Humidity: {item.main.humidity}%</div>
              <div>Pressure:{item.main.pressure}</div>
              <div>
                Feels like: {Math.round(item.main.feels_like)}
                <sup>o</sup>
              </div>
              <div>Clouds: {item.weather[0].main}</div>
              <div>Wind speed: {Math.round(item.wind.speed)}m/s</div>
            </Item>
          ))}
        </Ul>
      )}

      {/* <div>
        {new Date(list[0].dt*1000).getHours()}: {list[0].main.temp}
      </div>
      <div>Humidity: {list[0].main.humidity}</div>
      <div>Pressure:{list[0].main.pressure}</div>
      <div>Temperature: {list[0].main.temp}</div>
      <div>Clouds: {list[0].weather[0].main}</div>
      <div>Wind speed: {list[0].wind.speed}</div> */}
    </Container>
  );
};
