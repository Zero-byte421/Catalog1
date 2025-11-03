# Portal Aplikasi Internal TelkomInfra - Project Documentation

## Overview
Landing page modern untuk Portal Aplikasi Internal TelkomInfra dengan **full-width showcase design** untuk setiap aplikasi. Dibangun dengan Next.js 16, TypeScript, dan Tailwind CSS v4. Portal menampilkan 5 aplikasi internal dengan alternating layouts, background patterns unik, dan browser mockups yang realistic.

## Recent Changes (October 25, 2025)

### Major Design Overhaul
- ✅ **REDESIGNED**: Changed dari card grid layout menjadi full-width showcase sections
- ✅ Implementasi AppShowcase component dengan alternating layouts (text kiri/kanan bergantian)
- ✅ Background colors unik per aplikasi dengan patterns (dots, circuit, grid)
- ✅ Browser mockup dengan realistic chrome bar untuk setiap aplikasi
- ✅ Application features grid dengan 4 icon circles per aplikasi
- ✅ Updated data structure dengan features array dan expanded descriptions

### Technical Updates
- ✅ Fixed FileCheck icon import dan improved type safety (Record<string, LucideIcon>)
- ✅ Updated types/index.ts dengan AppFeature interface
- ✅ Responsive alternating layouts (stack pada mobile)
- ✅ Maintained direct links ke semua aplikasi eksternal
- ✅ Coming Soon state untuk MyTelkominfra dan Presensi

### Initial Setup (Completed Earlier)
- ✅ Next.js 16 + TypeScript + Tailwind CSS v4 setup
- ✅ Design system dengan color palette TelkomInfra
- ✅ Google Fonts (Poppins + Inter)
- ✅ Header dengan responsive navbar
- ✅ Hero section dengan gradient dan animations
- ✅ Features section "Your Everyday Companion"
- ✅ Footer dengan branding
- ✅ Framer Motion animations

## Project Architecture

### Tech Stack
- **Framework**: Next.js 16.0.0 (App Router with Turbopack)
- **Language**: TypeScript 5.9.3 (strict mode)
- **Styling**: Tailwind CSS 4.1.16 (with @tailwindcss/postcss)
- **Animations**: Framer Motion 12.23.24
- **Icons**: Lucide React 0.548.0
- **Fonts**: Google Fonts (Poppins + Inter)

### File Structure
```
workspace/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Tailwind v4 config + global styles
├── components/
│   ├── Header.tsx          # Navbar (responsive, hamburger menu)
│   ├── Hero.tsx            # Hero section (gradient, animations)
│   ├── Features.tsx        # Features grid (4 cards)
│   ├── ApplicationList.tsx # Application showcase container
│   ├── AppShowcase.tsx     # Full-width app showcase component ⭐ NEW
│   ├── AppCard.tsx         # Legacy card component (not used)
│   └── Footer.tsx          # Footer with links
├── data/
│   └── apps.json           # Application data (updated with features)
├── types/
│   └── index.ts            # TypeScript interfaces (App, AppFeature)
├── attached_assets/        # Design reference files
├── next.config.mjs         # Next.js configuration
├── tsconfig.json           # TypeScript config (strict mode)
├── postcss.config.mjs      # PostCSS with Tailwind v4
├── package.json            # Dependencies and scripts
├── README.md               # Project documentation
└── replit.md               # This file
```

### Design System

#### Application Color Schemes
Each application has unique background color and pattern:
- **E-BAST e-Materai**: `#8B1538` (Deep Red) + dots pattern
- **Dashboard Dismantle Radio IP**: `#991B1B` (Red) + dots pattern
- **KEPO**: `#0D9488` (Teal) + circuit pattern
- **MyTelkominfra**: `#1E40AF` (Blue) + grid pattern
- **Presensi**: `#4338CA` (Indigo) + grid pattern

#### Global Colors
- `--color-primary`: #0b63d1 (Primary Blue)
- `--color-primary-hover`: #084fa8
- `--color-accent`: #0fa77a
- `--color-background`: #f7f9fb
- `--color-divider`: #e5e9f0
- `--color-text-primary`: #0b1320
- `--color-text-secondary`: #546070

#### Typography
- **Headings**: Poppins (weight: 700)
- **Body**: Inter (regular)
- **Responsive scaling**: Mobile → Desktop

### Applications Data Structure

Each app in `data/apps.json` now includes:
```json
{
  "id": "unique-id",
  "name": "App Name",
  "tagline": "One app to simplify your life",
  "description": "Full description...",
  "url": "https://app.telkominfra.com",
  "icon": "IconName",
  "color": "from-color-600 to-color-800",
  "bgColor": "#HexColor",
  "bgPattern": "dots|circuit|grid",
  "features": [
    { "name": "Feature Name", "icon": "IconName" }
  ],
  "comingSoon": true|false
}
```

### Component Design Patterns

#### AppShowcase Component
- **Full-width sections** dengan background color per aplikasi
- **Alternating layouts**: 
  - Index even (0, 2, 4): Text kiri, Mockup kanan
  - Index odd (1, 3): Text kanan, Mockup kiri (reverse prop)
- **Background patterns** dengan opacity 10%
- **Browser mockup** dengan chrome bar (3 colored dots + URL bar)
- **Features grid**: 4 icons per aplikasi dalam circular containers
- **Responsive**: Stack vertically pada mobile

#### Icon Mapping
- Uses Lucide React icons
- Type-safe with `Record<string, LucideIcon>`
- Supports: FileCheck, FileText, Stamp, FolderOpen, CheckCircle, Activity, Package, TrendingUp, BarChart, BookOpen, Users, Award, Briefcase, UserCircle, DollarSign, Calendar, HeadphonesIcon, Smartphone, History, Clock

### Key Features

#### Full-Width Showcase Design
- Setiap aplikasi mendapat dedicated full-width section
- Background colors match aplikasi branding
- Pattern backgrounds (dots/circuit/grid) dengan SVG atau CSS
- Browser window mockup dengan realistic chrome
- Placeholder preview di dalam mockup

#### Alternating Layouts
- Layout bergantian untuk visual variety
- Text → Image → Text → Image pattern
- Responsive: Stack vertically pada breakpoint lg

#### Application Features
- 4 feature icons per aplikasi
- Circular icon containers dengan backdrop blur
- Icon + label layout
- Grid responsive (2 cols mobile → 4 cols desktop)

#### Animations (Framer Motion)
- Section reveal: fade-in + slide (x: -50/50 → 0)
- Viewport-triggered animations (once: true)
- Staggered delays per section
- Smooth transitions 0.8s duration

### Workflows
- **Server**: `npm run dev` on port 5000
  - Output: webview
  - Auto-restart on package changes
  - Turbopack for fast compilation

### URLs & Links
1. **E-BAST e-Materai**: https://prima.telkominfra.com ✅ Active
2. **Dashboard Dismantle Radio IP**: https://amara.telkominfra.com/ ✅ Active
3. **KEPO**: https://kepo.telkominfra.com/login ✅ Active
4. **MyTelkominfra**: #coming-soon 🔜 Placeholder
5. **Presensi**: #coming-soon 🔜 Placeholder

All active links open in new tab via `window.open(url, "_blank", "noopener,noreferrer")`

## User Preferences
- **Bahasa**: Indonesia
- **Design reference**: Full-width showcase per aplikasi (file image_1761392865360.png)
- **Layout**: Alternating text/mockup positions
- **Direct links**: External apps open in new tab (bukan modal)
- **URLs**: MyTelkominfra dan Presensi akan di-update nanti

## Development Notes

### Type Safety
- TypeScript strict mode enabled
- Proper types untuk App dan AppFeature
- Icon map typed as `Record<string, LucideIcon>`
- Type assertions untuk JSON imports

### Performance
- Next.js 16 dengan Turbopack (faster builds)
- Framer Motion animations GPU-accelerated
- Lazy loading dengan viewport intersection
- Code splitting per route

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Alternating layouts stack vertically di mobile
- Icon grids adapt: 2 cols → 4 cols
- Text sizes scale responsively

### Known Technical Details
- Tailwind v4 uses CSS-based config (bukan JS config)
- PostCSS plugin: `@tailwindcss/postcss` required
- Font optimization via next/font/google
- Background patterns via inline SVG data URIs atau CSS gradients

## Future Enhancements

### Immediate (When URLs Available)
1. Update MyTelkominfra URL di apps.json
2. Update Presensi URL di apps.json
3. Set `comingSoon: false` untuk kedua aplikasi

### SSO Integration
1. Setup NextAuth.js atau Auth0
2. Configure IdP TelkomInfra
3. Implement protected routes
4. Add SSO login buttons per aplikasi

### Additional Features
- Search functionality untuk aplikasi
- User dashboard setelah login
- Analytics tracking (Google Analytics, Mixpanel)
- Admin panel untuk manage aplikasi
- Actual screenshots untuk mockups (replace placeholders)
- Animation enhancements (parallax, scroll-triggered)

## Deployment
- Ready untuk production deployment
- Supports: Vercel, Netlify, Replit Deploy
- Build command: `npm run build`
- Start command: `npm start`
- Port: 5000 (configured for Replit)

## Architect Reviews
✅ **Initial Implementation**: Passed with recommendations (type safety, scroll offsets)
✅ **Design Overhaul**: Passed after FileCheck icon fix
✅ **Icon Mapping Fix**: Passed - type safety improved

---

**Last Updated**: October 25, 2025 - Full-width showcase design complete
**Status**: Production Ready ✅
