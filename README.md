# Krayaa Web

Krayaa is a pre-launch landing page for a Korean culture commerce platform bringing authentic K-beauty, K-pop merch, and Korean lifestyle products to Indian buyers.

The site presents Krayaa's launch story through a full-page vertical carousel experience, product-focused hero visuals, creator and brand partnership sections, FAQs, testimonials, and a waitlist signup flow.

## Repository Description

Pre-launch Next.js website for Krayaa, a K-culture commerce platform for India.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  Hero.tsx
  Navigation.tsx
  VerticalCategoryCarousel.tsx
  WhatsComing.tsx
  WhyKrayaa.tsx
  Vision.tsx
  ForCreators.tsx
  ForBrands.tsx
  Press.tsx
  FAQ.tsx
  FinalCTA.tsx
  Footer.tsx
public/
  assets/
```

## Notes

Forms currently manage local UI state and log submissions in the browser console. They are ready to be connected to a backend, CRM, or email marketing service.
