import axios from 'axios';

const API_KEY = 'ed0838fc29cbd2889dc67f88cc6c313f';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = city => {
  const url = `${BASE_URL}&q=${city},us`;
  const response = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: response,
  };
};
