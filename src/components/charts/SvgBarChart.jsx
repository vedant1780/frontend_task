import { useState } from "react";

// Pure SVG grouped bar chart — no external charting library needed.
// Props:
//   data: Array<{ date: string, inflow: number, outflow: number }>

export default function SvgBarChart({ data }) {
  const [tooltip, setTooltip] = useState(null);

  const W = 340;
  const H = 120;

  const pad = {
    top: 8,
    bottom: 24,
    left: 4,
    right: 4,
  };

  const chartH = H - pad.top - pad.bottom;

  const barW = 5;
  const gap = 2;        // Gap between inflow and outflow
  const groupGap = 10;  // Gap between different days

  const groupW = barW * 2 + gap + groupGap;

  const maxVal = Math.max(
    ...data.map((d) => Math.max(d.inflow, d.outflow))
  );

  const xLabels = ["1 May", "8 May", "15 May", "22 May", "29 May"];

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${W} ${H}`}
      style={{ overflow: "visible" }}
    >
      {/* Bars */}
      {data.map((d, i) => {
        const x = pad.left + i * groupW;

        const inH = (d.inflow / maxVal) * chartH;
        const outH = (d.outflow / maxVal) * chartH;

        const inY = pad.top + chartH - inH;
        const outY = pad.top + chartH - outH;

        return (
          <g
            key={i}
            onMouseEnter={() => setTooltip({ i, x, d })}
            onMouseLeave={() => setTooltip(null)}
            style={{ cursor: "pointer" }}
          >
            {/* Inflow */}
            <rect
              x={x}
              y={inY}
              width={barW}
              height={inH}
              fill="#10b981"
              rx={1}
            />

            {/* Outflow */}
            <rect
              x={x + barW + gap}
              y={outY}
              width={barW}
              height={outH}
              fill="#ef4444"
              rx={1}
            />
          </g>
        );
      })}

      {/* X-axis labels */}
      {xLabels.map((lbl) => {
        const idx = data.findIndex((d) => d.date === lbl);

        if (idx === -1) return null;

        const x =
          pad.left +
          idx * groupW +
          barW +
          gap / 2;

        return (
          <text
            key={lbl}
            x={x}
            y={H - 4}
            textAnchor="middle"
            fontSize="8"
            fill="#94a3b8"
          >
            {lbl}
          </text>
        );
      })}

      {/* Hover tooltip */}
      {tooltip && (
        <g>
          <rect
            x={Math.min(tooltip.x, W - 80)}
            y={pad.top}
            width={72}
            height={36}
            rx={4}
            fill="white"
            stroke="#e2e8f0"
            strokeWidth={1}
            filter="drop-shadow(0 1px 3px rgba(0,0,0,0.1))"
          />

          <text
            x={Math.min(tooltip.x, W - 80) + 6}
            y={pad.top + 13}
            fontSize="9"
            fill="#10b981"
            fontWeight="600"
          >
            ▲ {tooltip.d.inflow}L
          </text>

          <text
            x={Math.min(tooltip.x, W - 80) + 6}
            y={pad.top + 27}
            fontSize="9"
            fill="#ef4444"
            fontWeight="600"
          >
            ▼ {tooltip.d.outflow}L
          </text>
        </g>
      )}
    </svg>
  );
}