import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
    pv: 12,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/tiny-line-chart-r5z0f";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={100} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#24609B" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
