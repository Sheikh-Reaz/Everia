# Deploying EVERIA to Vercel

## Prerequisites
- A GitHub account
- A Vercel account (sign up at https://vercel.com)
- Git installed on your computer

## Step 1: Push Your Code to GitHub

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - EVERIA E-commerce Project"
   ```

2. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name it "everia-ecommerce" (or any name you prefer)
   - Don't initialize with README (since you already have code)
   - Click "Create repository"

3. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/everia-ecommerce.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**:
   - Visit https://vercel.com
   - Click "Sign Up" or "Log In"
   - Sign in with your GitHub account

2. **Import Your Project**:
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find and select your "everia-ecommerce" repository
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Environment Variables** (if needed):
   - No environment variables are required for this project
   - All data is stored in localStorage on the client side

5. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at: `https://your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - Select your project settings
   - Confirm deployment

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## Step 3: Configure Custom Domain (Optional)

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Important Notes

### Features That Work After Deployment:
✅ All pages (Home, Products, VR, Gaming, About, Contact, Dashboard, Login)
✅ Authentication (demo@everia.com / demo123)
✅ Product management (Add/Delete products in dashboard)
✅ Product filtering and search
✅ Responsive design (mobile, tablet, desktop)
✅ GSAP animations
✅ Smooth scrolling

### LocalStorage Considerations:
⚠️ **Important**: Products added via the dashboard are stored in browser localStorage
- Products persist only in the user's browser
- Different users will see different products if they add their own
- Clearing browser data will reset products to defaults
- For production, consider implementing a backend database (Firebase, Supabase, etc.)

### Build Optimization:
The project is configured with:
- Next.js 16.1.1 with React Compiler
- Tailwind CSS 4
- Image optimization for Unsplash and Google images
- Automatic code splitting

## Troubleshooting

### Build Fails:
1. Check that all dependencies are in package.json
2. Ensure Node.js version is 18.x or higher
3. Check Vercel build logs for specific errors

### Images Not Loading:
- All image domains are configured in next.config.mjs
- Unsplash and Google images should work automatically

### Animations Not Working:
- GSAP is included in dependencies
- ScrollTrigger and SplitText plugins are registered
- Check browser console for errors

### Products Not Saving:
- Products are stored in localStorage (client-side only)
- Check browser's localStorage in DevTools
- Clear cache and try again

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test login functionality (demo@everia.com / demo123)
- [ ] Test adding products in dashboard
- [ ] Test product filtering on products page
- [ ] Test mobile responsiveness
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Check GSAP animations work
- [ ] Verify images load properly

## Demo Credentials

**Email**: demo@everia.com  
**Password**: demo123

## Support

If you encounter any issues:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify all files are committed to GitHub
4. Ensure package.json has all dependencies

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch automatically deploys to production
- Pull requests create preview deployments
- You can rollback to previous deployments anytime

---

**Your EVERIA e-commerce site is now live! 🎉**

Share your deployment URL and start showcasing your products!
