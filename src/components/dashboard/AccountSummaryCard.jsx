import BankLogo from "../ui/BankLogo";
import { accounts } from "../../data/mockData";

// Lists all linked bank accounts with balances.

export default function AccountSummaryCard() {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 10,
        padding: 16,
        border: "1px solid #f1f5f9",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontWeight: 700,
            color: "#1e293b",
            fontSize: 14,
          }}
        >
          Account Summary
        </span>

        <button
          style={{
            background: "none",
            border: "none",
            color: "#3b82f6",
            fontSize: 12,
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          View All Accounts
        </button>
      </div>

      {/* Accounts */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {accounts.map((acc) => (
          <div
            key={acc.num}
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              minWidth: 0,
            }}
          >
            {/* Bank Logo */}
            <div
              style={{
                marginRight: 10,
                flexShrink: 0,
              }}
            >
              <BankLogo code={acc.logo} />
            </div>

            {/* Account Name */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
                paddingRight: 10,
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#1e293b",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                }}
              >
                {acc.name}
              </span>
            </div>

            {/* Account Number */}
            <div
              style={{
                width: 65,
                minWidth: 65,
                fontSize: 10,
                color: "#94a3b8",
                whiteSpace: "nowrap",
              }}
            >
              ...{acc.num}
            </div>

            {/* Balance */}
            <div
              style={{
                width: 90,
                minWidth: 90,
                marginLeft: 10,
                fontSize: 12,
                fontWeight: 700,
                color: acc.negative ? "#ef4444" : "#1e293b",
                whiteSpace: "nowrap",
                textAlign: "right",
              }}
            >
              {acc.balance}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}