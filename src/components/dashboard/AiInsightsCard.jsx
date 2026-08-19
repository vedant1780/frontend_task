import { insights } from "../../data/mockData";

// AI-generated business insight tiles.
export default function AiInsightsCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        background: "white",
        borderRadius: 10,
        padding: 16,
        border: "1px solid #f1f5f9",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 14,
        }}
      >
        <span
          style={{
            fontWeight: 700,
            color: "#1e293b",
            fontSize: 14,
          }}
        >
          AI Business Insights
        </span>

        <span
          style={{
            background: "#f3f4f6",
            color: "#2251af",
            fontSize: 10,
            padding: "2px 7px",
            borderRadius: 10,
            fontWeight: 500,
          }}
        >
          Beta
        </span>
      </div>

      {/* Insights */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 10,
          width: "100%",
        }}
      >
        {insights.map((ins, i) => (
          <div
            key={i}
            style={{
              background: "#f8fafc",
              borderRadius: 8,
              padding: 10,
              border: "1px solid #f1f5f9",
              minWidth: 0,
              boxSizing: "border-box",

              // Icon + details in one row
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 32,
                height: 32,
                minWidth: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                flexShrink: 0,
              }}
            >
              {ins.icon}
            </div>

            {/* Details */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
              }}
            >
              {/* Insight Text */}
              <p
                style={{
                  margin: "0 0 6px",
                  fontSize: 10,
                  color: "#475569",
                  lineHeight: 1.5,
                }}
              >
                {ins.text}
              </p>

              {/* View Details */}
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#3b82f6",
                  fontSize: 11,
                  cursor: "pointer",
                  fontWeight: 500,
                  padding: 0,
                  whiteSpace: "nowrap",
                }}
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}