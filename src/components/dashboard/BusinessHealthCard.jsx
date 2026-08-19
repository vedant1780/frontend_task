// Displays the Business Health Score as an SVG arc gauge.
// Props:
//   score     : number  (default 78)
//   maxScore  : number  (default 100)
//   label     : string  (default "Good")
//   message   : string

export default function BusinessHealthCard({
  score = 78,
  maxScore = 100,
  label = "Good",
  message = "Great! Your business is financially healthy.",
}) {
  const arcLength = 172;
  const filled = arcLength * (score / maxScore);

  return (
    <div
      style={{
        background: "white",
        borderRadius: 10,
        padding: 16,
        border: "1px solid #f1f5f9",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ fontWeight: 700, color: "#1e293b", fontSize: 14, marginBottom: 14, alignSelf: "flex-start" }}>
        Business Health Score
      </div>

      {/* Gauge */}
      <svg width="130" height="80" viewBox="0 0 130 80">
        <defs>
          <linearGradient id="healthGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#ef4444" />
            <stop offset="50%"  stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        {/* Track */}
        <path d="M 10 70 A 55 55 0 0 1 120 70" stroke="#e2e8f0" strokeWidth="10" fill="none" strokeLinecap="round" />
        {/* Fill */}
        <path
          d="M 10 70 A 55 55 0 0 1 120 70"
          stroke="url(#healthGrad)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={arcLength}
          strokeDashoffset={arcLength - filled}
        />
        <text x="65" y="62" textAnchor="middle" fontSize="22" fontWeight="800" fill="#1e293b">{score}</text>
        <text x="65" y="76" textAnchor="middle" fontSize="9"  fill="#94a3b8">/{maxScore}</text>
      </svg>

      <div style={{ color: "#10b981", fontWeight: 700, fontSize: 14, marginTop: 2 }}>{label}</div>
      <div style={{ color: "#64748b", fontSize: 11, textAlign: "center", marginTop: 4 }}>{message}</div>
      <button
        style={{ marginTop: 10, background: "none", border: "none", color: "#3b82f6", fontSize: 11, cursor: "pointer", fontWeight: 500 }}
      >
        View Full Report →
      </button>
    </div>
  );
}
