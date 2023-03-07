import axios from "axios";

const API_KEY_GOOGLE_MAPS = "AIzaSyDwcBUo3lcVyez1iDHbha5ZjBNINSq3Vto";
axios.defaults.baseURL = "";

axios.defaults.params = {
  key: API_KEY_GOOGLE_MAPS,
};

export const calcStartEndDay = async (lat, lon) => {
  const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=${
    Date.now() / 1000
  }&key=${API_KEY_GOOGLE_MAPS}`;
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data);
  //let timeZoneOffset = data.rawOffset + data.dstOffset;
  let now = new Date().toLocaleString('en-US', { timeZone: data.timeZoneId });
  now = new Date(now);
  let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
  //console.log("startOfDay",startOfDay)
  //console.log("endOfDay",endOfDay)
  //let localDate = new Date(Date.now() + timeZoneOffset * 1000);
  //console.log(localDate.toLocaleString());
  return {start: startOfDay.valueOf(), end: endOfDay.valueOf()}
};
