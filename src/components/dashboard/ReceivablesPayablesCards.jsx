import DonutChart from "../charts/DonutChart";
import { receivables, payables } from "../../data/mockData";

// Renders both Top Receivables and Top Payables cards.

export function ReceivablesCard() {
  return (
    <LedgerCard
      title="Top Receivables"
      items={receivables}
      total="₹38,75,000"
    />
  );
}

export function PayablesCard() {
  return (
    <LedgerCard
      title="Top Payables"
      items={payables}
      total="₹25,85,000"
    />
  );
}

// Reusable ledger card
function LedgerCard({ title, items, total }) {
  const segments = items.map((r) => ({
    value: parseInt(r.amount.replace(/[₹,]/g, ""), 10),
    color: r.color,
  }));

  return (
    <div
      style={{
        background: "white",
        borderRadius: 10,
        padding: 16,
        border: "1px solid #f1f5f9",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontWeight: 700,
            color: "#1e293b",
            fontSize: 14,
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </span>

        <button
          style={{
            background: "none",
            border: "none",
            color: "#3b82f6",
            fontSize: 11,
            cursor: "pointer",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          View All
        </button>
      </div>

      {/* Chart + Legend */}
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          width: "100%",
          minWidth: 0,
          flex: 1,
        }}
      >
        {/* Donut */}
        <div
          style={{
            flexShrink: 0,
          }}
        >
          <DonutChart
            segments={segments}
            total={total}
            label="Total"
          />
        </div>

        {/* Legend */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            overflow: "hidden",
          }}
        >
          {items.map((r) => (
            <div
              key={r.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginBottom: 5,
                width: "100%",
                minWidth: 0,
              }}
            >
              {/* Dot */}
              <div
                style={{
                  width: 7,
                  height: 7,
                  minWidth: 7,
                  borderRadius: "50%",
                  background: r.color,
                  flexShrink: 0,
                }}
              />

              {/* Name */}
              <span
                style={{
                  fontSize: 10,
                  color: "#475569",

                  // Prevent wrapping
                  whiteSpace: "nowrap",

                  // Keep the name on one line
                  display: "block",

                  // Allow truncation instead of wrapping
                  overflow: "hidden",
                  textOverflow: "ellipsis",

                  // Important
                  flex: 1,
                  minWidth: 0,
                }}
                title={r.name}
              >
                {r.name}
              </span>

              {/* Amount */}
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#1e293b",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  marginLeft: 4,
                }}
              >
                {r.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}