import Searchbar from "../components/Searchbar";
import CurrentWeather from "../components/Currentweather";
import * as actions from "@/actions";
import {notFound} from "next/navigation";
import HourlyWeather from "@/app/components/HourlyWeather";
import WeatherColumn from "@/app/components/WeatherColumn";

export default async function WeatherPage(props : {params : { location: string}}) {
  const getWeather = async (location: string) => {
    return await actions.getWeatherData(location)
  }
  const location = props.params.location;
  const weather: WeatherResponse = await getWeather(location)

  if (!weather) notFound();

  return (
    <>
      <main className="w-[55%] h-full flex justify-start items-center flex-col">
        <Searchbar />
        <CurrentWeather weather={weather}/>
      </main>
      <WeatherColumn weather={weather}/>
    </>
  );
}
