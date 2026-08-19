// Pure SVG donut / pie chart.
// Props:
//   segments : Array<{ value: number, color: string }>
//   total    : string  — centre label (e.g. "₹38,75,000")
//   label    : string  — small sub-label below total (e.g. "Total")

function polarToCartesian(cx, cy, r, deg) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function DonutChart({ segments, total, label }) {
  const radius = 45, cx = 60, cy = 60;
  const totalVal = segments.reduce((s, seg) => s + seg.value, 0);

  let startAngle = -90;
  const paths = segments.map((seg) => {
    const angle    = (seg.value / totalVal) * 360;
    const endAngle = startAngle + angle;
    const start    = polarToCartesian(cx, cy, radius, startAngle);
    const end      = polarToCartesian(cx, cy, radius, endAngle);
    const largeArc = angle > 180 ? 1 : 0;
    const d = `M ${cx} ${cy} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y} Z`;
    startAngle = endAngle;
    return { d, color: seg.color };
  });

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle cx={cx} cy={cy} r={radius} fill="white" />
      {paths.map((p, i) => (
        <path key={i} d={p.d} fill={p.color} />
      ))}
      {/* Inner white circle to create donut hole */}
      <circle cx={cx} cy={cy} r={30} fill="white" />
      <text x={cx} y={cy - 5} textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e293b">{total}</text>
      <text x={cx} y={cy + 8} textAnchor="middle" fontSize="7" fill="#64748b">{label}</text>
    </svg>
  );
}
