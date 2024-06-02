"use client";
import PressureGraph from "./Graphs/PressureGraph";

interface PointerWrapperProps {
  weather: WeatherResponse;
}
import RainGraph from "./Graphs/RainGraph";
import UVGraph from "./Graphs/UVGraph";
import WeatherPointer from "./WeatherPointer";
import WindGraph from "./Graphs/WindGraph";

export default function PointerWrapperMobile({ weather }: PointerWrapperProps) {
  return (
    <section className="mt-6 hidden  grid-cols-1 grid-rows-4 gap-9 font-sans w-[90%] max-sm:grid">
      <WeatherPointer
        PointerTitle={"Wind"}
        PointerDesc={"Today wind speed"}
        PointerValue={Math.round(weather?.current.wind_speed * 3.6) + " km/h"}
        PointerCompas={true}
        PointerGraph={<WindGraph WindSpeed={weather?.current.wind_deg} />}
        imageUrl="/Ellipse.svg"
        bgImage={true}
      />
      <WeatherPointer
        PointerTitle={"Rain Chance"}
        PointerDesc={"Today rain chance"}
        PointerValue={Math.round(weather?.daily[0].pop * 100) + " %"}
        PointerCompas={false}
        PointerGraph={
          <RainGraph RainPercentage={Math.round(weather?.daily[0].pop * 100)} />
        }
      />
      <WeatherPointer
        PointerTitle={"Pressure"}
        PointerDesc={"Today Pressure"}
        PointerValue={weather?.current.pressure + " hpa"}
        PointerCompas={false}
        PointerGraph={<PressureGraph Pressure={weather?.current.pressure} />}
        imageUrl="/SmallEllipse.svg"
        bgImage={true}
      />
      <WeatherPointer
        PointerTitle={"UV Index"}
        PointerDesc={"Today UV Index"}
        PointerValue={Math.round(weather?.current.uvi).toString()}
        PointerCompas={false}
        PointerGraph={<UVGraph UVIndex={weather?.current.uvi} />}
      />
    </section>
  );
}
