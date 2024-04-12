"use client"
import * as actions from "@/actions"
import {useState} from "react";
import {AxiosError} from "axios";

export default function Test() {

  const [weather, setWeather] = useState<WeatherResponse>()
  const [city, setCity] = useState("")
  const [error, setError] = useState<AxiosError>()

  const getWeather = async () => {
    if (city.length === 0) return;

    try {
      const data: WeatherResponse = await actions.getWeatherData(city)
      setWeather(data);
      setError(undefined)
    } catch (e: any) {
      setWeather(undefined)
      setError(e)
    }
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="text-blue-500">BetterWeather</div>
      <form action={getWeather}>
        <input onChange={(e) => setCity(e.target.value)} className="py-1 px-6 border rounded" placeholder="adresa"></input>
        <div className="text-red-600">{error && error.message}</div>
        <button type="submit">Submit</button>
      </form>
      {JSON.stringify(weather)}
    </div>
  );
}
