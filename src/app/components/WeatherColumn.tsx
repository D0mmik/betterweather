"use server"
import HourlyWeather from "@/app/components/HourlyWeather";
import {GetDate, GetDayName} from "@/utils";

export default async function WeatherColumn({
  weather,
}: {
  weather: WeatherResponse;
}) {
  return (
    <section className="w-[25%] h-full flex items-center flex-col font-sans">
      <div className="flex justify-around pt-9 pb-3 w-full">
        <button>{"<"}</button>
        <h2 className="text-xl">This Week</h2>
        <button>{">"}</button>
      </div>
      <div className="w-[80%]">
        <h3 className="text-lg my-5">Today</h3>
        <div className="overflow-auto whitespace-nowrap pb-5">
          <HourlyWeather hourly={weather.hourly[0]} active timezone={weather.timezone}/>
          {weather.hourly.slice(1, 25).map((hourly, index) => (
            <HourlyWeather key={hourly.dt} hourly={weather.hourly[index + 1]} timezone={weather.timezone} />
          ))}
        </div>
        {weather.daily.slice(1, weather.daily.length + 1).map(async (daily, index) => (
          <div key={index} className="flex w-full justify-between py-2 items-center">
            <div className="flex flex-col">
              <div className="w-20">{index !== 0 ? await GetDayName(daily.dt) : "Tommorow"}</div>
              <div className="text-gray-500 font-light">{await GetDate(daily.dt)}</div>
            </div>
            <div className="text-xl font-semibold">{Math.round(daily.temp.max)}°</div>
            <div className="w-16">
              <img src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}></img>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
