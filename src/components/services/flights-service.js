import axios from "axios";
import {
  FLIGHTS_CHART_DATA,
  WEATHER_DATA,
  PLANES_MORE_200,
  PLANES_PER_AIRBUS_MODEL,
  FLIGHTS_PER_MANUFACTURER,
} from "../../helpers/url";

const requestPlanes200 = axios.get(PLANES_MORE_200);
const requestPlanesAirbus = axios.get(PLANES_PER_AIRBUS_MODEL);
const requestFlights = axios.get(FLIGHTS_PER_MANUFACTURER);

export const getFlightsData = () => {
  return axios.get(FLIGHTS_CHART_DATA);
};

export const getPlanesData = () => {
  return axios.all([requestPlanes200, requestPlanesAirbus, requestFlights]);
};

export const getWeatherData = () => {
  return axios.get(WEATHER_DATA);
};
