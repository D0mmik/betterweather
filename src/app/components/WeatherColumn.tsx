import HourlyWeather from "@/app/components/HourlyWeather";

export default function WeatherColumn({weather} : {weather : WeatherResponse}) {

  return (
    <section className="w-[25%] h-full flex items-center flex-col">
      <div className="flex justify-around py-6 w-full">
        <button>{"<"}</button>
        <h2 className="text-xl">This Week</h2>
        <button>{">"}</button>
      </div>
      <div className="w-[80%]">
        <h3 className="text-lg my-5">Today</h3>
        <div className="overflow-auto whitespace-nowrap">
          <HourlyWeather hourly={weather.hourly[0]} active/>
          {weather.hourly.slice(1, 25).map((hourly, index) =>
            <HourlyWeather key={hourly.dt} hourly={weather.hourly[index + 1]}/>)}
        </div>
      </div>
    </section>
  )
}