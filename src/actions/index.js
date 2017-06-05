import axios from 'axios';

const API_KEY = '';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    //action creators always has to return an action
    //an action needs to have a type

    const url = `${ROOT_URL}&q=${city},ro`;
    const req = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: req
    }
}