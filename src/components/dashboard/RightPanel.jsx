import { quickActions, alerts } from "../../data/mockData";

// ─── Quick Actions ───────────────────────────────────────────────────────────

export function QuickActionsPanel() {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 10,
        padding: 14,
        border: "1px solid #f1f5f9",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          fontWeight: 700,
          color: "#1e293b",
          fontSize: 13,
          marginBottom: 12,
        }}
      >
        Quick Actions
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8,
        }}
      >
        {quickActions.map((a) => (
          <button
            key={a.label}
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: 8,
              padding: "10px 4px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              minWidth: 0,
            }}
          >
            <span style={{ fontSize: 18 }}>{a.icon}</span>

            <span
              style={{
                fontSize: 9,
                color: "#475569",
                textAlign: "center",
                lineHeight: 1.2,
                wordBreak: "break-word",
              }}
            >
              {a.label}
            </span>
          </button>
        ))}
      </div>

      <button
        style={{
          width: "100%",
          marginTop: 10,
          background: "none",
          border: "none",
          color: "#3b82f6",
          fontSize: 11,
          cursor: "pointer",
          fontWeight: 500,
        }}
      >
        View All Actions →
      </button>
    </div>
  );
}

// ─── Alerts & Notifications ──────────────────────────────────────────────────

export function AlertsPanel() {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 10,
        padding: 14,
        border: "1px solid #f1f5f9",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontWeight: 700,
            color: "#1e293b",
            fontSize: 13,
          }}
        >
          Alerts & Notifications
        </span>

        <button
          style={{
            background: "none",
            border: "none",
            color: "#3b82f6",
            fontSize: 11,
            cursor: "pointer",
          }}
        >
          View All
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {alerts.map((a, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 8,
            }}
          >
            <span
              style={{
                fontSize: 14,
                flexShrink: 0,
              }}
            >
              {a.icon}
            </span>

            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#1e293b",
                }}
              >
                {a.title}
              </div>

              {a.sub && (
                <div
                  style={{
                    fontSize: 10,
                    color: "#64748b",
                  }}
                >
                  {a.sub}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Funding CTA ─────────────────────────────────────────────────────────────

export function FundingCta() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1e3a5f, #2563eb)",
        borderRadius: 10,
        padding: 14,
        color: "white",

        // Prevent the card from stretching vertically
        alignSelf: "start",
        height: "fit-content",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontSize: 13,
          fontWeight: 700,
          marginBottom: 4,
        }}
      >
        Need Business Funding?
      </div>

      <div
        style={{
          fontSize: 11,
          color: "#bfdbfe",
          marginBottom: 6,
        }}
      >
        You are pre-approved for
      </div>

      <div
        style={{
          fontSize: 22,
          fontWeight: 800,
          marginBottom: 4,
        }}
      >
        ₹35,00,000
      </div>

      <div
        style={{
          fontSize: 11,
          color: "#bfdbfe",
          marginBottom: 12,
        }}
      >
        Get funds in 24 hours
      </div>

      <button
        style={{
          background: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: 6,
          padding: "8px 14px",
          fontSize: 12,
          fontWeight: 600,
          cursor: "pointer",
          width: "100%",
        }}
      >
        Explore Now
      </button>
    </div>
  );
}