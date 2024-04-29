interface PressuerGraphProps {
  Pressure: number;
}
import * as React from "react";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
  gaugeClasses,
} from "@mui/x-charts/Gauge";

function GaugePointer() {
  const { valueAngle, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }
  const outerRadius = 40;

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  const arrowPoints = [
    { x: -5, y: 0 },
    { x: 0, y: -10 },
    { x: 5, y: 0 },
  ];
  const backTarget = {
    x: cx - 20 * Math.sin(valueAngle),
    y: cy + 20 * Math.cos(valueAngle),
  };

  const rotationAngle = valueAngle * (180 / Math.PI);

  return (
    <g>
      <line
        x1={backTarget.x}
        y1={backTarget.y}
        x2={target.x}
        y2={target.y}
        stroke="#24609B"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <circle cx={cx} cy={cy} r={5} fill="#FFFFFF" stroke="#24609B" />
      <g
        transform={`translate(${target.x}, ${target.y}) rotate(${rotationAngle})`}
      >
        <polygon
          points={arrowPoints.map((p) => `${p.x},${p.y}`).join(" ")}
          fill="#24609B"
        />
      </g>
    </g>
  );
}

export default function PressuerGraph({ Pressure }: PressuerGraphProps) {
  return (
    <GaugeContainer
      width={170}
      height={170}
      startAngle={-120}
      endAngle={120}
      value={Pressure}
      valueMax={1200}
      sx={(theme) => ({
        [`& .${gaugeClasses.valueArc}`]: {
          fill: "#52b202",
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
    >
      <GaugeReferenceArc className="gauge-color" />
      <GaugeValueArc />
      <GaugePointer />
    </GaugeContainer>
  );
}
