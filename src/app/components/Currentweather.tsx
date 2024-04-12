import TemperatureGraph from "@/app/components/CurrentGraph";
import {ConvertTime} from "@/utils";

interface CurrentweatherProps {
  location: string;
  weather : WeatherResponse
}

export default function CurrentWeather({location, weather} : CurrentweatherProps) {
  return (
    <section className="w-[90%] bg-[#C4E2FF] h-2/5 flex rounded-xl justify-between mt-5 text-[#24609B] font-sans ">
      <div className="w-[50%] m-8 flex justify-between flex-col">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-row items-center">
            <img
              src="https://img.icons8.com/ios/30/24609B/marker--v1.png"
              alt="marker--v1"
              className="h-5 m-2"
            />
            <h2 className="text-xl capitalize">
              {location == "" ? "Zadejte polohu" : location}
            </h2>
          </div>
          <h2>Dnes {ConvertTime(weather?.current.dt)}</h2>
        </div>
        <div className="flex w-full justify-between items-center flex-col ">
          <h2 className="text-8xl mb-4">{Math.round(weather?.current.temp)}°</h2>
          <p className="text-xl capitalize">{weather?.current.weather[0].description}</p>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-row items-center">
            <img
              src="https://img.icons8.com/ios-glyphs/30/24609B/wind--v1.png"
              alt="wind--v1"
              className=" h-5 m-2"
            />
            <h2>{weather?.current.pressure} hpa</h2>
          </div>
          <div className=" flex flex-row items-center">
            <img
              src="https://img.icons8.com/ios/30/24609B/water.png"
              alt="water"
              className=" h-5 m-2"
            />
            <h2>{weather?.current.dew_point} %</h2>
          </div>
          <div className=" flex flex-row items-center">
            <img
              src="https://img.icons8.com/ios-glyphs/30/24609B/wind--v1.png"
              alt="wind--v1"
              className=" h-5 m-2"
            />
            <h2>{weather?.current.wind_speed} km/h</h2>
          </div>
        </div>
      </div>
      <TemperatureGraph tempData={weather?.daily[0].temp}/>
    </section>
  );
}
