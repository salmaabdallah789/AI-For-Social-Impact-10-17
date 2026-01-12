# Vercel Deployment Checklist

If you're getting the error "Couldn't find any 'pages' or 'app' directory", follow these steps:

## 1. Verify Local Structure

Ensure your project has this structure:
```
/
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   └── globals.css
├── public/
├── package.json
├── next.config.js
└── vercel.json
```

## 2. Check Git Commit

Make sure ALL files are committed to git:

```bash
# Check if app directory is tracked
git ls-files app/

# If empty, add and commit:
git add app/
git add package.json
git add next.config.js
git add vercel.json
git commit -m "Add Next.js app structure"
git push
```

## 3. Verify Vercel Settings

In Vercel dashboard:
- **Framework Preset**: Should be "Next.js" (auto-detected)
- **Root Directory**: Should be `.` (root) - NOT a subdirectory
- **Build Command**: `npm run build` (or leave empty for auto)
- **Output Directory**: Leave empty (Next.js handles this)

## 4. Check Case Sensitivity

On Linux (Vercel servers), directory names are case-sensitive:
- ✅ `app/` (lowercase)
- ❌ `App/` or `APP/` (will fail)

## 5. Re-deploy

After making changes:
1. Push to your git repository
2. Vercel will auto-deploy
3. Or manually trigger a redeploy in Vercel dashboard

## Common Issues

### Issue: Files not in git
**Solution**: Ensure `app/` directory and all files are committed and pushed.

### Issue: Wrong root directory
**Solution**: In Vercel project settings, set Root Directory to `.` (root)

### Issue: Case sensitivity
**Solution**: Ensure directory is lowercase `app/` not `App/`

### Issue: Missing dependencies
**Solution**: Ensure `package.json` has correct Next.js version (14.x)

