"use server"
import TemperatureGraph from "@/components/CurrentGraph";
import {ConvertTime, getColor} from "@/utils";
import LocationSvg from "@/components/icons/locationSvg";
import PressureSvg from "@/components/icons/pressureSvg";
import WindSvg from "@/components/icons/windSvg";
import RainDropSvg from "@/components/icons/raindropSvg";
import SavedSvg from "@/components/icons/sideMenuICons/savedSvg";
import SaveLocationButton from "@/components/SaveLocationButton";
import {getCity} from "@/actions";
import {SignedIn} from "@clerk/nextjs";

interface CurrentweatherProps {
  weather : WeatherResponse
}

export default async function CurrentWeather({weather} : CurrentweatherProps) {

  let colors : {bgColor : string; textColor : string}  = { bgColor: '', textColor: '' };
  colors = await getColor(new Date(weather.current.dt * 1000).toLocaleString(undefined,{timeZone : weather.timezone }));
  const saved = (await getCity(weather?.city)).rowCount >= 1;
  return (
    <section className={`w-[90%] h-2/5 flex rounded-xl justify-between mt-5 font-sans select-none`} style={{backgroundColor : colors.bgColor, color : colors.textColor}}>
      <div className="m-8 flex flex-col justify-between w-[50%]">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-row items-center">
            <LocationSvg color={colors.textColor} />
            <h2 className="text-xl capitalize">{weather?.city}</h2>
              <SignedIn>
                <SaveLocationButton color={colors.textColor} city={weather?.city} saved={saved}/>
              </SignedIn>
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
            <h2>{Math.round(weather?.daily[0].pop * 100)} %</h2>
          </div>
          <div className="flex flex-row items-center">
            <WindSvg color={colors.textColor}/>
            <h2>{Math.round(weather?.current.wind_speed * 3.6)} km/h</h2>
          </div>
        </div>
      </div>
      <TemperatureGraph tempData={weather?.daily[0].temp} color={colors.textColor}/>
    </section>
  );
}
