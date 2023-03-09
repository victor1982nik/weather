
const API_KEY_GOOGLE_MAPS = "";

// get start end of dy by coordinates
export const calcStartEndDay = async (lat, lon) => {
  const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=${
    Date.now() / 1000
  }&key=${API_KEY_GOOGLE_MAPS}`;
  const response = await fetch(url);
  const data = await response.json();
  let now = new Date().toLocaleString('en-US', { timeZone: data.timeZoneId });
  now = new Date(now);
  let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
  
  return {start: startOfDay.valueOf(), end: endOfDay.valueOf()}
};
