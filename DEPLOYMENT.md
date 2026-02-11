# 🚀 Portfolio Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

**Steps:**
1. **Push to GitHub** (see instructions below)
2. **Go to [vercel.com](https://vercel.com)**
3. **Sign in** with your GitHub account
4. **Click "Add New Project"**
5. **Import** your `portfolio` repository
6. **Configure:**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
7. **Click "Deploy"**
8. **Done!** Your site will be live at `https://your-portfolio.vercel.app`

**Automatic Updates:** Every push to GitHub will auto-deploy! 🎉

---

### Option 2: Netlify

**Steps:**
1. **Push to GitHub** (see instructions below)
2. **Go to [netlify.com](https://netlify.com)**
3. **Sign in** with your GitHub account
4. **Click "Add new site" → "Import an existing project"**
5. **Select** your `portfolio` repository
6. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `dist`
7. **Click "Deploy site"**
8. **Done!** Your site will be live at `https://your-portfolio.netlify.app`

---

### Option 3: GitHub Pages

**Steps:**
1. **Push to GitHub** (see instructions below)
2. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```
3. **Update package.json** - add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. **Add base path** in `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/portfolio/',
     // ... rest of config
   })
   ```
5. **Deploy:**
   ```bash
   npm run deploy
   ```
6. **Enable GitHub Pages** in repository settings → Pages → Source: `gh-pages` branch
7. **Done!** Your site will be live at `https://Sharan171111.github.io/portfolio/`

---

## 📦 Push to GitHub

**Create a new repository on GitHub:**
1. Go to [github.com/new](https://github.com/new)
2. Name it `portfolio` (or any name you prefer)
3. **Don't** initialize with README (we already have files)
4. Click "Create repository"

**Push your code:**
```bash
# Add GitHub remote (replace with your actual repository URL)
git remote add origin https://github.com/Sharan171111/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🔧 Build Locally (Optional)

To test the production build locally:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

---

## 🌐 Custom Domain (Optional)

### For Vercel:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### For Netlify:
1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration instructions

---

## ✅ Deployment Checklist

- [ ] Git repository initialized ✓
- [ ] Code committed ✓
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Deployment platform selected (Vercel/Netlify/GitHub Pages)
- [ ] Project deployed
- [ ] Live URL verified
- [ ] Custom domain configured (optional)

---

## 🎯 Recommended: Vercel

**Why Vercel?**
- ✨ Zero configuration needed
- 🚀 Blazing fast CDN
- 🔄 Automatic deployments on git push
- 🆓 Free SSL certificates
- 📊 Built-in analytics
- 🌍 Global edge network

**Your portfolio will be live in under 2 minutes!**
