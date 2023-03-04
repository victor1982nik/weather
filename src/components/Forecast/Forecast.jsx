import { nanoid } from "nanoid";
import { Ul } from "./Forecast.styled";
export const Forecast = ({ weatherObj }) => {
  // console.log(weatherObj);

  if (weatherObj.length === 0) return;
  const { city, list } = weatherObj;
  return (
    <>
      <div>Weather in the city: {city.name}</div>
      {list && (
        <Ul>
          {list.map((item) => (
            <li key={nanoid()}>
              <div>
                Time: {new Date(item.dt * 1000).toLocaleString()}:00
              </div>
              <div>Temperature: {Math.round(item.main.temp)}<sup>o</sup>C</div>
              <div>Humidity: {item.main.humidity}</div>
              <div>Pressure:{item.main.pressure}</div>
              <div>Feels like: {Math.round(item.main.feels_like)}<sup>o</sup>C</div>
              <div>Clouds: {item.weather[0].main}</div>
              <div>Wind speed: {Math.round(item.wind.speed)}</div>
            </li>
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
    </>
  );
};
