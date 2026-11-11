/*
  ============================================
  Dummy Data — src/data/dummy.ts
  ============================================

  All placeholder data lives here. When you connect
  Supabase and external APIs later, you'll replace
  these exports with real data fetchers. The rest
  of the app imports from this single file, so
  swapping is painless.
*/

// ── User Profile ──
// Will be replaced by Supabase Auth user object later.
export const userProfile = {
  name: 'Udit',
  email: 'udit@example.com',
  avatar: '',                     // empty = show initials fallback
  joinedDate: '2024-01-15',
};

// ── Dashboard Stat Cards ──
// Four key metrics shown at the top of the dashboard.
export const dashboardStats = {
  dsaSolved: {
    value: 247,
    label: 'DSA Problems Solved',
    change: '+12 this week',
    trend: 'up' as const,
  },
  githubRepos: {
    value: 18,
    label: 'GitHub Repositories',
    change: '+2 this month',
    trend: 'up' as const,
  },
  codingStreak: {
    value: 14,
    label: 'Day Coding Streak',
    change: 'Personal best: 21',
    trend: 'up' as const,
  },
  weeklyGoal: {
    value: 72,
    label: 'Weekly Goal',
    change: '18/25 problems',
    trend: 'up' as const,
    isPercentage: true,
  },
};

// ── DSA Difficulty Breakdown ──
// Progress for each difficulty tier.
export const dsaBreakdown = {
  easy:   { solved: 120, total: 150, label: 'Easy'   },
  medium: { solved:  95, total: 200, label: 'Medium' },
  hard:   { solved:  32, total: 100, label: 'Hard'   },
};

// ── Weekly Coding Activity (Recharts bar chart) ──
// Each entry = one day of the current week.
export const weeklyActivity = [
  { day: 'Mon', problems: 5, hours: 2.5 },
  { day: 'Tue', problems: 3, hours: 1.8 },
  { day: 'Wed', problems: 7, hours: 3.2 },
  { day: 'Thu', problems: 4, hours: 2.0 },
  { day: 'Fri', problems: 6, hours: 2.8 },
  { day: 'Sat', problems: 8, hours: 4.0 },
  { day: 'Sun', problems: 2, hours: 1.0 },
];

// ── Activity Heatmap Data ──
// 365 entries representing daily coding intensity (0–4 scale).
// 0 = no activity, 4 = very active.
export const heatmapData: number[] = Array.from({ length: 365 }, () =>
  Math.random() < 0.3 ? 0 : Math.floor(Math.random() * 4) + 1,
);

// ── Recent Activity Timeline ──
// Latest developer actions shown in the activity feed.
export const recentActivity = [
  {
    id: '1',
    type: 'dsa' as const,
    title: 'Solved "Two Sum"',
    description: 'LeetCode — Easy',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    type: 'github' as const,
    title: 'Pushed 3 commits',
    description: 'DevTrack — feat: add dashboard layout',
    timestamp: '4 hours ago',
  },
  {
    id: '3',
    type: 'goal' as const,
    title: 'Completed Weekly Goal',
    description: '25/25 problems solved',
    timestamp: '1 day ago',
  },
  {
    id: '4',
    type: 'dsa' as const,
    title: 'Solved "Merge Intervals"',
    description: 'LeetCode — Medium',
    timestamp: '1 day ago',
  },
  {
    id: '5',
    type: 'github' as const,
    title: 'Created new repository',
    description: 'portfolio-v2 — React + Next.js',
    timestamp: '3 days ago',
  },
];

