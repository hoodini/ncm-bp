import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Database, Lock, Sparkles, Code, Globe, Blocks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Header } from "@/components/header";
import { AreaChartComponent } from "@/components/charts/area-chart";
import { LineChartComponent } from "@/components/charts/line-chart";

// Sample data for charts
const areaChartData = [
  { name: "Jan", value: 1200, previousValue: 1000 },
  { name: "Feb", value: 1800, previousValue: 1400 },
  { name: "Mar", value: 2400, previousValue: 2000 },
  { name: "Apr", value: 3600, previousValue: 2800 },
  { name: "May", value: 4800, previousValue: 3600 },
  { name: "Jun", value: 5600, previousValue: 4200 },
];

const lineChartData = [
  { name: "2018", users: 1200, projects: 80, revenue: 4000 },
  { name: "2019", users: 2400, projects: 120, revenue: 6000 },
  { name: "2020", users: 4000, projects: 180, revenue: 9000 },
  { name: "2021", users: 6500, projects: 250, revenue: 12000 },
  { name: "2022", users: 9800, projects: 350, revenue: 18000 },
  { name: "2023", users: 12500, projects: 450, revenue: 24000 },
];

const lineChartSeries = [
  { name: "Users", key: "users", color: "#d8b4fe", darkColor: "#c084fc" },
  { name: "Projects", key: "projects", color: "#bbf7d0", darkColor: "#86efac" },
  { name: "Revenue", key: "revenue", color: "#a5f3fc", darkColor: "#67e8f9" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-yellow-50 dark:from-purple-950 dark:via-gray-900 dark:to-yellow-950 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-purple-300/20 dark:bg-purple-700/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-300/10 dark:bg-yellow-700/5 rounded-full blur-3xl -z-5"></div>
      <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-2xl -z-5 animate-pulse"></div>
      
      <Header />

      <main className="flex-1 container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs font-medium mb-2">
              Next.js • Clerk • MongoDB
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-yellow-400">
                NCM Boilerplate
              </span>
              <br />by Yuval Avidani
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
              The ultimate starter template combining <span className="font-semibold text-purple-600">Next.js 14</span>, 
              <span className="font-semibold text-purple-600"> Clerk</span> authentication, and 
              <span className="font-semibold text-purple-600"> MongoDB Atlas</span> for your next web project.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
              <span className="px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium">TypeScript</span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium">TailwindCSS</span>
              <span className="px-2.5 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-medium">Responsive</span>
              <span className="px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs font-medium">ShadcnUI</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mt-8">
              <Link href="/sign-up">
                <Button size="lg" className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white shadow-md">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="relative h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] backdrop-blur-lg rounded-2xl bg-white/30 dark:bg-gray-900/30 border border-white/50 dark:border-gray-700/50 flex items-center justify-center shadow-lg overflow-hidden transform rotate-3">
                <Image 
                  src="https://picsum.photos/id/180/500/500" 
                  alt="Dashboard preview"
                  fill
                  className="object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 h-[180px] w-[180px] backdrop-blur-lg rounded-2xl bg-white/30 dark:bg-gray-900/30 border border-white/50 dark:border-gray-700/50 shadow-lg overflow-hidden transform -rotate-6">
                <Image 
                  src="https://picsum.photos/id/26/300/300" 
                  alt="Feature preview"
                  fill
                  className="object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-yellow-400/30 to-transparent"></div>
              </div>
              
              {/* Floating icons */}
              <div className="absolute top-5 right-10 h-10 w-10 rounded-full bg-blue-500/80 flex items-center justify-center text-white shadow-lg z-10">
                <Code className="h-5 w-5" />
              </div>
              <div className="absolute top-1/2 -left-5 h-12 w-12 rounded-full bg-purple-600/90 flex items-center justify-center text-white shadow-lg z-10">
                <Lock className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 left-1/3 h-10 w-10 rounded-full bg-green-500/80 flex items-center justify-center text-white shadow-lg z-10">
                <Database className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-yellow-400">Beautiful Analytics</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <AreaChartComponent 
              title="Growth Over Time"
              description="User growth trends across platforms"
              data={areaChartData}
            />
            <LineChartComponent
              title="Performance Metrics"
              description="Key business metrics over the years"
              data={lineChartData}
              series={lineChartSeries}
            />
          </div>
        </div>

        <div className="mt-20 md:mt-32">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-yellow-400">Powerful Features</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="backdrop-blur-md bg-white/60 dark:bg-gray-900/40 border border-white/50 dark:border-gray-700/30 rounded-xl p-6 hover:shadow-lg transition-all group hover:scale-105">
              <div className="h-12 w-12 rounded-xl bg-purple-100/80 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Clerk Authentication</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Secure, easy-to-implement authentication with social logins, multi-factor authentication, and user management.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                  Social login providers
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                  JWT & session management
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                  User profiles & management
                </li>
              </ul>
            </div>
            <div className="backdrop-blur-md bg-white/60 dark:bg-gray-900/40 border border-white/50 dark:border-gray-700/30 rounded-xl p-6 hover:shadow-lg transition-all group hover:scale-105">
              <div className="h-12 w-12 rounded-xl bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Next.js 14</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built on the latest Next.js framework with App Router, React Server Components, and optimized performance.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></span>
                  App Router architecture
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></span>
                  Server Components & Actions
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></span>
                  Optimized for performance
                </li>
              </ul>
            </div>
            <div className="backdrop-blur-md bg-white/60 dark:bg-gray-900/40 border border-white/50 dark:border-gray-700/30 rounded-xl p-6 hover:shadow-lg transition-all group hover:scale-105">
              <div className="h-12 w-12 rounded-xl bg-green-100/80 dark:bg-green-900/30 flex items-center justify-center text-green-600 mb-5 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-xl mb-3">MongoDB Atlas</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fully integrated MongoDB Atlas database with data modeling, API routes, and server-side access patterns.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></span>
                  Mongoose ODM integration
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></span>
                  Optimized connection pooling
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></span>
                  Server-side data fetching
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-yellow-400">
                  Beautiful UI Components
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Built with ShadcnUI and TailwindCSS for stunning, accessible, and customizable interfaces that work on any device.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 mt-0.5">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Responsive layouts that work on all devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 mt-0.5">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Dark/light mode with system preference detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 mt-0.5">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Accessible components following WAI-ARIA guidelines</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg h-[200px] sm:h-[250px] relative transform hover:scale-105 transition-transform duration-500">
                <Image 
                  src="https://picsum.photos/id/119/600/600" 
                  alt="Dashboard Interface"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-medium text-lg">Dashboard</h3>
                    <p className="text-sm text-gray-200">Beautiful analytics & reporting</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[200px] sm:h-[250px] relative transform hover:scale-105 transition-transform duration-500">
                <Image 
                  src="https://picsum.photos/id/306/600/600" 
                  alt="User Profile"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-medium text-lg">Auth Screens</h3>
                    <p className="text-sm text-gray-200">Secure & intuitive authentication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 backdrop-blur-md bg-white/40 dark:bg-gray-900/30 border border-white/50 dark:border-gray-700/30 rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to build your next project?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Start building faster with this production-ready boilerplate. Save weeks of setup time and focus on what matters most - your product features.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/sign-up">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://github.com/yuvalavidan/ncm-bp" target="_blank" rel="noopener">
                  <Button variant="outline">View on GitHub</Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="h-24 w-24 rounded-xl bg-gradient-to-br from-purple-500 to-yellow-400 flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="h-10 w-10" />
                </div>
                <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center animate-pulse">
                  <span className="h-3 w-3 rounded-full bg-purple-500"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full backdrop-blur-md bg-white/70 dark:bg-gray-950/70 border-t border-purple-100 dark:border-purple-900/20 py-6 mt-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-purple-600 text-white font-bold">Y</span>
              <span className="font-bold text-xl">YUV.AI</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://linktr.ee/yuvai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                <Globe className="h-5 w-5" />
              </a>
              <a href="https://x.com/yuvalav" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://instagram.com/yuval_770" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/%F0%9F%8E%97%EF%B8%8Fyuval-avidani-87081474/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com/hoodini" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://yuv.ai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"></path>
                  <path d="M8 7h6"></path>
                  <path d="M8 11h8"></path>
                  <path d="M8 15h5"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Created with 💜 by <a href="https://linktr.ee/yuvai" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Yuval Avidani</a> - AI Builder & Speaker
            </div>
            <div className="text-sm font-medium text-yellow-500">
              "Fly High With YUV.AI"
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
