// Mock data for Conduit dashboard

export const mockUserData = {
  name: "John Doe",
  email: "john@example.com",
  joinDate: "2024-01-15",
  tier: "Premium",
};

// Weekly earnings data
export const weeklyEarnings = {
  thisWeek: [
    { day: "Mon", earnings: 12.5, bandwidth: 24.5, connections: 3 },
    { day: "Tue", earnings: 18.2, bandwidth: 32.1, connections: 4 },
    { day: "Wed", earnings: 15.8, bandwidth: 28.3, connections: 3 },
    { day: "Thu", earnings: 22.4, bandwidth: 41.2, connections: 5 },
    { day: "Fri", earnings: 19.6, bandwidth: 35.7, connections: 4 },
    { day: "Sat", earnings: 25.3, bandwidth: 48.9, connections: 5 },
    { day: "Sun", earnings: 21.7, bandwidth: 39.4, connections: 4 },
  ],
  lastWeek: [
    { day: "Mon", earnings: 10.3, bandwidth: 21.2, connections: 3 },
    { day: "Tue", earnings: 15.7, bandwidth: 28.9, connections: 3 },
    { day: "Wed", earnings: 13.2, bandwidth: 24.5, connections: 3 },
    { day: "Thu", earnings: 19.8, bandwidth: 36.3, connections: 4 },
    { day: "Fri", earnings: 17.4, bandwidth: 31.8, connections: 4 },
    { day: "Sat", earnings: 23.1, bandwidth: 44.2, connections: 5 },
    { day: "Sun", earnings: 18.9, bandwidth: 35.1, connections: 4 },
  ],
  twoWeeksAgo: [
    { day: "Mon", earnings: 9.8, bandwidth: 19.5, connections: 2 },
    { day: "Tue", earnings: 14.5, bandwidth: 26.7, connections: 3 },
    { day: "Wed", earnings: 12.1, bandwidth: 22.9, connections: 3 },
    { day: "Thu", earnings: 18.3, bandwidth: 33.4, connections: 4 },
    { day: "Fri", earnings: 16.2, bandwidth: 29.8, connections: 3 },
    { day: "Sat", earnings: 21.7, bandwidth: 40.5, connections: 4 },
    { day: "Sun", earnings: 17.6, bandwidth: 32.3, connections: 3 },
  ],
};

// Monthly earnings data (last 12 months)
export const monthlyEarnings = [
  { month: "Jan", earnings: 315.20, bandwidth: 625.5 },
  { month: "Feb", earnings: 342.80, bandwidth: 685.2 },
  { month: "Mar", earnings: 378.45, bandwidth: 756.8 },
  { month: "Apr", earnings: 395.60, bandwidth: 791.2 },
  { month: "May", earnings: 412.30, bandwidth: 824.6 },
  { month: "Jun", earnings: 438.75, bandwidth: 877.5 },
  { month: "Jul", earnings: 456.90, bandwidth: 913.8 },
  { month: "Aug", earnings: 485.20, bandwidth: 970.4 },
  { month: "Sep", earnings: 502.15, bandwidth: 1004.3 },
  { month: "Oct", earnings: 528.40, bandwidth: 1056.8 },
  { month: "Nov", earnings: 545.80, bandwidth: 1091.6 },
  { month: "Dec", earnings: 135.50, bandwidth: 271.0 }, // Current month (partial)
];

// Transaction history
export const transactionHistory = [
  {
    id: "txn_001",
    date: "2024-12-28",
    type: "payout",
    description: "Weekly payout - Bank transfer",
    amount: 85.00,
    status: "completed",
  },
  {
    id: "txn_002",
    date: "2024-12-21",
    type: "payout",
    description: "Weekly payout - Bank transfer",
    amount: 78.50,
    status: "completed",
  },
  {
    id: "txn_003",
    date: "2024-12-14",
    type: "payout",
    description: "Weekly payout - Bank transfer",
    amount: 82.30,
    status: "completed",
  },
  {
    id: "txn_004",
    date: "2024-12-07",
    type: "payout",
    description: "Weekly payout - Bank transfer",
    amount: 76.80,
    status: "completed",
  },
  {
    id: "txn_005",
    date: "2024-11-30",
    type: "bonus",
    description: "Referral bonus",
    amount: 25.00,
    status: "completed",
  },
  {
    id: "txn_006",
    date: "2024-11-28",
    type: "payout",
    description: "Weekly payout - Bank transfer",
    amount: 89.20,
    status: "completed",
  },
];

// Bandwidth usage statistics
export const bandwidthStats = {
  total: 250, // GB monthly limit
  used: 187, // GB used this month
  uploadSpeed: 12.5, // Mbps
  downloadSpeed: 45.2, // Mbps
  activeNodes: 3,
  totalShared: 2847, // GB all time
};

// Recent activity feed
export const recentActivities = [
  {
    id: 1,
    type: "earning",
    title: "Earnings Deposited",
    description: "Weekly payment processed",
    amount: "+$24.50",
    time: "2 hours ago",
    icon: "dollar",
  },
  {
    id: 2,
    type: "bandwidth",
    title: "Bandwidth Shared",
    description: "45.2 GB transferred",
    amount: "45.2 GB",
    time: "5 hours ago",
    icon: "wifi",
  },
  {
    id: 3,
    type: "milestone",
    title: "Milestone Reached",
    description: "100 GB total shared this week",
    amount: "100 GB",
    time: "1 day ago",
    icon: "trophy",
  },
  {
    id: 4,
    type: "payout",
    title: "Payout Completed",
    description: "Bank transfer successful",
    amount: "+$85.00",
    time: "3 days ago",
    icon: "check",
  },
  {
    id: 5,
    type: "connection",
    title: "New Node Connected",
    description: "Node #3 is now active",
    amount: "3 nodes",
    time: "5 days ago",
    icon: "server",
  },
  {
    id: 6,
    type: "earning",
    title: "Daily Earnings",
    description: "Bandwidth sharing rewards",
    amount: "+$22.40",
    time: "1 week ago",
    icon: "dollar",
  },
];

// Performance metrics
export const performanceMetrics = {
  uptime: 99.2, // percentage
  avgDailyEarnings: 19.36, // dollars
  avgDailyBandwidth: 38.7, // GB
  peakEarningsDay: "Saturday",
  totalEarnings: 1245.50, // all time
  totalBandwidth: 2847, // GB all time
};

// Referral data
export const referralData = {
  totalReferrals: 12,
  activeReferrals: 8,
  referralEarnings: 145.00,
  pendingBonus: 25.00,
};

// Notifications
export const notifications = [
  {
    id: 1,
    type: "success",
    title: "Payout Processed",
    message: "Your weekly payout of $85.00 has been successfully transferred.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "info",
    title: "Bandwidth Target Reached",
    message: "You've reached 75% of your monthly bandwidth goal!",
    time: "1 day ago",
    read: false,
  },
  {
    id: 3,
    type: "warning",
    title: "Payment Method Expiring",
    message: "Your payment method will expire in 30 days. Please update it.",
    time: "2 days ago",
    read: true,
  },
];
