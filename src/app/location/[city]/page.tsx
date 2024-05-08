"use server"
import Searchbar from "../../components/Searchbar";
import CurrentWeather from "../../components/Currentweather";
import * as actions from "@/actions";
import {notFound} from "next/navigation";
import WeatherColumn from "@/app/components/WeatherColumn";
import PointerWrapper from "../../components/PointerWrapper";
import {unstable_cache} from "next/cache";

const getCachedWeather = unstable_cache(
  async (location) => actions.getWeatherData(location),
  undefined,
  {tags: [`weather`] , revalidate: 60}
);

export default async function WeatherPage(props: {
  params: { city: string };
}) {
  const weather: WeatherResponse = await getCachedWeather(props.params.city);

  if (!weather) notFound();

  return (
    <>
      <main className="w-[55%] h-full flex justify-start items-center flex-col">
        <Searchbar/>
        <CurrentWeather weather={weather}/>
        <PointerWrapper weather={weather}/>
      </main>
      <WeatherColumn weather={weather}/>
    </>
  );
}
