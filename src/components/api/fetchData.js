import axios from "axios";
import { calcStartEndDay } from "./dateCalc";

const API_KEY = "f84519cc88de7b9b4e6a53de54726931";
const BASE_URL = "https://api.openweathermap.org";
const BASE_URL_HISTORY_REQUEST = "https://history.openweathermap.org/";

axios.defaults.params = {
  appid: API_KEY,
};

export const getCities = (query) => {
  axios.defaults.baseURL = BASE_URL;
  return axios.get(`geo/1.0/direct?q=${query}&limit=5`);
};

export const getForecast = (lat, lon) => {
  axios.defaults.baseURL = BASE_URL;
  return axios.get(`data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`);
};

export const getDailyForecast = async (lat, lon) => {
  const { start, end } = await calcStartEndDay(lat, lon);
  axios.defaults.baseURL = BASE_URL_HISTORY_REQUEST;
  //console.log("start", start.valueOf());
  //console.log("end", end.valueOf());
  debugger;

  const result = await axios.get(
    `data/2.5/history/city?lat=${lat}&lon=${lon}&units=metric&type=hour&start=${start}&end=${end}`
  );
  console.log(result);
  return result;
};
/*
const calcStartEndDay = async (lat, lon) => {
  debugger;
  axios.defaults.baseURL = "https://maps.googleapis.com/maps/";
  const url = `api/timezone/json?location=${lat},${lon}&timestamp=${
    Date.now() / 1000
  }&key=${API_KEY_GOOGLE_MAPS}`;
  const response = await axios.get(url);
  console.log(response.data);
};*/
