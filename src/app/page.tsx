"use client"
import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import CurrentWeather from "./components/Currentweather";
import * as actions from "@/actions";
import {AxiosError} from "axios";

export default function Home() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState<WeatherResponse>()
  const [error, setError] = useState<AxiosError>()

  const handleInputChange = (value : string) => {
    setLocation(value);
  };
  const getWeather = async (location : string) => {
    if (location.length === 0) return;

    try {
      const data: WeatherResponse = await actions.getWeatherData(location)
      setWeather(data);
      setError(undefined)
    } catch (e: any) {
      setWeather(undefined)
      setError(e)
    }
  }
  //getWeather("Praha")
  return (
    <>
      <div className="w-full h-screen flex justify-start items-center flex-row divide-x divide-[#E1E8EC]">
        <nav className="w-1/5 h-full"></nav>
        <main className="w-[55%] h-full flex justify-start items-center flex-col">
          <Searchbar
            handleInputChange={handleInputChange}
            handleLocation={() => getWeather(location)}
          />
          {error && <div className="bg-red-300 w-[90%] rounded-xl flex justify-center p-5">{error?.message}</div>}
          <CurrentWeather location={location} weather={weather}/>
        </main>
        <section className="w-[25%] h-full"></section>
      </div>
      {JSON.stringify(weather)}</>
  );
}
