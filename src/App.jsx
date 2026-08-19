import { useState } from "react";

// Layout
import Sidebar from "./components/layout/Sidebar";
import TopBar from "./components/layout/TopBar";

// Dashboard sections
import KpiCards from "./components/dashboard/KpiCards";
import CashFlowCard from "./components/dashboard/CashFlowCard";
import AccountSummaryCard from "./components/dashboard/AccountSummaryCard";

import {
  ReceivablesCard,
  PayablesCard,
} from "./components/dashboard/ReceivablesPayablesCards";

import BusinessHealthCard from "./components/dashboard/BusinessHealthCard";
import AiInsightsCard from "./components/dashboard/AiInsightsCard";
import ShortcutsCard from "./components/dashboard/ShortcutsCard";

import {
  QuickActionsPanel,
  AlertsPanel,
  FundingCta,
} from "./components/dashboard/RightPanel";

// Data
import { navItems } from "./data/mockData";

export default function App() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        fontFamily: "'Inter', -apple-system, sans-serif",
        background: "#f8fafc",
        overflow: "hidden",
      }}
    >
      {/* =========================================================
          SIDEBAR
      ========================================================= */}
      <Sidebar
        navItems={navItems}
        activeNav={activeNav}
        onNav={setActiveNav}
      />

      {/* =========================================================
          MAIN APPLICATION
      ========================================================= */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* =======================================================
            TOP BAR
        ======================================================= */}
        <TopBar />

        {/* =======================================================
            SCROLLABLE DASHBOARD
        ======================================================= */}
        <div
          style={{
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            overflowX: "hidden",
            padding: 24,
            boxSizing: "border-box",
          }}
        >
          {/* =====================================================
              PAGE HEADER
          ===================================================== */}
          <div
            style={{
              width: "100%",
              marginBottom: 16,
              boxSizing: "border-box",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: 16,
                fontWeight: 700,
                color: "#1e293b",
              }}
            >
              Good morning, Rajesh 👋
            </h1>

            <p
              style={{
                margin: "4px 0 0",
                color: "#64748b",
                fontSize: 12,
              }}
            >
              Here's what's happening with your business today.
            </p>
          </div>

          {/* =====================================================
              MAIN TOP SECTION
              CENTRE + RIGHT PANEL
          ===================================================== */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 20,
              width: "100%",
              minWidth: 0,
              boxSizing: "border-box",
            }}
          >
            {/* =================================================
                CENTRE CONTENT
            ================================================= */}
            <main
              style={{
                flex: 1,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* =================================================
                  ROW 1 — KPI CARDS
              ================================================= */}
              <div
                style={{
                  width: "100%",
                  minWidth: 0,
                }}
              >
                <KpiCards />
              </div>

              {/* =================================================
                  ROW 2 — CASH FLOW + ACCOUNT SUMMARY
              ================================================= */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: 14,
                  width: "100%",
                  minWidth: 0,
                  boxSizing: "border-box",
                  alignItems: "stretch",
                }}
              >
                <div
                  style={{
                    minWidth: 0,
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <CashFlowCard />
                </div>

                <div
                  style={{
                    minWidth: 0,
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <AccountSummaryCard />
                </div>
              </div>

              {/* =================================================
                  ROW 3 — RECEIVABLES + PAYABLES + HEALTH
                  ALL THREE SAME HEIGHT
              ================================================= */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: 14,
                  width: "100%",
                  minWidth: 0,
                  boxSizing: "border-box",

                  // Forces all three grid items to the
                  // height of the tallest item
                  alignItems: "stretch",
                }}
              >
                {/* =================================================
                    RECEIVABLES
                ================================================= */}
                <div
                  style={{
                    width: "100%",
                    minWidth: 0,
                    display: "flex",
                    alignItems: "stretch",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      minWidth: 0,
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <ReceivablesCard />
                  </div>
                </div>

                {/* =================================================
                    PAYABLES
                ================================================= */}
                <div
                  style={{
                    width: "100%",
                    minWidth: 0,
                    display: "flex",
                    alignItems: "stretch",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      minWidth: 0,
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <PayablesCard />
                  </div>
                </div>

                {/* =================================================
                    BUSINESS HEALTH
                ================================================= */}
                <div
                  style={{
                    width: "100%",
                    minWidth: 0,
                    display: "flex",
                    alignItems: "stretch",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      minWidth: 0,
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <BusinessHealthCard />
                  </div>
                </div>
              </div>
            </main>

            {/* =================================================
                RIGHT PANEL
            ================================================= */}
            <aside
              style={{
                width: 300,
                minWidth: 220,
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                boxSizing: "border-box",
              }}
            >
              {/* Customize Dashboard */}
              <button
                style={{
                  background: "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: 6,
                  padding: "8px 12px",
                  fontSize: 12,
                  color: "#3b82f6",
                  cursor: "pointer",
                  fontWeight: 500,
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                ✏️ Customize Dashboard
              </button>

              {/* Quick Actions */}
              <QuickActionsPanel />

              {/* Alerts */}
              <AlertsPanel />

              {/* Funding */}
              <FundingCta />
            </aside>
          </div>

          {/* =====================================================
              ROW 4 — AI INSIGHTS + SHORTCUTS
              50% / 50% FULL WIDTH
          ===================================================== */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: 14,
              width: "125%",
              minWidth: 0,
              marginTop: 16,
              boxSizing: "border-box",

              // Both cards have equal height
              alignItems: "stretch",
            }}
          >
            {/* =================================================
                AI INSIGHTS
            ================================================= */}
            <div
              style={{
                width: "100%",
                minWidth: 0,
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <div
                style={{
                  width: "100%",
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <AiInsightsCard />
              </div>
            </div>

            {/* =================================================
                SHORTCUTS
            ================================================= */}
            <div
              style={{
                width: "62%",
                minWidth: 0,
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <div
                style={{
                  width: "50%",
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <ShortcutsCard />
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            FOOTER
        ======================================================= */}
        <footer
          style={{
            background: "white",
            borderTop: "1px solid #e2e8f0",
            padding: "10px 24px",
            textAlign: "center",
            fontSize: 11,
            color: "#94a3b8",
            flexShrink: 0,
            boxSizing: "border-box",
          }}
        >
          © 2024 ConnectBank. All rights reserved.
        </footer>
      </div>
    </div>
  );
}