import { Activity, CheckCircle, Layers, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2, ArrowRight, Globe, BookOpen, Webhook, Cpu, PieChart, Users2, Rocket, Building2, CalendarClock, Award } from "lucide-react";
import Image from "next/image";
import { AreaChartComponent } from "@/components/charts/area-chart";
import { PieChartComponent } from "@/components/charts/pie-chart";
import { BarChartComponent } from "@/components/charts/bar-chart";
import { LineChartComponent } from "@/components/charts/line-chart";

// Sample data for charts
const areaChartData = [
  { name: "Jan", value: 2500, previousValue: 2200 },
  { name: "Feb", value: 3000, previousValue: 2800 },
  { name: "Mar", value: 2800, previousValue: 2600 },
  { name: "Apr", value: 3200, previousValue: 2900 },
  { name: "May", value: 3800, previousValue: 3200 },
  { name: "Jun", value: 4200, previousValue: 3500 },
];

const pieChartData = [
  { name: "Web App", value: 35 },
  { name: "Mobile App", value: 25 },
  { name: "Landing Page", value: 20 },
  { name: "Dashboard", value: 15 },
  { name: "Others", value: 5 },
];

const barChartData = [
  { name: "Jan", desktop: 1500, mobile: 900, tablet: 500 },
  { name: "Feb", desktop: 2000, mobile: 1200, tablet: 600 },
  { name: "Mar", desktop: 1800, mobile: 1400, tablet: 550 },
  { name: "Apr", desktop: 2400, mobile: 1800, tablet: 700 },
  { name: "May", desktop: 2800, mobile: 2100, tablet: 900 },
  { name: "Jun", desktop: 3200, mobile: 2400, tablet: 1100 },
];

const barChartCategories = [
  { name: "Desktop", key: "desktop", color: "#d8b4fe", darkColor: "#c084fc" },
  { name: "Mobile", key: "mobile", color: "#fef9c3", darkColor: "#fef08a" },
  { name: "Tablet", key: "tablet", color: "#bfdbfe", darkColor: "#93c5fd" },
];

const lineChartData = [
  { name: "Jan", visitors: 2500, conversions: 150, bounces: 1800 },
  { name: "Feb", visitors: 3000, conversions: 210, bounces: 2100 },
  { name: "Mar", visitors: 2800, conversions: 180, bounces: 2000 },
  { name: "Apr", visitors: 3200, conversions: 240, bounces: 2300 },
  { name: "May", visitors: 3800, conversions: 320, bounces: 2500 },
  { name: "Jun", visitors: 4200, conversions: 380, bounces: 2700 },
];

const lineChartSeries = [
  { name: "Visitors", key: "visitors", color: "#d8b4fe", darkColor: "#c084fc" },
  { name: "Conversions", key: "conversions", color: "#bbf7d0", darkColor: "#86efac" },
  { name: "Bounces", key: "bounces", color: "#fda4af", darkColor: "#fb7185" },
];

export default async function DashboardPage() {
  const session = await auth();
  const user = await currentUser();
  const userName = user?.firstName || user?.username || "User";

  return (
    <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-10">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, {userName}</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your projects today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            View Reports
          </Button>
          <Button size="sm">
            Create Project
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <Webhook className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +18.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing Time</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.82s</div>
            <p className="text-xs text-muted-foreground">
              -12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">237</div>
            <p className="text-xs text-muted-foreground">
              +42 from last hour
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <AreaChartComponent 
          title="Monthly Visitors"
          description="Showing website traffic over the last 6 months"
          data={areaChartData}
        />
        <PieChartComponent 
          title="Project Distribution"
          description="Current project type allocation"
          data={pieChartData}
          donut={true}
          totalText="100"
        />
        <BarChartComponent
          title="Device Usage"
          description="Monthly device usage distribution"
          data={barChartData}
          categories={barChartCategories}
        />
        <LineChartComponent
          title="Traffic Analytics"
          description="Website performance metrics"
          data={lineChartData}
          series={lineChartSeries}
        />
      </div>

      {/* Biography Section */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-600/10 to-yellow-400/10 pb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-900 shadow-lg">
              <AvatarImage src="https://picsum.photos/id/1005/200" alt="Yuval Avidani" />
              <AvatarFallback className="text-2xl bg-purple-600 text-white">YA</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-bold">Yuval Avidani</h2>
                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Globe className="h-3 w-3" /> 
                  <span>AI Builder & Speaker</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground max-w-2xl">
                AI Builder & Speaker | Making technical content accessible in non-technical ways
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Link href="https://linktr.ee/yuvai" target="_blank">
                  <Button variant="outline" size="sm" className="h-8">
                    Linktree
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
                <Link href="https://x.com/yuvalav" target="_blank">
                  <Button variant="outline" size="sm" className="h-8">
                    @yuvalav
                  </Button>
                </Link>
                <Link href="https://instagram.com/yuval_770" target="_blank">
                  <Button variant="outline" size="sm" className="h-8">
                    @yuval_770
                  </Button>
                </Link>
                <Link href="https://yuv.ai" target="_blank">
                  <Button variant="outline" size="sm" className="h-8">
                    yuv.ai
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-purple-600" />
                About Yuval
              </h3>
              <div className="text-sm text-muted-foreground space-y-3">
                <p>
                  Yuval Avidani is a technology expert who makes technical content accessible in the most non-technical way possible. 
                  Currently working as an independent AI Builder & Speaker, focused on sharing knowledge and insights about AI technologies.
                </p>
                <p>
                  Over the past 15 years, he has worked in a wide variety of roles across all sectors (private, public, business). 
                  His diverse experience includes positions as a mobile phone technician, technical expert, information systems implementation and training team leader, 
                  Knesset visits coordinator, SAP systems implementer, digital manager, digital marketing and advertising, spokesmanship and public relations, 
                  cybersecurity and information security, hacking, research, development, content creation, technical instructional video recording, 
                  community founder, lecturer, advisor, and innovation magazine writer.
                </p>
                <p>
                  He's passionate about learning and sharing knowledge, especially in AI technologies. In the last two years, he's been drawn deeper into the AI world, 
                  writing articles and sharing his learning process, covering new tools, the inner workings of technology, LangChain, Flowise, AI agents with Officely, 
                  bots with Uchat, API connections, integrating large language models into existing developments, DeepFakes, voice modeling, automations, and much more.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-500" />
                Experience & Education
              </h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="min-w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Building2 className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">AI Builder & Speaker</p>
                    <p className="text-muted-foreground">Independent</p>
                    <p className="text-xs text-muted-foreground">Current</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="min-w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <CalendarClock className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Multiple Technical & Leadership Roles</p>
                    <p className="text-muted-foreground">Various Organizations</p>
                    <p className="text-xs text-muted-foreground">15+ years of experience</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="min-w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Rocket className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Podcast Host & Content Creator</p>
                    <p className="text-muted-foreground">AI & Technology Focus</p>
                    <p className="text-xs text-muted-foreground">Two podcasts & educational content</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-sm">
                <p className="italic text-muted-foreground">
                  "My most important message is don't try to fit into a mold that doesn't suit you. Let yourself flourish, engage with what tempts you, 
                  what creates endless curiosity in you, even if you change fields, you will develop and accumulate a vast store of knowledge that will 
                  serve you when the time comes."
                </p>
                <p className="mt-3 font-medium text-center text-yellow-500">
                  "Fly High With YUV.AI"
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>
              You have 12 projects and 3 have activity today.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-2">
                <Webhook className="h-5 w-5 text-blue-700 dark:text-blue-400" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  AI Content Generator
                </p>
                <p className="text-xs text-muted-foreground">
                  Updated 2h ago
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="h-7 w-7">
                  <AvatarFallback className="text-xs">JD</AvatarFallback>
                </Avatar>
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 p-2">
                <Globe className="h-5 w-5 text-purple-700 dark:text-purple-400" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Translation Dashboard
                </p>
                <p className="text-xs text-muted-foreground">
                  Updated 5h ago
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="h-7 w-7">
                  <AvatarFallback className="text-xs">ML</AvatarFallback>
                </Avatar>
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-2">
                <Cpu className="h-5 w-5 text-green-700 dark:text-green-400" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Machine Learning Pipeline
                </p>
                <p className="text-xs text-muted-foreground">
                  Updated 1d ago
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="h-7 w-7">
                  <AvatarFallback className="text-xs">YA</AvatarFallback>
                </Avatar>
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" size="sm">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Latest Activity</CardTitle>
            <CardDescription>
              Recent activities from your team members.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 max-h-[250px] overflow-auto">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-start gap-4 pb-4 last:pb-0 last:border-0 border-b">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={`https://picsum.photos/id/${30 + i}/40`} alt="User" />
                  <AvatarFallback>U{i}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    User {i} added a new comment
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {i === 1 ? "Just now" : i === 2 ? "5m ago" : i === 3 ? "3h ago" : i === 4 ? "Yesterday" : "2d ago"}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" size="sm">
              View All Activity
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
} 