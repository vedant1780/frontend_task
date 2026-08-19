// Top navigation bar with search, notification badges, and company info.
// No props required — all data is static/presentational for now.

export default function TopBar() {
  return (
    <div
      style={{
        background: "white",
        borderBottom: "1px solid #e2e8f0",
        padding: "0 24px",
        height: 56,
        display: "flex",
        alignItems: "center",
        gap: 16,
        flexShrink: 0,
      }}
    >
      {/* Search */}
      <div
        style={{
          flex: 1,
          background: "#f1f5f9",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 14px",
          maxWidth: 480,
        }}
      >
        <span
          style={{
            color: "#94a3b8",
            fontSize: 14,
          }}
        >
          🔍
        </span>

        <span
          style={{
            color: "#94a3b8",
            fontSize: 13,
          }}
        >
          Search for transactions, invoices, vendors...
        </span>

        <span
          style={{
            marginLeft: "auto",
            color: "#94a3b8",
            fontSize: 11,
            background: "#e2e8f0",
            padding: "2px 6px",
            borderRadius: 4,
          }}
        >
          ⌘ K
        </span>
      </div>

      {/* Right side — Icons + Company */}
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        {/* Messages */}
        <IconBadge icon="💬" count={12} />

        {/* Notifications */}
        <IconBadge
          icon="🔔"
          count={5}
          badgeColor="#f59e0b"
        />

        {/* Help */}
        <span
          style={{
            fontSize: 20,
            cursor: "pointer",
          }}
        >
          ❓
        </span>

        {/* Company Details */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            borderLeft: "1px solid #e2e8f0",
            paddingLeft: 16,
            marginLeft: 2,
          }}
        >
          {/* Company text */}
          <div
            style={{
              textAlign: "right",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#1e293b",
              }}
            >
              Sunrise Traders Pvt. Ltd.
            </div>

            <div
              style={{
                fontSize: 10,
                color: "#94a3b8",
                marginTop: 2,
              }}
            >
              SME • GSTIN 27AABCS1234D1Z6
            </div>
          </div>

          {/* Company Avatar */}
          <div
            style={{
              width: 34,
              height: 34,
              background: "#3b82f6",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 700,
              fontSize: 13,
              flexShrink: 0,
            }}
          >
            ST
          </div>
        </div>
      </div>
    </div>
  );
}

// Small helper — kept local since it's only used here
function IconBadge({
  icon,
  count,
  badgeColor = "#ef4444",
}) {
  return (
    <div
      style={{
        position: "relative",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          fontSize: 20,
        }}
      >
        {icon}
      </span>

      <span
        style={{
          position: "absolute",
          top: -5,
          right: -6,
          background: badgeColor,
          color: "white",
          fontSize: 9,
          borderRadius: 10,
          padding: "1px 4px",
          fontWeight: 700,
          minWidth: 14,
          textAlign: "center",
        }}
      >
        {count}
      </span>
    </div>
  );
}