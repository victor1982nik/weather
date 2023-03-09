import {
  Card,
  Container,
  BoxTop,  
  BoxCity,
  BoxWeatherDescr,
  Img,
  BoxBottom,
  BoxTemperature,
  BoxWeatherDetails,
  BoxRow,
} from "./CurrentWeather.styled";
const BASE_IMG_URL = "http://openweathermap.org/img/w/";

export const CurrentWeather = ({ weatherObj }) => {
  if (weatherObj.length === 0) return;
  const { weather, main, name, wind } = weatherObj;

  console.log(weatherObj);
  const weatherImage = `${BASE_IMG_URL}${weather[0].icon}.png`;

  return (
    <Container>
      <Card>
        <BoxTop>
          <div>
            <BoxCity>{name} </BoxCity>
            <BoxWeatherDescr>{weather[0].main}</BoxWeatherDescr>
          </div>
          <Img alt="weather" src={weatherImage} />
        </BoxTop>
        <BoxBottom>
          <BoxTemperature>{Math.round(main.temp)}°C</BoxTemperature>
          <BoxWeatherDetails>
            <BoxRow>Details:</BoxRow>
            <BoxRow>
              <span>Humidity:</span>
              <span>{main.humidity}%</span>
            </BoxRow>
            <BoxRow>
              <span>Pressure:</span>
              <span>{main.pressure}hPa </span>
            </BoxRow>
            <BoxRow>
              <span>Wind:</span>
              <span>{Math.round(wind.speed)} m/s</span>
            </BoxRow>
          </BoxWeatherDetails>
        </BoxBottom>
      </Card>     
    </Container>
  );
};

/*
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
*/
