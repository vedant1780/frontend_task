export const cashFlowData = [
  { date: "1 May", inflow: 45, outflow: 30 },
  { date: "3 May", inflow: 60, outflow: 40 },
  { date: "5 May", inflow: 50, outflow: 55 },
  { date: "8 May", inflow: 70, outflow: 35 },
  { date: "10 May", inflow: 40, outflow: 45 },
  { date: "12 May", inflow: 65, outflow: 50 },
  { date: "15 May", inflow: 75, outflow: 40 },
  { date: "17 May", inflow: 55, outflow: 60 },
  { date: "19 May", inflow: 80, outflow: 45 },
  { date: "22 May", inflow: 60, outflow: 35 },
  { date: "24 May", inflow: 50, outflow: 55 },
  { date: "26 May", inflow: 70, outflow: 40 },
  { date: "29 May", inflow: 65, outflow: 50 },
];

export const accounts = [
  { name: "ConnectBank Current A/c", num: "1234", balance: "₹1,25,40,000.00", negative: false, logo: "CB" },
  { name: "ConnectBank OD A/c",      num: "5678", balance: "-₹18,40,000.00",  negative: true,  logo: "CB" },
  { name: "ConnectBank Cash Credit", num: "9012", balance: "₹32,60,000.00",   negative: false, logo: "CB" },
  { name: "HDFC Bank A/c",           num: "3456", balance: "₹45,15,000.50",   negative: false, logo: "HB" },
  { name: "ICICI Bank A/c",          num: "7890", balance: "₹60,00,000.00",   negative: false, logo: "IC" },
  { name: "Axis Bank A/c",           num: "2468", balance: "₹83,00,000.00",   negative: false, logo: "AX" },
];

export const receivables = [
  { name: "ABC Enterprises", amount: "₹12,50,000", color: "#6366f1" },
  { name: "Global Supplies",  amount: "₹9,20,000",  color: "#f59e0b" },
  { name: "Sharma Traders",   amount: "₹7,75,000",  color: "#10b981" },
  { name: "Delta Corp",       amount: "₹5,30,000",  color: "#ef4444" },
  { name: "Others",           amount: "₹4,00,000",  color: "#94a3b8" },
];

export const payables = [
  { name: "Steel India Ltd",   amount: "₹7,80,000", color: "#6366f1" },
  { name: "Global Supplies",   amount: "₹6,25,000", color: "#f59e0b" },
  { name: "Machine Tools Inc", amount: "₹5,60,000", color: "#10b981" },
  { name: "Transport Co.",     amount: "₹3,20,000", color: "#ef4444" },
  { name: "Others",            amount: "₹3,00,000", color: "#94a3b8" },
];

export const navItems = [
  { icon: "⊞",  label: "Dashboard" },
  { icon: "🏦", label: "Accounts & Banking" },
  { icon: "💳", label: "Payments",            hasArrow: true },
  { icon: "📥", label: "Collections" },
  { icon: "📊", label: "Accounting" },
  { icon: "🧾", label: "GST & Tax" },
  { icon: "📄", label: "Invoicing" },
  { icon: "💰", label: "Lending",             hasArrow: true },
  { icon: "🚢", label: "Trade & Supply Chain", hasArrow: true },
  { icon: "👥", label: "Payroll & HR" },
  { icon: "🛡️", label: "Insurance" },
  { icon: "🏪", label: "Marketplace" },
  { icon: "📈", label: "Reports & Analytics" },
  { icon: "✅", label: "Compliance" },
  { icon: "⚙️", label: "Settings" },
];

export const quickActions = [
  { label: "New Payment",    icon: "💳" },
  { label: "Collect Payment",icon: "📥" },
  { label: "Create Invoice", icon: "📄" },
  { label: "Bulk Payments",  icon: "💰" },
  { label: "Pay Vendor",     icon: "🏪" },
  { label: "Add Expense",    icon: "➕" },
  { label: "Payroll",        icon: "👥" },
  { label: "Reconcile",      icon: "🔄" },
];

export const alerts = [
  { icon: "🔴", title: "GST Return for Apr 2024 is due in 5 days", sub: "Due Date: 20 May 2024" },
  { icon: "🟡", title: "2 Invoices overdue",                        sub: "Total Amount: ₹4,75,000" },
  { icon: "🟢", title: "Payment of ₹2,50,000 received from ABC Enterprises" },
  { icon: "ℹ️", title: "Your working capital limit utilization is 36.8%" },
];

export const shortcuts = [
  { name: "Tally",          icon: "📊" },
  { name: "Zoho Books",     icon: "📚" },
  { name: "Busy",           icon: "💼" },
  { name: "Marg ERP",       icon: "🔴" },
  { name: "GST Portal",     icon: "🏛️" },
  { name: "Bank Statement", icon: "🏦" },
];

export const insights = [
  { icon: "📈", text: "Your collections have improved by 12.5% this month. Keep it up!" },
  { icon: "💡", text: "You can save up to ₹1,20,000 in taxes by optimizing your expenses." },
  { icon: "🚀", text: "Your business is eligible for higher credit limit. Check now." },
];
