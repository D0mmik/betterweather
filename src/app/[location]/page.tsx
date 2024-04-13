import Searchbar from "../components/Searchbar";
import CurrentWeather from "../components/Currentweather";
import * as actions from "@/actions";
import {notFound} from "next/navigation";

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
        {!weather && (
          <section className="w-[90%] bg-[#C4E2FF] h-2/5 rounded-xl mt-5 animate-pulse flex justify-center items-center">
            <p>Loading..</p>
          </section>
        )}
        {weather && <CurrentWeather weather={weather} />}
      </main>
      <section className="w-[25%] h-full">
        test2
      </section>
    </>
  );
}
