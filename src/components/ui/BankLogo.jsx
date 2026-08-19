// Colored circular avatar showing a bank's 2-letter code
const COLORS = {
  CB: "#1d4ed8",
  HB: "#dc2626",
  IC: "#f97316",
  AX: "#7c3aed",
};

export default function BankLogo({ code }) {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: COLORS[code] || "#64748b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: 10,
        fontWeight: 700,
        flexShrink: 0,
      }}
    >
      {code}
    </div>
  );
}
