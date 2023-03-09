import axios from "axios";

const API_KEY = "f84519cc88de7b9b4e6a53de54726931";
const BASE_URL = "https://api.openweathermap.org";
axios.defaults.baseURL = BASE_URL;

axios.defaults.params = {
  appid: API_KEY,
};

export const getCities = (query) => {  
  return axios.get(`geo/1.0/direct?q=${query}&limit=5`);
};

export const getCurrentWeather = (lat, lon) => {  
  return axios.get(`data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`);
};

export const getForecast = (lat, lon) => {  
  return axios.get(`data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`);
};
/*
export const getDailyForecast = async (lat, lon,start, end) => {
     
  const result = await axios.get(
    `https://history.openweathermap.org/data/2.5/history/city?lat=${lat}&lon=${lon}&units=metric&type=hour&start=${start}&end=${end}`
  );
  // does not work needs paid account
  return result;
};*/

