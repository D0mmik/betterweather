import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Morning",
    uv: 20,
    pv: 15,
  },
  {
    name: "Aternoon",
    uv: 20,
    pv: 14,
  },
  {
    name: "Evening",
    uv: 20,
    pv: 16,
  },
  {
    name: "Night",
    uv: 20,
    pv: 50,
  },
];

export default function TemperatureGraph() {
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
            <div className="flex justify-start items-center flex-col">
              <p>Morning</p>
              <h3>15°</h3>
            </div>
            <div className="flex justify-start items-center flex-col">
              <p>Afternoon</p>
              <h3>14°</h3>
            </div>
            <div className="flex justify-start items-center flex-col">
              <p>Evening</p>
              <h3>16°</h3>
            </div>
            <div className="flex justify-start items-center flex-col">
              <p>Night</p>
              <h3>12°</h3>
            </div>
          </section>
        </div>
      </div>
)
  ;
}
