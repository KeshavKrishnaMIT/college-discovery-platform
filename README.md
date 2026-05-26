#  ClgFinder — Premium College Discovery Platform

A modern and responsive college discovery platform built using Next.js, TypeScript and Tailwind CSS.

Users can explore colleges, compare them side-by-side, save favorites, and use a predictor tool to discover colleges based on exam ranks.

#  Live Website

https://college-discovery-platform-omega.vercel.app

#  Features

##  College Search & Filtering
- Real-time college search
- Filter colleges by location
- Sort colleges by:
  - Highest Rating
  - Lowest Fees
  - Highest Fees

##  Detailed College Pages
Each college page includes:
- Overview
- Fees
- Placements
- Rankings
- Hostel facilities
- Courses offered
- Highest package
- Student count

##  Compare Colleges
Compare colleges side-by-side with:
- Fees
- Ratings
- Location

Includes:
- Add/remove comparison
- Dynamic comparison table

##  Saved Colleges
- Save favorite colleges
- Persistent using LocalStorage
- Saved state remains after refresh


##  College Predictor Tool
Predict colleges based on:
- Exam type
- Rank

Includes realistic rank-based filtering logic.


##  Responsive UI
Fully responsive across:
- Desktop
- Tablet
- Mobile devices


##  Performance Features
- Next.js Image Optimization
- Dynamic Routing
- Reusable UI Components
- Loading & Error States
- API State Handling
- Optimized Client-side Filtering

# Tech Stack

## Frontend
- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

# 📂 Project Structure

```bash
src/
│
├── app/
│   ├── page.tsx
│   ├── predictor/
│   └── college/[id]/
│
├── components/
│   ├── college/
│   └── layout/
│
├── data/
│   └── colleges.ts
│
├── lib/
│   └── api.ts
│
└── styles/
