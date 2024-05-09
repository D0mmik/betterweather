interface RainGraphProps {
  RainPercentage: number;
}
import * as React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

export default function RainGraph({ RainPercentage }: RainGraphProps) {
  const settings = {
    width: 140,
    height: 140,
    value: RainPercentage,
  };
  let textgraph = "";
  if (RainPercentage == null) {
    textgraph = "";
  } else if (RainPercentage < 49) {
    textgraph = "Low";
  } else {
    textgraph = "High";
  }

  return (
    <Gauge
      {...settings}
      cornerRadius="58%"
      innerRadius="87%"
      text={textgraph}
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 20,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: "#24609B",
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: "#C4E2FF",
        },
      })}
    />
  );
}
