"use client";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function TemperatureGraph({
  tempData,
  color,
}: {
  tempData: Temperature;
  color: string;
}) {
  let data = undefined;
  if (tempData) {
    const filteredTempData = {
      Morning: tempData.morn,
      Afternoon: tempData.day,
      Evening: tempData.eve,
      Night: tempData.night,
    };
    data = Object.entries(filteredTempData).map(([name, pv]) => ({ name, pv }));
  }
  return (
    <div className="m-6 flex w-1/2 flex-col items-center justify-center rounded-xl bg-white/30 max-sm:hidden">
      <div className="flex h-full w-full flex-col items-center justify-around p-6">
        <h2 className="w-full text-xl font-normal">Temperature</h2>
        <div className="flex h-2/5 items-center justify-center w-[90%]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={100} height={100} data={data}>
              <Line
                type="monotone"
                dataKey="pv"
                stroke={color}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <section className="flex w-full justify-around">
          {data?.map((temp) => (
            <div
              key={temp.name}
              className="flex flex-col items-center justify-start"
            >
              <p className="capitalize">{temp.name}</p>
              <h3>{Math.round(temp.pv)}°</h3>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
