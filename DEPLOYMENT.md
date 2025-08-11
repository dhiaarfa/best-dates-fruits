# Netlify Deployment Guide

## Prerequisites
- A Netlify account
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Prepare Your Project
Your project is already configured for Netlify deployment with:
- `netlify.toml` configuration file
- Next.js configured for static export (`output: 'export'`)
- Proper build scripts

### 2. Deploy to Netlify

#### Option A: Deploy via Netlify UI (Recommended)
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "New site from Git"
3. Choose your Git provider and select your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: `18`
5. Click "Deploy site"

#### Option B: Deploy via Netlify CLI
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Deploy your site:
   ```bash
   netlify deploy --prod
   ```

### 3. Environment Variables (if needed)
If you have any environment variables, add them in Netlify:
1. Go to Site settings > Environment variables
2. Add your variables (e.g., API keys, database URLs)

### 4. Custom Domain (Optional)
1. Go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS settings as instructed

## Build Configuration
- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node version**: 18
- **NPM version**: 9

## Important Notes
- Your site will be built as a static export
- All routes will work properly with the configured redirects
- Images are optimized and cached for performance
- Security headers are automatically applied

## Troubleshooting
- If build fails, check the build logs in Netlify
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility
- Check that all image paths are correct

## Support
For more help, visit [Netlify's documentation](https://docs.netlify.com/) 