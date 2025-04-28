# NCM Business Portfolio

![NCM Business Portfolio](https://i.imgur.com/MOfVGGV.png)

A modern business portfolio application built with Next.js 14, Clerk Authentication, TailwindCSS, and shadcn/ui components.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with glassmorphism effects
- **Authentication**: Secure user authentication powered by Clerk
- **Dashboard Analytics**: Interactive charts and visualization
- **Project Management**: Create and manage project portfolios
- **Theme Support**: Dark/Light mode toggle
- **Mobile-First Design**: Fully responsive interface for all devices

## 🧰 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Authentication**: [Clerk](https://clerk.dev/) 
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Charts**: Recharts-based custom components
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Google Outfit font
- **Database**: Supabase (PostgreSQL)

## 📦 Installation

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Git

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/ncm-business-portfolio.git
cd ncm-business-portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory with the following variables:

```
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Supabase (if using)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📋 Key Pages

- **Dashboard** (`/dashboard`): Main overview with statistics and project summaries
- **Projects** (`/projects`): Project listing and management
- **Analytics** (`/analytics`): Detailed analytics with interactive charts
- **Settings** (`/settings`): User profile and application settings

## 🌟 Custom Components

The application features several custom components:

- **Charts**: Area, Bar, Line and Pie charts with responsive design
- **Header**: Responsive navigation with mobile drawer
- **Theme Toggle**: Light/Dark mode switcher
- **Cards**: Beautiful glassmorphism-style cards for content display

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:

- Responsive navigation (collapsible sidebar on mobile)
- Fluid layouts that adapt to any screen size
- Optimized content display for different devices

## 🧩 Project Structure

```
ncm-business-portfolio/
├── public/              # Static assets
├── src/
│   ├── app/             # App router pages
│   │   ├── dashboard/   # Dashboard page
│   │   ├── projects/    # Projects page
│   │   ├── analytics/   # Analytics page
│   │   ├── settings/    # Settings page
│   │   └── ...
│   ├── components/      # Reusable components
│   │   ├── charts/      # Chart components
│   │   ├── ui/          # shadcn/ui components
│   │   └── ...
│   └── lib/             # Utility functions and shared logic
├── next.config.ts       # Next.js configuration
├── tailwind.config.js   # TailwindCSS configuration
└── ...
```

## 🚀 Deployment

This application can be easily deployed on:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)

## 🔒 Authentication Flow

The authentication is handled by Clerk and includes:

- Sign up/Sign in pages
- Protected routes
- User profile management
- Authentication middleware

## 🧪 Extending the Project

To add new features to the project:

1. For new pages, create folders in the `src/app` directory
2. For new components, add them to the `src/components` directory
3. For database integrations, use Supabase client in server components

## 🌈 Customization

Customize the look and feel of the application:

- Edit `tailwind.config.js` to change theme colors
- Modify `src/app/layout.tsx` to update global layout
- Update fonts and styles in the theme configuration

## 👤 About the Developer

Created with 💜 by [Yuval Avidani](https://linktr.ee/yuvai), AI Builder & Speaker

- X: [@yuvalav](https://x.com/yuvalav)
- Instagram: [@yuval_770](https://instagram.com/yuval_770)
- Blog: [https://yuv.ai](https://yuv.ai)

> "Fly High With YUV.AI"

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
