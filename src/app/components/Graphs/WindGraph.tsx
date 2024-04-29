interface WindGraphProps {
  WindSpeed: number;
}
import React from "react";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

function GaugePointer() {
  const { valueAngle, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }
  const outerRadius = 50;

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
    x: cx - 57 * Math.sin(valueAngle),
    y: cy + 57 * Math.cos(valueAngle),
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
        strokeWidth="5"
      />
      <circle
        cx={backTarget.x}
        cy={backTarget.y}
        r={5}
        fill="#FFFFFF"
        stroke="#24609B"
      />
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
export default function WindGraph({ WindSpeed }: WindGraphProps) {
  return (
    <GaugeContainer
      width={130}
      height={130}
      startAngle={360}
      endAngle={0}
      value={WindSpeed}
      valueMax={360}
    >
      <GaugeReferenceArc className="no-color" />
      <GaugeValueArc className="no-color" />
      <GaugePointer />
    </GaugeContainer>
  );
}
