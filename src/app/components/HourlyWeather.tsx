import Image from "next/image";

export default function HourlyWeather({hourly, active} : {hourly : HourlyWeather; active? : boolean}) {

  const iconUrl = `https://openweathermap.org/img/wn/${hourly.weather[0].icon}.png`;
  return (
    <div className="inline-block pr-4">
      <div className={`flex flex-col justify-evenly items-center w-20 h-32 rounded-xl ${active ? 'bg-[#C4E2FF]' : ''}`}>
        <p className="text-gray-700">{active ? "Now" : new Date(hourly.dt * 1000).getHours().toString() + ":00"}</p>
        <div>
          <img src={iconUrl} alt="Weather Icon" width={50} height={50}/>
        </div>
        <p className="bold">{Math.round(hourly.temp)}°</p>
      </div>
    </div>
  )
}