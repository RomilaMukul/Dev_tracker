# ⚡ DevTrack — Your Developer Journey, Visualized.

<p align="center">
  <strong>A unified developer productivity dashboard to track coding progress, DSA practice, GitHub activity, goals and projects — all in one place.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-In%20Development-7c3aed?style=for-the-badge" alt="Project Status"/>
  <img src="https://img.shields.io/badge/React-TypeScript-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Build-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
</p>

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-roadmap">Roadmap</a>
</p>

---

## 📌 Overview

A developer's progress is often scattered across multiple platforms.

DSA statistics live on LeetCode, coding contributions live on GitHub, personal goals live in notes, and project progress is tracked separately.

**DevTrack aims to bring all of this information together into one centralized workspace.**

It is designed to help developers understand their progress, maintain consistency, identify areas for improvement and manage their technical journey.

Rather than simply displaying statistics, DevTrack aims to turn development activity into meaningful, actionable insights.

### 🎯 The Problem We're Solving

- Scattered coding statistics across different platforms.
- No centralized view of DSA practice and problem-solving progress.
- Difficulty tracking consistency and weekly goals.
- Limited visibility into personal projects and development activity.
- No single dashboard connecting learning progress with practical development work.

### 💡 Our Solution

DevTrack combines coding analytics, personal progress tracking and project management into a single, intuitive dashboard.

---

## ✨ Features

> Features are being developed incrementally. The sections below describe the planned functionality.

### 📊 1. Developer Dashboard
- Centralized overview of developer activity.
- DSA progress and difficulty breakdown.
- Coding activity heatmap.
- Weekly activity visualizations.
- Recent activity timeline.
- Personalized progress statistics.

### 💻 2. DSA Tracker
- Add, edit and delete coding problems.
- Organize problems by topic and difficulty.
- Track solved dates and problem links.
- Monitor Easy, Medium and Hard progress.
- Filter and search through problems.

### 🐙 3. GitHub Integration
- Connect public GitHub profile information.
- View repositories, stars and forks.
- Explore programming language distribution.
- Monitor contribution activity.
- Display repository information.

### 🧠 4. LeetCode Integration
- View total problems solved.
- Track Easy, Medium and Hard statistics.
- Monitor contest rating where available.
- Explore recent submission activity where supported.

### 🎯 5. Goals & Progress
- Set weekly and monthly targets.
- Track DSA practice goals.
- Monitor learning milestones.
- Visualize goal completion.

### 🚀 6. Project Management
- Maintain a personal project portfolio.
- Track project status: Planning, In Progress and Completed.
- Add technology tags.
- Store GitHub and live deployment links.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| TypeScript | Type safety and maintainable code |
| Vite | Development server and build tooling |
| Tailwind CSS v4 | Responsive styling |
| React Router | Client-side navigation |
| Recharts | Data visualization |
| Lucide React | Interface icons |
| Supabase | Authentication and PostgreSQL database |
| GitHub REST API | GitHub profile and repository data |
| LeetCode GraphQL | Supported LeetCode statistics |
| Cloudflare Pages | Deployment and hosting |

---

## 🏗️ Architecture

DevTrack follows a modular frontend architecture with managed backend services and external API integrations.

```text
                    DEVTRACK
                        |
                 React Application
                        |
              +---------+---------+
              |                   |
          Dashboard            Pages
              |                   |
       +------+------+     +------+------+
       |      |      |     |      |      |
      DSA   GitHub LeetCode Goals Projects
       |      |      |     |      |      |
       +------+------|-----+------+------+
                     |
              Application Logic
                     |
          +----------+----------+
          |                     |
       Supabase             External APIs
          |                     |
    PostgreSQL DB          GitHub / LeetCode
    Authentication
          |
      Cloudflare Pages
       (Frontend Hosting)
```

### 📁 Project Structure

```text
devtrack/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── TopNav.tsx
│   │   │   └── DashboardLayout.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── StatCard.tsx
│   │   │   ├── DSABreakdown.tsx
│   │   │   ├── ActivityHeatmap.tsx
│   │   │   ├── WeeklyChart.tsx
│   │   │   └── RecentActivity.tsx
│   │   │
│   │   └── ui/
│   │       └── ThemeToggle.tsx
│   │
│   ├── pages/
│   │   └── Dashboard.tsx
│   │
│   ├── data/
│   │   └── dummy.ts
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

*The structure will evolve as additional modules are implemented.*

---

## 🚀 Getting Started

Follow these instructions to run DevTrack locally.

### Prerequisites

- Node.js (LTS recommended)
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/DevTrack.git
```

### 2. Navigate to the project directory

```bash
cd DevTrack
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in your browser

```text
http://localhost:5173
```

### Production build

```bash
npm run build
```

---

## 🔐 Environment Variables

Supabase configuration will be required when backend integration is implemented.

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_publishable_key
```

Never commit actual credentials to GitHub.

Only expose Supabase client-side publishable credentials with properly configured Row Level Security. Never expose the Supabase service-role key in frontend code.

---

## 🗺️ Roadmap

Development is organized into incremental phases.

- [x] Phase 1 — Initial React + TypeScript project setup
- [ ] Phase 2 — Dashboard UI and navigation
- [ ] Phase 3 — Supabase authentication
- [ ] Phase 4 — DSA tracker and database integration
- [ ] Phase 5 — GitHub API integration
- [ ] Phase 6 — LeetCode integration
- [ ] Phase 7 — Goals and project management
- [ ] Phase 8 — Testing, optimization and deployment

---

## 🎨 Design Philosophy

DevTrack follows a minimal, modern developer-dashboard aesthetic.

**Design inspiration:** Linear × GitHub × Vercel

- Deep charcoal backgrounds.
- Violet accent colors.
- Subtle borders and gradients.
- Clean typography using Inter.
- Responsive layouts.
- Consistent visual hierarchy.
- Data visualizations that prioritize readability.

---

## 🔒 Engineering Considerations

- Modular and reusable React components.
- Type-safe application development.
- Secure database access through Supabase Row Level Security.
- Graceful handling of external API failures.
- No sensitive credentials committed to version control.
- Responsive and accessible UI components.

**API limitations:** LeetCode's public GraphQL endpoint is unofficial and may change or impose rate limits. Its integration will include error handling and fallback states.

---

## 🌱 Future Scope

Potential future enhancements include:

- Advanced coding consistency analytics.
- Topic-wise DSA performance insights.
- Personalized learning recommendations.
- Developer productivity reports.
- More coding platform integrations.
- Exportable progress reports.

---

## 👩‍💻 Development Approach

DevTrack is being developed incrementally, with an emphasis on understanding the engineering concepts behind each feature.

The project explores modern frontend development, API integrations, database design, authentication, data visualization and deployment.

---

<p align="center">
  <strong>Built to track progress. Designed to encourage consistency. 🚀</strong>
</p>

<p align="center">
  <sub>DevTrack — Your Developer Journey, Visualized.</sub>
</p>