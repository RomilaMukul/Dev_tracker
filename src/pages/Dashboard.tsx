/*
  ============================================
  Dashboard Page — src/pages/Dashboard.tsx
  ============================================

  The main landing page after login.
  Currently an empty shell — we'll add StatCards,
  DSABreakdown, ActivityHeatmap, WeeklyChart,
  and RecentActivity components one by one.
*/

export default function Dashboard() {
  return (
    <div className="p-6">
      {/* Page heading */}
      <h1 className="text-2xl font-semibold text-primary">
        Dashboard
      </h1>
      <p className="mt-1 text-secondary">
        Your coding progress at a glance.
      </p>

      {/* Component slots — will be filled in upcoming steps */}
      <div className="mt-8 grid gap-6">
        {/* Step 5: StatCard × 4 */}
        {/* Step 6: DSABreakdown */}
        {/* Step 7: ActivityHeatmap */}
        {/* Step 8: WeeklyChart */}
        {/* Step 9: RecentActivity */}
        <div className="rounded-xl border border-border bg-surface p-12 text-center text-secondary">
          Dashboard components will appear here as we build them.
        </div>
      </div>
    </div>
  );
}

