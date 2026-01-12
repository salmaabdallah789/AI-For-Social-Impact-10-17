# Fix Vercel "Couldn't find app directory" Error

## The Problem
Vercel can't find your `app` directory even though it exists locally. This happens when:
1. The `app` directory isn't committed to git
2. Vercel is looking in the wrong root directory

## Solution Steps

### Step 1: Verify Files Are in Git

Open your terminal/Git Bash and run:

```bash
# Check if app directory is tracked
git ls-files app/

# If this returns nothing, add the files:
git add app/
git add package.json
git add next.config.js
git add tailwind.config.js
git add postcss.config.js
git add public/
git commit -m "Add Next.js app directory and configuration"
git push
```

### Step 2: Check Vercel Project Settings

1. Go to your Vercel project dashboard
2. Click **Settings** → **General**
3. Scroll to **Root Directory**
4. **IMPORTANT**: Make sure this is set to `.` (dot/root) or **leave it empty**
5. If it's set to a subdirectory like `project-name/`, change it to `.`

### Step 3: Verify Framework Detection

1. In Vercel Settings → **Build & Development Settings**
2. **Framework Preset** should show "Next.js" (auto-detected)
3. If not, manually select "Next.js"
4. **Build Command**: `npm run build` (or leave empty)
5. **Output Directory**: Leave empty (Next.js handles this)

### Step 4: Manual Redeploy

After pushing your changes:
1. Go to **Deployments** tab in Vercel
2. Click the **⋯** menu on the latest deployment
3. Click **Redeploy**

## Quick Checklist

- [ ] `app/` directory exists locally ✅
- [ ] `app/layout.jsx` exists ✅
- [ ] `app/page.jsx` exists ✅
- [ ] `package.json` has Next.js 14 ✅
- [ ] All files committed to git ❓ (YOU NEED TO CHECK THIS)
- [ ] Vercel Root Directory is `.` or empty ❓ (CHECK IN VERCEL DASHBOARD)
- [ ] Files pushed to repository ❓ (YOU NEED TO DO THIS)

## If Still Not Working

Create a `vercel.json` file in the root:

```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm install"
}
```

But first, try the git commit steps above - that's usually the issue!

