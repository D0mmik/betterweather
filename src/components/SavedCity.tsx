"use server"
import Link from "next/link";
import {getWeatherData} from "@/actions";
import {ConvertTime, getColor} from "@/utils";
import {QueryResultRow} from "pg";
import {unstable_cache} from "next/cache";
import * as actions from "@/actions";

export default async function SavedCity({city}: { city: QueryResultRow }) {

  const getCachedWeather = unstable_cache(
    async (location) => actions.getWeatherData(location),
    undefined,
    {tags: [`weather`] , revalidate: 60}
  );

  const weather: WeatherResponse = await getCachedWeather(decodeURI(city.city_name));

  let colors: { bgColor: string; textColor: string } = {bgColor: '', textColor: ''};
  colors = await getColor(new Date(weather.current.dt * 1000).toLocaleString(undefined, {timeZone: weather.timezone}));

  return (<Link key={city.id} href={"/dashboard/" + city.city_name}
                style={{backgroundColor: colors.bgColor, color: colors.textColor}}
                className="flex justify-between my-10 mx-10 p-9 rounded-2xl border-2 border-gray-300 hover:border-black">
    <p className="w-1/3 text-xl">{decodeURI(city.city_name)}</p>
    <p className="w-1/3 flex justify-center text-2xl font-medium">{Math.round(weather.current.temp)}°</p>
    <p className="w-1/3 flex justify-end">{await ConvertTime(weather.current.dt, weather.timezone)}</p>
  </Link>)
}