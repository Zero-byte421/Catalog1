# Portal Aplikasi Internal TelkomInfra

Portal landing page untuk aplikasi-aplikasi internal TelkomInfra yang dibangun dengan Next.js, TypeScript, dan Tailwind CSS dengan design full-width showcase untuk setiap aplikasi.

## 🚀 Fitur

- **Full-Width Showcase Design**: Setiap aplikasi ditampilkan dalam full-width section dengan background color tersendiri
- **Alternating Layout**: Layout bergantian (text kiri-mockup kanan, lalu sebaliknya) untuk visual yang dinamis
- **Background Patterns**: Pattern unik untuk setiap aplikasi (dots, circuit, grid)
- **Application Icons Grid**: Setiap aplikasi menampilkan fitur-fitur utamanya dengan icon circles
- **Smooth Animations**: Menggunakan Framer Motion untuk transisi dan interaksi yang halus
- **Fully Responsive**: Optimal untuk desktop, tablet, dan mobile
- **Direct Links**: Akses langsung ke semua aplikasi internal

## 📱 Aplikasi yang Tersedia

### 1. E-BAST e-Materai
- **Background**: Red gradient (#8B1538)
- **URL**: https://prima.telkominfra.com
- **Features**: BAST Digital, e-Materai, Document Management, Approval Flow
- **Description**: Sistem digital untuk pengelolaan Berita Acara Serah Terima (BAST) dan e-Materai

### 2. Dashboard Dismantle Radio IP
- **Background**: Red gradient (#991B1B)
- **URL**: https://amara.telkominfra.com/
- **Features**: Real-time Monitoring, Inventory Management, Progress Tracking, Reports & Analytics
- **Description**: Dashboard monitoring dan manajemen untuk proses dismantle radio IP

### 3. KEPO
- **Background**: Teal gradient (#0D9488)
- **URL**: https://kepo.telkominfra.com/login
- **Features**: Knowledge Base, Collaboration, Best Practices, Operations Hub
- **Description**: Knowledge & Engagement Portal for Operations

### 4. MyTelkominfra (Coming Soon)
- **Background**: Blue gradient (#1E40AF)
- **URL**: Coming soon
- **Features**: Employee Profile, Payroll & Benefits, Leave Management, HR Services
- **Description**: Portal karyawan terpusat untuk akses informasi personal, benefit, payroll

### 5. Presensi (Coming Soon)
- **Background**: Indigo gradient (#4338CA)
- **URL**: Coming soon
- **Features**: Mobile Check-in, Attendance History, Leave Request, Overtime Tracking
- **Description**: Sistem presensi digital dengan teknologi mobile

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Poppins (headings) & Inter (body)

## 📦 Installation & Setup

### Prerequisites
- Node.js 20 atau lebih tinggi
- npm atau yarn

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Server akan berjalan di `http://localhost:5000`

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 🎨 Design System

### Color Palette
- **E-BAST e-Materai**: `#8B1538` (Deep Red)
- **Dashboard Dismantle**: `#991B1B` (Red)
- **KEPO**: `#0D9488` (Teal)
- **MyTelkominfra**: `#1E40AF` (Blue)
- **Presensi**: `#4338CA` (Indigo)
- **Primary Blue**: `#0B63D1`
- **Background**: `#F7F9FB`

### Typography
- **Headings**: Poppins (Bold)
- **Body**: Inter (Regular)
- **Sizes**: Responsive scaling dari mobile ke desktop

### Layout Patterns
- **Full-width sections** untuk setiap aplikasi
- **Alternating layouts**: Text kiri → Text kanan → Text kiri
- **Background patterns**: Dots, Circuit, Grid (opacity 10%)
- **Browser mockup** dengan realistic chrome untuk preview

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout dengan fonts dan metadata
│   ├── page.tsx            # Landing page utama
│   └── globals.css         # Global styles dan Tailwind config
├── components/
│   ├── Header.tsx          # Navbar dengan hamburger menu
│   ├── Hero.tsx            # Hero section dengan gradient
│   ├── Features.tsx        # Features grid (4 cards)
│   ├── ApplicationList.tsx # Application showcase container
│   ├── AppShowcase.tsx     # Full-width app showcase component (NEW)
│   ├── AppCard.tsx         # Individual app card (legacy)
│   └── Footer.tsx          # Footer dengan links
├── data/
│   └── apps.json           # Data aplikasi dengan features
├── types/
│   └── index.ts            # TypeScript type definitions
├── public/                 # Static assets
├── next.config.mjs         # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🔧 Customization

### Menambah/Update Aplikasi

Edit file `data/apps.json`:

```json
{
  "id": "app-id",
  "name": "Nama Aplikasi",
  "tagline": "One app to simplify your life",
  "description": "Deskripsi lengkap aplikasi...",
  "url": "https://app-url.telkominfra.com",
  "icon": "IconName",
  "color": "from-blue-600 to-blue-800",
  "bgColor": "#1E40AF",
  "bgPattern": "dots",
  "features": [
    { "name": "Feature 1", "icon": "IconName" },
    { "name": "Feature 2", "icon": "IconName" }
  ],
  "comingSoon": false
}
```

### Update URLs untuk MyTelkominfra & Presensi

Ketika URLs sudah tersedia:
1. Ganti `"url": "#coming-soon"` dengan URL sebenarnya
2. Set `"comingSoon": false`
3. Update feature icons jika diperlukan

### Mengubah Background Pattern

Pilihan pattern:
- `"dots"`: Radial gradient dots pattern
- `"circuit"`: Circuit board pattern
- `"grid"`: Grid lines pattern

### Integrasi SSO

Untuk mengintegrasikan dengan Identity Provider (IdP) TelkomInfra:
1. Install library autentikasi yang sesuai (mis: NextAuth.js, Auth0)
2. Setup environment variables untuk IdP credentials
3. Implementasi callback handlers di `app/api/auth/`
4. Update button "Buka Aplikasi" untuk redirect ke IdP

## 🌐 Deployment

Portal ini siap untuk di-deploy ke:
- Vercel (recommended untuk Next.js)
- Netlify
- Platform hosting lainnya yang support Next.js

Untuk deploy di Replit, klik tombol **Deploy** di interface Replit.

## 📝 Design Features

### Full-Width Showcase
- Setiap aplikasi mendapat full-width section dengan background color unique
- Browser mockup yang realistic dengan chrome bar
- Responsive layout dengan alternating text/mockup positions

### Application Icons
- 4 feature icons per aplikasi dalam circular containers
- Icon mapping dari Lucide React
- Tooltips dengan nama fitur

### Animations
- Fade-in + slide animations saat scroll into view
- Hover effects pada buttons
- Smooth transitions antar sections
- GPU-accelerated dengan Framer Motion

## 👨‍💻 Development

### Code Style
- TypeScript strict mode enabled
- ESLint untuk code quality
- Component-based architecture
- Reusable patterns

### Performance
- Next.js Image optimization
- Component lazy loading
- Code splitting per route
- Optimized animations

## 📄 License

Internal use only - TelkomInfra

---

© 2025 TelkomInfra. All rights reserved.
