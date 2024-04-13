"use server"
import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {redirect} from "next/navigation";

const API_KEY = '79e9110f4e47d681b1dedd4758c448f4';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org',
});

export async function getWeatherData(city: string): Promise<WeatherResponse> {

  axiosInstance.interceptors.request.use(config => {
    config.params = {
      ...config.params,
      appid: API_KEY
    };
    return config;
  }, error => {
    return Promise.reject(error);
  });

  try {
    const geoResponse: AxiosResponse = await axiosInstance.get(`/geo/1.0/direct?q=${city}`);
    const {lat, lon}: Coords = geoResponse.data[0];

    const forecastResponse: AxiosResponse = await axiosInstance.get(`/data/3.0/onecall`, {
      params: {
        lat: lat,
        lon: lon,
        exclude: '{current, minutely, alerts}',
        units: 'metric',
        lang: 'cz'
      },
    });

    return {
      city: geoResponse.data[0]?.local_names?.cs ?? geoResponse.data[0].name,
      current: forecastResponse.data.current,
      hourly: forecastResponse.data.hourly,
      daily: forecastResponse.data.daily
    };

  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

export async function goToWeather(formState: { message: string }, formData: FormData) {
  let location;
  try {
    location = formData.get("location")
    if ( !location ) throw new Error("Location not provided");
    location = encodeURIComponent(location.toString())
  } catch (err: unknown) {

    if (err instanceof Error) {
      return {
        message: err.message,
      };
    }
    return {message: "Something went wrong.."};
  }
  redirect("/" + location)
}
