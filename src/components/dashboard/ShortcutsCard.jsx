import { shortcuts } from "../../data/mockData";

// Responsive integration shortcut icons row.
export default function ShortcutsCard() {
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
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
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
          Shortcuts & Integrations
        </span>

        <button
          style={{
            background: "none",
            border: "none",
            color: "#3b82f6",
            fontSize: 12,
            cursor: "pointer",
            padding: 0,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Manage
        </button>
      </div>

      {/* Shortcuts */}
      <div
        style={{
          display: "grid",

          // Keeps shortcuts responsive
          gridTemplateColumns: "repeat(auto-fit, minmax(55px, 1fr))",

          // Exactly 5px gap
          gap: 5,

          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {shortcuts.map((s) => (
          <div
            key={s.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 4,
              cursor: "pointer",
              minWidth: 0,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 30,
                height: 30,
                minWidth: 30,
                background: "#f1f5f9",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                flexShrink: 0,
              }}
            >
              {s.icon}
            </div>

            {/* Name */}
            <span
              style={{
                width: "100%",
                fontSize: 9,
                color: "#64748b",
                textAlign: "center",
                lineHeight: 1.2,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              title={s.name}
            >
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}