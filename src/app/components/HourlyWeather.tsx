"use server"

import {ConvertTime, getColor} from "@/utils";

export default async function HourlyWeather({hourly, active, timezone} : {hourly : HourlyWeather; active? : boolean; timezone : string}) {

  let colors : {bgColor : string; textColor : string}  = { bgColor: '', textColor: '' };
  if (active) {
    colors = await getColor(new Date(hourly.dt * 1000).toLocaleString(undefined,{timeZone : timezone }));
  }

  const iconUrl = `https://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`;
  return (
    <div className="inline-block pr-4">
      <div className={`flex flex-col justify-evenly items-center w-20 h-32 rounded-xl ${active ? `${colors.bgColor} ${colors.textColor}` : ''}`}>
        <p className="text-gray-700">{active ? "Now" : new Date(hourly.dt * 1000).getHours().toString() + ":00"}</p>
        <div>
          <img src={iconUrl} alt="Weather Icon" width={70} height={70}/>
        </div>
        <p className="font-semibold">{Math.round(hourly.temp)}°</p>
      </div>
    </div>
  )
}