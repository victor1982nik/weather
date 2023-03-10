import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {
  BoxDescription,
  BoxTemperature,
  BoxTitle,
  BoxWeekDay,
  List,
  ListItem,
  Title,
} from "./forecast.styled";

const BASE_IMG_URL = "http://openweathermap.org/img/w/";
const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const Forecast = ({ forecast }) => {
  if (forecast.length === 0) return;
  //const { weather, main, name, wind } = weatherObj;

  //console.log(forecast);
  const filteredData = forecast.list.slice(0, DAYS_OF_WEEK.length);
  console.log(filteredData);

  const today = new Date().getDay();
  const resultOrder = DAYS_OF_WEEK.slice(today, DAYS_OF_WEEK.length).concat(
    DAYS_OF_WEEK.slice(0, today)
  );

  return (
    <>
      <Title>Daily forecast</Title>
      <Accordion>
        {filteredData.map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <BoxTitle>
                  <img
                    alt="weather"
                    src={`${BASE_IMG_URL}${item.weather[0].icon}.png`}
                  />
                  <BoxWeekDay>{resultOrder[idx]}</BoxWeekDay>
                  <BoxDescription>{item.weather[0].description}</BoxDescription>
                  <BoxTemperature> {Math.round(item.main.temp)}</BoxTemperature>
                </BoxTitle>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <List>
                <ListItem>
                  <label>Feels like:</label>
                  <p>{Math.round(item.main.feels_like)}°C</p>
                </ListItem>
                <ListItem>
                  <label>Humidity:</label>
                  <p>{item.main.humidity}%</p>
                </ListItem>
                <ListItem>
                  <label>Pressure:</label>
                  <p>{item.main.pressure} mb</p>
                </ListItem>
                <ListItem>
                  <label>Wind:</label>
                  <p>{Math.round(item.wind.speed)} m/s</p>
                </ListItem>
              </List>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
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
