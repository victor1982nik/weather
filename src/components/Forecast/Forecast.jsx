export const Forecast = ({ weatherObj }) => {
    console.log(weatherObj);
    if(weatherObj.length === 0) return;
    return (<>
        
        <div>Feels like: {weatherObj.main.feels_like}</div>
        <div>Humidity: {weatherObj.main.humidity}</div>
        <div>Pressure:{weatherObj.main.pressure}</div>
        <div>Temperature: {weatherObj.main.temp}</div>
        <div>Clouds: {weatherObj.weather[0].main}</div>
        <div>Wind speed: {weatherObj.wind.speed}</div>
        </>
        );
}