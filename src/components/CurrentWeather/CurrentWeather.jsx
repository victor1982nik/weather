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
            <BoxWeatherDescr>{weather[0].description}</BoxWeatherDescr>
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
              <span>{main.pressure} mb</span>
            </BoxRow>
            <BoxRow>
              <span>Wind:</span>
              <span>{Math.round(wind.speed)} m/s</span>
            </BoxRow>
            <BoxRow>
              <span>Real feel:</span>
              <span>{Math.round(main.feels_like)}°C</span>
            </BoxRow>
          </BoxWeatherDetails>
        </BoxBottom>
      </Card>     
    </Container>
  );
};



