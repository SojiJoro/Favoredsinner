# Setup Guide - Favored Sinner Website

This guide will help you complete the setup and configuration of your professional website.

## Table of Contents
1. [Environment Configuration](#environment-configuration)
2. [Email Setup (CRITICAL)](#email-setup-critical)
3. [Google Analytics Setup](#google-analytics-setup)
4. [Social Media Links](#social-media-links)
5. [Content Customization](#content-customization)
6. [Deployment](#deployment)

---

## Environment Configuration

### 1. Create Environment File

```bash
cp .env.example .env.local
```

### 2. Configure Required Variables

Edit `.env.local` and add your actual values:

```env
# REQUIRED: Email service configuration
RESEND_API_KEY=your_actual_resend_api_key

# OPTIONAL: Analytics tracking
NEXT_PUBLIC_GA_TRACKING_ID=G-YOUR_TRACKING_ID
```

---

## Email Setup (CRITICAL)

Your quote form requires Resend API to send emails. Without this, the form won't work.

### Step 1: Create Resend Account
1. Visit [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### Step 2: Get API Key
1. Navigate to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Favored Sinner Website")
4. Copy the generated key (starts with `re_`)

### Step 3: Add to Environment
1. Open `.env.local`
2. Replace `your_resend_api_key_here` with your actual key
3. Save the file

### Step 4: Verify Email Domain (Optional but Recommended)
1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain (e.g., favoredsinner.com)
3. Follow DNS verification steps
4. Update `FROM_EMAIL` in `src/lib/email.ts` if using custom domain

**Note:** See [EMAIL_SETUP.md](EMAIL_SETUP.md) for detailed email configuration.

---

## Google Analytics Setup

Track visitor behavior and measure site performance.

### Step 1: Create Google Analytics Account
1. Visit [Google Analytics](https://analytics.google.com)
2. Sign in with Google account
3. Click "Start measuring"
4. Create a new property for your website

### Step 2: Get Tracking ID
1. In Analytics, go to Admin → Data Streams
2. Create a new Web stream
3. Enter your website URL
4. Copy the Measurement ID (format: `G-XXXXXXXXXX`)

### Step 3: Add to Environment
1. Open `.env.local`
2. Add the tracking ID:
   ```env
   NEXT_PUBLIC_GA_TRACKING_ID=G-YOUR_ACTUAL_ID
   ```
3. Save and restart dev server

### Verification
- Visit your website
- In Google Analytics, go to Reports → Realtime
- You should see your visit tracked

---

## Social Media Links

Update social media URLs to match your actual accounts.

### Files to Update

**1. Footer Links** (`src/app/layout.tsx`)
- Line 216: Twitter URL
- Line 229: Instagram URL

**2. Contact Page** (`src/app/contact/page.tsx`)
- Line 165: Twitter URL
- Line 176: Instagram URL

### Example Update
```tsx
// Change from:
href="https://twitter.com/favoredsinner"

// To your actual handle:
href="https://twitter.com/YourActualHandle"
```

**If you don't have social accounts yet**, either:
- Remove the social links section from both files, or
- Keep placeholder links and update later

---

## Content Customization

### Statistics (Optional)

The services page shows "50+ Projects" and "98% Client Satisfaction". To update:

**File:** `src/app/services/page.tsx` (lines 78-82)

```tsx
{ number: '50+', label: 'Projects Delivered' },    // Update number
{ number: '98%', label: 'Client Satisfaction' },   // Update percentage
{ number: '24/7', label: 'Support Available' },
```

### Testimonials

Three testimonials are displayed on the homepage. These are currently sample testimonials.

**To update:** Edit `src/app/page.tsx` (lines 325-513)

**Important:** Only use real testimonials with permission. Consider:
- Asking satisfied clients for feedback
- Anonymizing names if needed
- Starting with fewer testimonials if you don't have three yet

### Service Pricing

All service prices are defined in `src/data/services.ts`. Review and update as needed:
- Ensure prices match your actual rates
- Update service descriptions to match your offerings
- Adjust testimonials in service cards

---

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Complete website setup"
   git push origin main
   ```

2. **Import to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables**
   - In Vercel project settings → Environment Variables
   - Add `RESEND_API_KEY` with your actual key
   - Add `NEXT_PUBLIC_GA_TRACKING_ID` (optional)
   - Deploy!

4. **Custom Domain (Optional)**
   - In Vercel project → Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Deploy to Other Platforms

The site is a standard Next.js app and can deploy to:
- **Netlify**: Similar process to Vercel
- **AWS Amplify**: Supports Next.js
- **Self-hosted**: Use `npm run build` and serve

---

## Post-Deployment Checklist

- [ ] Email form working (test by submitting quote request)
- [ ] Google Analytics tracking visitors
- [ ] All links working (navigation, footer, social media)
- [ ] Privacy Policy and Terms accessible
- [ ] Favicon showing in browser tab
- [ ] Mobile responsive (test on phone)
- [ ] Contact email (info@favoredsinner.com) set up and checking
- [ ] SSL certificate active (https://)

---

## Updating Statistics & Content

As you grow, update these regularly:

1. **Statistics** - Update project count and satisfaction rate quarterly
2. **Testimonials** - Add new ones as you receive them
3. **Blog** - Add new posts to `src/data/blog-posts.ts`
4. **Services** - Update pricing and descriptions in `src/data/services.ts`

---

## Support

If you encounter issues:

1. Check the console for errors: `npm run dev` output
2. Verify environment variables are set correctly
3. Ensure dependencies are installed: `npm install`
4. Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)

---

## Quick Reference Commands

```bash
# Development
npm run dev              # Start development server at localhost:3000

# Production Build
npm run build           # Build for production
npm start              # Start production server

# Code Quality
npm run lint           # Check for code issues

# Deployment
git add .
git commit -m "message"
git push origin main    # Push to GitHub (auto-deploys on Vercel)
```

---

## Next Steps After Launch

1. **SEO Optimization**
   - Submit sitemap to Google Search Console
   - Verify site ownership
   - Monitor search performance

2. **Performance Monitoring**
   - Use Google Analytics to track visitors
   - Monitor page load speeds
   - Review user behavior patterns

3. **Content Updates**
   - Publish blog posts regularly
   - Update portfolio with new projects
   - Collect and add client testimonials

4. **Marketing**
   - Share on social media
   - Update email signature with website link
   - Add website to business cards and profiles

---

**Congratulations!** Your professional website is ready to launch. 🚀
