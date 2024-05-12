"use server"
import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {notFound, redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
import {createClient} from "@vercel/postgres";
import {currentUser} from "@clerk/nextjs/server";

const API_KEY = '79e9110f4e47d681b1dedd4758c448f4';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org',
});

export async function getWeatherData(city: string): Promise<{ current: any; city: any; timezone: any; daily: any; hourly: any }> {
  axiosInstance.interceptors.request.use(config => {
    config.params = {
      ...config.params,
      appid: API_KEY
    };
    return config;
  }, error => {
    return Promise.reject(error);
  });
  console.log("fetching data for " + city)

  try {
    const geoResponse: AxiosResponse = await axiosInstance.get(`/geo/1.0/direct?q=${city}`);
    if (!geoResponse.data || geoResponse.data.length === 0) {
      notFound();
    }
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
      timezone: forecastResponse.data.timezone,
      current: forecastResponse.data.current,
      hourly: forecastResponse.data.hourly,
      daily: forecastResponse.data.daily
    };

  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

export async function reverseGeoCode(lat: number, lon: number) {
  try {
    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`);
    return response.data; // Assuming the response contains the desired data
  } catch (error) {
    throw new Error('Failed to reverse geocode location'); // Handle error gracefully
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
  revalidatePath("/dashboard/" + location.toLowerCase())
  redirect("/dashboard/" + location.toLowerCase())
}

export async function getWeatherSavedCity(city : string) {
  city = encodeURIComponent(city)
  return  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
}

export async function getCity(city : string) {

  const user = await currentUser();
  city = encodeURIComponent(city.toString())
  const client = createClient();
  await client.connect();
  let result = null;

  try {
    result = await client.sql`SELECT * FROM saved_cities WHERE user_id = ${user?.id} AND city_name = ${city}`;
  } finally {
    await client.end();
  }
  return result
}

export async function postCity(city : string) {

  const user = await currentUser();
  city = encodeURIComponent(city.toString())
  const client = createClient();
  await client.connect();

  try {
    await client.sql`INSERT INTO saved_cities (user_id, city_name) VALUES (${user?.id}, ${city})`;
  } finally {
    await client.end();
  }
}

export async function deleteCity(city: string) {
  const user = await currentUser();
  const client = createClient();
  city = encodeURIComponent(city.toString())
  await client.connect();

  try {
    await client.sql`DELETE FROM saved_cities WHERE user_id = ${user?.id} AND city_name = ${city}`;
  } finally {
    await client.end();
  }
}

export async function getAllCity() {
  const user = await currentUser();
  const client = createClient();
  await client.connect();
  let result = null;

  try {
    result = await client.sql`SELECT * FROM saved_cities WHERE user_id = ${user?.id}`;
  } finally {
    await client.end();
  }
  return result
}

export async function RedirectUser(city : string) {
  "use server"
  city = encodeURIComponent(city)
  revalidatePath("/dashboard/" + city.toLowerCase())
  redirect("/dashboard/" + city.toLowerCase())
}