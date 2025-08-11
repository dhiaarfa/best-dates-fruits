@echo off
echo 🚀 Deploying Best Dates & Fruits to Vercel...
echo.

echo 📦 Installing Vercel CLI...
npm install -g vercel

echo.
echo 🔐 Logging into Vercel...
vercel login

echo.
echo 🏗️ Building project...
npm run build

echo.
echo 🚀 Deploying to Vercel...
vercel --prod

echo.
echo ✅ Deployment complete! Check your Vercel dashboard.
pause 