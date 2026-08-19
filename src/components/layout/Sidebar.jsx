// Left navigation sidebar with logo, nav links, and AI assistant widget.
// Props:
//   navItems  : Array<{ icon, label, hasArrow? }>
//   activeNav : string  — currently active nav label
//   onNav     : (label: string) => void

export default function Sidebar({ navItems, activeNav, onNav }) {
  return (
    <div
      style={{
        width: 230,
        background: "#1e293b",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        overflowY: "auto",
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: "20px 16px",
          borderBottom: "1px solid #334155",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 36, height: 36, background: "#3b82f6",
            borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <span style={{ color: "white", fontSize: 18 }}>🏛️</span>
        </div>
        <div>
          <div style={{ color: "white", fontWeight: 700, fontSize: 14, lineHeight: 1.2 }}>ConnectBank</div>
          <div style={{ color: "#94a3b8", fontSize: 10 }}>for Business</div>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: "8px 0" }}>
        {navItems.map((item) => {
          const isActive = activeNav === item.label;
          return (
            <div
              key={item.label}
              onClick={() => onNav(item.label)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 16px",
                cursor: "pointer",
                background: isActive ? "#3b82f6" : "transparent",
                borderRadius: isActive ? "0 6px 6px 0" : 0,
                marginRight: isActive ? 8 : 0,
                color: isActive ? "white" : "#94a3b8",
                fontSize: 13,
                transition: "all 0.15s",
              }}
            >
              <span style={{ fontSize: 14, width: 18, textAlign: "center" }}>{item.icon}</span>
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.hasArrow && <span style={{ fontSize: 10 }}>›</span>}
            </div>
          );
        })}
      </nav>

      {/* AI Assistant widget */}
      <div style={{ padding: 16, borderTop: "1px solid #334155" }}>
        <div style={{ background: "#0f172a", borderRadius: 8, padding: 12 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 600 }}>AI Business Assistant</span>
            <span style={{ background: "#7c3aed", color: "white", fontSize: 9, padding: "2px 6px", borderRadius: 10 }}>Beta</span>
          </div>
          <p style={{ color: "#64748b", fontSize: 11, margin: "0 0 8px" }}>Ask me anything about your business</p>
          <button
            style={{
              width: "100%", background: "#3b82f6", color: "white",
              border: "none", borderRadius: 6, padding: "7px 0",
              fontSize: 12, cursor: "pointer", fontWeight: 600,
            }}
          >
            🤖 Ask Now
          </button>
        </div>
      </div>
    </div>
  );
}
