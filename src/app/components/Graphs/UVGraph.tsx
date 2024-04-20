interface UVGraphProps {
  UVIndex: number;
}
import * as React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

export default function RainGraph({ UVIndex }: UVGraphProps) {
  const settings = {
    width: 150,
    height: 150,
    value: UVIndex,
  };
  let textgraph = "";
  if (UVIndex == null) {
    textgraph = "";
  } else if (UVIndex < 49) {
    textgraph = "Low";
  } else {
    textgraph = "High";
  }

  return (
    <Gauge
      {...settings}
      startAngle={-120}
      endAngle={120}
      cornerRadius="50%"
      innerRadius={55}
      text={textgraph}
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 20,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: "#FFFFFF",
          stroke: " #ECF3F8",
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: "url(#referenceArcGradient)",
        },
      })}
    >
      <defs>
        <linearGradient
          id="referenceArcGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="4%" style={{ stopColor: "#4CB482", stopOpacity: 1 }} />
          <stop offset="12%" style={{ stopColor: "#ADBA5D", stopOpacity: 1 }} />
          <stop offset="18%" style={{ stopColor: "#B3BF6A", stopOpacity: 1 }} />
          <stop offset="32%" style={{ stopColor: "#F4FF73", stopOpacity: 1 }} />
          <stop offset="48%" style={{ stopColor: "#FFBC58", stopOpacity: 1 }} />
          <stop offset="65%" style={{ stopColor: "#FFA552", stopOpacity: 1 }} />
          <stop offset="79%" style={{ stopColor: "#FF843F", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#FF4E43", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </Gauge>
  );
}
