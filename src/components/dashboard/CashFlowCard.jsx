import SvgBarChart from "../charts/SvgBarChart";
import { cashFlowData } from "../../data/mockData";

// Cash Flow Overview card with inflow/outflow bar chart.

export default function CashFlowCard() {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 10,
        padding: 16,
        border: "1px solid #f1f5f9",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 12,
        }}
      >
        <div>
          <div
            style={{
              fontWeight: 700,
              color: "#1e293b",
              fontSize: 14,
            }}
          >
            Cash Flow Overview
          </div>

          <div
            style={{
              fontSize: 11,
              color: "#64748b",
              marginTop: 2,
            }}
          >
            This Month (May 2024)
          </div>
        </div>

        <select
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: 6,
            padding: "4px 8px",
            fontSize: 11,
            color: "#475569",
            background: "white",
            cursor: "pointer",
          }}
        >
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Quarter</option>
        </select>
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          gap: 16,
          marginBottom: 8,
        }}
      >
        <LegendDot color="#10b981" label="Inflow" />
        <LegendDot color="#ef4444" label="Outflow" />
      </div>

      {/* Totals */}
      <div
        style={{
          display: "flex",
          gap: 20,
          marginBottom: 8,
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 800,
            color: "#10b981",
          }}
        >
          ₹1,42,60,000
        </span>

        <span
          style={{
            fontSize: 16,
            fontWeight: 800,
            color: "#ef4444",
          }}
        >
          ₹95,40,000
        </span>
      </div>

      {/* Full-width chart */}
      <div
        style={{
          width: "100%",
          boxSizing: "border-box",
          marginTop: 4,
        }}
      >
        <SvgBarChart data={cashFlowData} />
      </div>
    </div>
  );
}

function LegendDot({ color, label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: color,
          flexShrink: 0,
        }}
      />

      <span
        style={{
          fontSize: 11,
          color: "#64748b",
        }}
      >
        {label}
      </span>
    </div>
  );
}