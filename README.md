# NCM Business Portfolio

![NCM Business Portfolio](https://i.imgur.com/uZshILa.png)
![NCM Business Portfolio - Dashboard](https://i.imgur.com/QKlIlvQ.png)
![NCM Business Portfolio - Dashboard Bright](https://i.imgur.com/F8RVRH9.png)

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
- **Database**: [MongoDB Atlas](https://www.mongodb.com/atlas/database)

## 📦 Installation

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Git
- MongoDB Atlas account
- Clerk account

### Recommended Development Tools

For the best development experience, we recommend using one of these AI-powered tools:

- [Cursor](https://cursor.sh/) - AI-powered code editor
- [GitHub Copilot](https://github.com/features/copilot) - AI pair programmer
- [Windsurf](https://www.phind.com/blog/code-editor) - AI coding assistant

These tools will help you understand and modify the codebase more efficiently.

### Step-by-Step Setup Instructions

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

3. **Set up Clerk Authentication**

   a. Create a [Clerk account](https://clerk.dev/sign-up) if you don't have one
   
   b. Create a new application:
      - Go to the Clerk Dashboard and click "Add Application"
      - Enter a name for your application
      - Select "Next.js" as the framework
   
   c. Configure your application:
      - In the Clerk Dashboard, go to your application
      - Go to "API Keys" in the sidebar
      - You'll find your "Publishable Key" and "Secret Key"
      - Copy these keys for your environment variables
   
   d. Configure sign-in options (optional):
      - In the Clerk Dashboard, go to "Authentication" → "Social Connections"
      - Enable the social login providers you want to support (e.g., Google, GitHub)
      - Follow the instructions to set up each provider
   
   e. Set up redirect URLs:
      - In "Authentication" → "Redirects", set the following:
        - Sign-in: `/sign-in`
        - Sign-up: `/sign-up`
        - After sign-in: `/dashboard`
        - After sign-up: `/dashboard`

4. **Set up MongoDB Atlas**

   a. Create a [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas/register) if you don't have one
   
   b. Create a new project and cluster (the free tier works perfectly)
   
   c. Set up database access:
      - Create a database user with password authentication
      - Remember to save these credentials securely
   
   d. Set up network access:
      - Add your current IP address to the IP Access List
      - For development, you can allow access from anywhere (0.0.0.0/0)
   
   e. Get your connection string:
      - Go to your cluster and click "Connect"
      - Select "Connect your application"
      - Copy the connection string (it will look like: `mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`)
      - Replace `<password>` with your database user's password

5. **Set up environment variables**

Create a `.env.local` file in the root directory with the following variables:

```
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# MongoDB Atlas
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB_NAME=your_database_name
```

6. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

7. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

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
│   ├── lib/             # Utility functions and shared logic
│   └── models/          # MongoDB schema models
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

### Understanding Clerk Authentication

Once set up, Clerk provides:

1. **Pre-built components**: `<SignIn />`, `<SignUp />`, `<UserProfile />`, etc.
2. **Auth hooks**: `useAuth()`, `useUser()`, etc. for accessing user data
3. **Middleware**: Protects routes based on authentication status
4. **Server-side helpers**: For accessing user data in server components

Example of protecting a route:
```jsx
// In your route component
import { auth } from "@clerk/nextjs";

export default function ProtectedPage() {
  const { userId } = auth();
  
  if (!userId) {
    // Handle unauthenticated state
    redirect("/sign-in");
  }
  
  // Render content for authenticated users
}
```

## 🧪 Extending the Project

To add new features to the project:

1. For new pages, create folders in the `src/app` directory
2. For new components, add them to the `src/components` directory
3. For database integrations, set up MongoDB models in the `src/models` directory

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
