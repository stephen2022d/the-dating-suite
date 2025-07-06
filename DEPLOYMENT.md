# 🚀 Deployment Guide: thedatingsuite.com

## Quick Setup (5 minutes)

### 1. Upload to GitHub

1. **Create new repository on GitHub**
   - Go to github.com
   - Click "New repository"
   - Name: `the-dating-suite`
   - Make it public or private
   - Don't initialize with README (we have one)

2. **Upload these files**
   - Upload all files from this folder to your new repository
   - Or use Git commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - The Dating Suite landing page"
   git remote add origin https://github.com/yourusername/the-dating-suite.git
   git push -u origin main
   ```

### 2. Deploy to Vercel

1. **Import to Vercel**
   - Go to vercel.com
   - Click "New Project"
   - Import from GitHub
   - Select your `the-dating-suite` repository
   - Click "Deploy" (no configuration needed)

2. **Wait for deployment**
   - Vercel will automatically build and deploy
   - You'll get a URL like: `the-dating-suite-xyz.vercel.app`

### 3. Add Custom Domain

1. **In Vercel project dashboard**
   - Go to Settings → Domains
   - Add `thedatingsuite.com`
   - Add `www.thedatingsuite.com`

2. **Vercel will show DNS records like:**
   ```
   A Record:
   Name: @
   Value: 76.76.19.61

   CNAME Record:
   Name: www
   Value: cname.vercel-dns.com
   ```

### 4. Update GoDaddy DNS

1. **Login to GoDaddy**
   - Go to your domain management
   - Find DNS settings for thedatingsuite.com

2. **Add these records:**
   - **A Record**: Name `@`, Value `76.76.19.61` (use Vercel's IP)
   - **CNAME Record**: Name `www`, Value `cname.vercel-dns.com`

3. **Remove any conflicting records**
   - Delete any existing A or CNAME records for @ and www

### 5. Wait & Verify

- **DNS propagation**: 5-30 minutes
- **Check**: Visit https://thedatingsuite.com
- **SSL**: Automatic (green lock icon)

## Troubleshooting

### Domain not working?
- Check DNS propagation: `dig thedatingsuite.com`
- Verify records in GoDaddy match Vercel exactly
- Wait longer (can take up to 48 hours)

### Build failing?
- Check Vercel build logs
- Ensure all dependencies are in package.json
- Try local build: `npm run build`

### SSL issues?
- Vercel handles SSL automatically
- May take a few minutes after domain setup

## Success Checklist

- [ ] Repository on GitHub ✅
- [ ] Deployed to Vercel ✅
- [ ] Custom domain added ✅
- [ ] DNS records updated ✅
- [ ] https://thedatingsuite.com loads ✅
- [ ] Mobile responsive ✅
- [ ] Waitlist CTA working ✅

## Next Steps

Once live:
1. **Test thoroughly** on different devices
2. **Share with friends** for feedback
3. **Monitor analytics** in Vercel dashboard
4. **Update content** by pushing to GitHub (auto-deploys)

---

**Need help?** Check the main README.md for detailed instructions.

