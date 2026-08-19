// Four summary metric cards at the top of the dashboard.
// No props — data is static; replace with API data as needed.

const CARDS = [
  {
    label: "Total Balance",
    value: "₹2,45,75,000.50",
    sub: "Across 6 accounts",
    icon: "🏛️",
    iconBg: "#eff6ff",
    trend: null,
  },
  {
    label: "Today's Collections",
    value: "₹18,75,000",
    sub: "↑ 12.5% vs yesterday",
    icon: "📥",
    iconBg: "#f0fdf4",
    trend: "up",
  },
  {
    label: "Today's Payments",
    value: "₹7,85,000",
    sub: "↓ 8.3% vs yesterday",
    icon: "📤",
    iconBg: "#fff7ed",
    trend: "down",
  },
  {
    label: "Working Capital Limit",
    value: "₹50,00,000",
    sub: "Utilized ₹18,40,000 (36.8%)",
    icon: "💼",
    iconBg: "#faf5ff",
    trend: null,
    progress: 36.8,
  },
];

export default function KpiCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: 14,
        width: "100%",
      }}
    >
      {CARDS.map((card) => (
        <div
          key={card.label}
          style={{
            background: "white",
            borderRadius: 10,
            padding: 16,
            border: "1px solid #f1f5f9",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            minWidth: 0,
            boxSizing: "border-box",
          }}
        >
          {/* Label */}
          <div
            style={{
              fontSize: 12,
              color: "#64748b",
              fontWeight: 500,
              marginBottom: 10,
            }}
          >
            {card.label}
          </div>

          {/* Amount + Icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              minWidth: 0,
              marginBottom: 6,
            }}
          >
            {/* Amount */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
                fontSize: 20,
                fontWeight: 800,
                color: "#1e293b",
                lineHeight: 1.2,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              title={card.value}
            >
              {card.value}
            </div>

            {/* Icon — RIGHT of amount */}
            <div
              style={{
                width: 32,
                height: 32,
                minWidth: 32,
                background: card.iconBg,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 15,
                flexShrink: 0,
              }}
            >
              {card.icon}
            </div>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 11,
              color:
                card.trend === "down"
                  ? "#ef4444"
                  : card.trend === "up"
                  ? "#10b981"
                  : "#64748b",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            title={card.sub}
          >
            {card.sub}
          </div>

          {/* Progress Bar */}
          {card.progress != null && (
            <div
              style={{
                marginTop: 8,
                background: "#e2e8f0",
                borderRadius: 4,
                height: 4,
                width: "100%",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${card.progress}%`,
                  background: "#3b82f6",
                  borderRadius: 4,
                  height: "100%",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}