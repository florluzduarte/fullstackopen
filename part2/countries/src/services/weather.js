import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_API;
const baseUrl = "https://api.openweathermap.org/data/2.5";

const getWeather = (capital) => {
  const req = axios.get(`${baseUrl}/weather?q=${capital}&APPID=${apiKey}`);
  return req.then((resp) => resp.data);
};

export default { getWeather };
