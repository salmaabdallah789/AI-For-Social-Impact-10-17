# AI for Social Impact

A Next.js 14 landing page for the AI Youth Director for SDGs contest.

## Project Structure

```
/
├── app/
│   ├── layout.jsx      # Root layout with metadata
│   ├── page.jsx        # Landing page
│   └── globals.css     # Global styles with Tailwind
├── public/             # Static assets
├── package.json        # Dependencies and scripts
└── next.config.js      # Next.js configuration
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Deployment on Vercel

This project is configured for Vercel deployment:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

The project uses:
- Next.js 14 App Router
- Tailwind CSS for styling
- React 18

## Features

- Responsive design
- Dark/Light alternating sections
- Producer & Director mode support
- Earth emoji background theme
- FAQ accordion
- Timeline visualization

