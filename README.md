# The Dating Suite - Landing Page

A modern, responsive landing page for The Dating Suite - a dating app and community that cares.

## 🚀 Features

- **Modern React + Vite** - Fast development and build times
- **Responsive Design** - Optimized for mobile and desktop
- **AI Coaches Concept** - Unique positioning in the dating market
- **Professional Branding** - Clean, trustworthy design
- **Conversion Optimized** - Strategic flow for user engagement

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations

## 📦 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd the-dating-suite
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🌐 Deployment to Vercel with Custom Domain

### Step 1: Deploy to Vercel

1. **Push to GitHub** (this repository)

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub
   - Select this repository
   - Click "Deploy"

### Step 2: Add Custom Domain

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add `thedatingsuite.com`

2. **Vercel will provide DNS records like:**
   ```
   Type: A
   Name: @
   Value: 76.76.19.61

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Step 3: Update DNS in GoDaddy

1. **Login to GoDaddy**
   - Go to your domain management
   - Find "DNS Management" for thedatingsuite.com

2. **Add/Update Records**
   - **A Record**: `@` → `76.76.19.61` (use the IP Vercel provides)
   - **CNAME Record**: `www` → `cname.vercel-dns.com`

3. **Wait for Propagation**
   - Usually takes 5-30 minutes
   - Check with: `dig thedatingsuite.com`

### Step 4: Verify SSL

- Vercel automatically provides SSL certificates
- Your site will be available at `https://thedatingsuite.com`

## 📁 Project Structure

```
the-dating-suite/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── public/
│   └── images/          # Static images
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md           # This file
```

## 🎯 Key Components

- **Landing Page** - Main marketing page with hero, features, and CTA
- **AI Coaches Section** - Unique selling proposition
- **MicroDates & Micro Lounge** - Feature highlights
- **Founders Section** - Trust building with Stephen & Hayley
- **FAQ Section** - Address common concerns

## 🔧 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🌟 Customization

### Updating Content
- Main content is in `src/App.jsx`
- Images are in `public/images/`
- Styles use Tailwind CSS classes

### Color Scheme
The site uses a carefully chosen color palette:
- Primary: `#D158A5` (Pink)
- Secondary: `#D8B4E2` (Light Purple)
- Accent: `#7ED6A7` (Green)
- Highlight: `#F76C5E` (Coral)

### Fonts
- Headlines: DM Serif Display
- Body: Inter

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Mobile Optimized**: Responsive design
- **Fast Loading**: Optimized images and code splitting
- **SEO Ready**: Proper meta tags and structure

## 🚀 Going Live Checklist

- [ ] Repository pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Custom domain added in Vercel
- [ ] DNS records updated in GoDaddy
- [ ] SSL certificate verified
- [ ] Site tested on mobile and desktop
- [ ] All links working (especially waitlist CTA)

## 📞 Support

For questions about the code or deployment:
- Check Vercel documentation
- Review this README
- Test locally first with `npm run dev`

---

**Built with ❤️ for The Dating Suite**
*A dating community that actually cares*

