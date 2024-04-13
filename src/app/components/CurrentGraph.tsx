"use client"
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";


export default function TemperatureGraph({tempData} : {tempData : Temperature}) {
  let data = undefined;
  if(tempData) {
    const filteredTempData = {
      Morning: tempData.morn,
      Afternoon: tempData.day,
      Evening: tempData.eve,
      Night: tempData.night
    };
    data = Object.entries(filteredTempData).map(([name, pv]) => ({ name, pv }));
  }
    return (
      <div className="w-1/2 bg-white/30 m-6 rounded-xl flex justify-center items-center flex-col">
        <div className="p-6 w-full h-full flex justify-around items-center flex-col">
          <h2 className="w-full text-xl">Temperature</h2>
          <div className="h-2/5 w-[90%] flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart width={100} height={100} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#24609B" strokeWidth={2}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
          <section className="flex w-full justify-around">
            {data?.map( (temp) =>
              <div key={temp.name} className="flex justify-start items-center flex-col">
              <p className="capitalize">{temp.name}</p>
              <h3>{Math.round(temp.pv)}°</h3>
            </div>
            )}
          </section>
        </div>
      </div>
)
  ;
}
