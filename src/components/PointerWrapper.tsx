"use client";
interface PointerWrapperProps {
  weather: WeatherResponse;
}
import PressuerGraph from "./Graphs/PressuerGraph";
import RainGraph from "./Graphs/RainGraph";
import UVGraph from "./Graphs/UVGraph";
import WeatherPointer from "./WeatherPointer";
import WindGraph from "./Graphs/WindGraph";

export default function PointerWrapper({ weather }: PointerWrapperProps) {
  return (
    <section className="mt-8 grid h-2/5 grid-cols-2 grid-rows-2 gap-9 font-sans w-[90%]">
      <WeatherPointer
        PointerTitle={"Wind"}
        PointerDesc={"Today wind speed"}
        PointerValue={weather?.current.wind_speed + " km/h"}
        PointerCompas={true}
        PointerGraph={<WindGraph WindSpeed={weather?.current.wind_deg} />}
        imageUrl="/Ellipse.png"
        bgImage={true}
      />
      <WeatherPointer
        PointerTitle={"Rain Chance"}
        PointerDesc={"Today rain chance"}
        PointerValue={weather?.daily[0].pop + " %"}
        PointerCompas={false}
        PointerGraph={<RainGraph RainPercentage={weather?.daily[0].pop} />}
      />
      <WeatherPointer
        PointerTitle={"Pressure"}
        PointerDesc={"Today Pressure"}
        PointerValue={weather?.current.pressure + " hpa"}
        PointerCompas={false}
        PointerGraph={<PressuerGraph Pressure={weather?.current.pressure} />}
        imageUrl="/SmallEllipse.png"
        bgImage={true}
      />
      <WeatherPointer
        PointerTitle={"UV Index"}
        PointerDesc={"Today UV Index"}
        PointerValue={weather?.current.uvi.toString()}
        PointerCompas={false}
        PointerGraph={<UVGraph UVIndex={weather?.current.uvi} />}
      />
    </section>
  );
}
