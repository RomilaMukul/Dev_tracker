/*
  ============================================
  App.tsx — Root component with React Router
  ============================================

  Sets up client-side routing using react-router-dom.
  Currently only the Dashboard route exists.
  More routes (DSA Tracker, GitHub, LeetCode, Goals,
  Projects) will be added as we build those pages.

  The DashboardLayout wrapper (sidebar + top nav)
  will be added in Step 4 of the build process.
*/

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route → Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Placeholder routes — pages will be created later */}
        {/* <Route path="/dsa" element={<DSATracker />} /> */}
        {/* <Route path="/github" element={<GitHub />} /> */}
        {/* <Route path="/leetcode" element={<LeetCode />} /> */}
        {/* <Route path="/goals" element={<Goals />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}

        {/* Catch-all: redirect unknown paths to dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
