"use server"
import TemperatureGraph from "@/app/components/CurrentGraph";
import {ConvertTime, getColor} from "@/utils";
import LocationSvg from "@/app/components/icons/locationSvg";
import PressureSvg from "@/app/components/icons/pressureSvg";
import WindSvg from "@/app/components/icons/windSvg";
import RainDropSvg from "@/app/components/icons/raindropSvg";

interface CurrentweatherProps {
  weather : WeatherResponse
}

export default async function CurrentWeather({weather} : CurrentweatherProps) {

  let colors : {bgColor : string; textColor : string}  = { bgColor: '', textColor: '' };
    colors = await getColor(new Date(weather.current.dt * 1000).toLocaleString(undefined,{timeZone : weather.timezone }));
  return (
    <section className={`w-[90%] h-2/5 flex rounded-xl justify-between mt-5 font-sans`} style={{backgroundColor : colors.bgColor, color : colors.textColor}}>
      <div className="m-8 flex flex-col justify-between w-[50%]">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-row items-center">
            <LocationSvg color={colors.textColor} />
            <h2 className="text-xl capitalize">{weather?.city}</h2>
          </div>
          <h2 className="font-light">Dnes {await ConvertTime(weather?.current.dt, weather?.timezone)}</h2>
        </div>
        <div className="flex w-full flex-col items-center justify-between">
          <h2 className="mb-4 text-8xl">{Math.round(weather?.current.temp ?? 0)}°</h2>
          <p className="text-xl capitalize">{weather?.current.weather[0].description}</p>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-row items-center">
            <PressureSvg color={colors.textColor}/>
            <h2>{weather?.current.pressure} hpa</h2>
          </div>
          <div className="flex flex-row items-center">
            <RainDropSvg color={colors.textColor}/>
            <h2>{weather?.daily[0].pop} %</h2>
          </div>
          <div className="flex flex-row items-center">
            <WindSvg color={colors.textColor}/>
            <h2>{weather?.current.wind_speed} km/h</h2>
          </div>
        </div>
      </div>
      <TemperatureGraph tempData={weather?.daily[0].temp} color={colors.textColor}/>
    </section>
  );
}
