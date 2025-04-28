import { auth, currentUser } from "@clerk/nextjs/server";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChartComponent } from "@/components/charts/area-chart";
import { BarChartComponent } from "@/components/charts/bar-chart";
import { LineChartComponent } from "@/components/charts/line-chart";
import { PieChartComponent } from "@/components/charts/pie-chart";
import { ArrowUpRight, BadgePlus, Download, BarChart2, BarChart, Calendar, ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample data for charts
const visitorData = [
  { name: "Jan", value: 2500, previousValue: 2200 },
  { name: "Feb", value: 3000, previousValue: 2800 },
  { name: "Mar", value: 2800, previousValue: 2600 },
  { name: "Apr", value: 3200, previousValue: 2900 },
  { name: "May", value: 3800, previousValue: 3200 },
  { name: "Jun", value: 4200, previousValue: 3500 },
];

const revenueData = [
  { name: "Jan", value: 12500, previousValue: 10200 },
  { name: "Feb", value: 14000, previousValue: 12800 },
  { name: "Mar", value: 15800, previousValue: 14600 },
  { name: "Apr", value: 18200, previousValue: 16900 },
  { name: "May", value: 21800, previousValue: 19200 },
  { name: "Jun", value: 25200, previousValue: 22500 },
];

const projectData = [
  { name: "Web App", value: 35 },
  { name: "Mobile App", value: 25 },
  { name: "Landing Page", value: 20 },
  { name: "Dashboard", value: 15 },
  { name: "Others", value: 5 },
];

const deviceData = [
  { name: "Jan", desktop: 1500, mobile: 900, tablet: 500 },
  { name: "Feb", desktop: 2000, mobile: 1200, tablet: 600 },
  { name: "Mar", desktop: 1800, mobile: 1400, tablet: 550 },
  { name: "Apr", desktop: 2400, mobile: 1800, tablet: 700 },
  { name: "May", desktop: 2800, mobile: 2100, tablet: 900 },
  { name: "Jun", desktop: 3200, mobile: 2400, tablet: 1100 },
];

const deviceCategories = [
  { name: "Desktop", key: "desktop", color: "#d8b4fe", darkColor: "#c084fc" },
  { name: "Mobile", key: "mobile", color: "#fef9c3", darkColor: "#fef08a" },
  { name: "Tablet", key: "tablet", color: "#bfdbfe", darkColor: "#93c5fd" },
];

const trafficData = [
  { name: "Jan", visitors: 2500, conversions: 150, bounces: 1800 },
  { name: "Feb", visitors: 3000, conversions: 210, bounces: 2100 },
  { name: "Mar", visitors: 2800, conversions: 180, bounces: 2000 },
  { name: "Apr", visitors: 3200, conversions: 240, bounces: 2300 },
  { name: "May", visitors: 3800, conversions: 320, bounces: 2500 },
  { name: "Jun", visitors: 4200, conversions: 380, bounces: 2700 },
];

const trafficSeries = [
  { name: "Visitors", key: "visitors", color: "#d8b4fe", darkColor: "#c084fc" },
  { name: "Conversions", key: "conversions", color: "#bbf7d0", darkColor: "#86efac" },
  { name: "Bounces", key: "bounces", color: "#fda4af", darkColor: "#fb7185" },
];

export default async function AnalyticsPage() {
  const session = await auth();
  const user = await currentUser();
  const userName = user?.firstName || user?.username || "User";

  return (
    <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive insights and performance metrics
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Last 30 Days
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <div className="h-4 w-4 text-purple-600">
              <BadgePlus className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,548</div>
            <p className="text-xs flex items-center text-green-500">
              <ArrowUp className="mr-1 h-3 w-3" />
              12.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <div className="h-4 w-4 text-yellow-500">
              <BarChart className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$25,432</div>
            <p className="text-xs flex items-center text-green-500">
              <ArrowUp className="mr-1 h-3 w-3" />
              8.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <div className="h-4 w-4 text-emerald-500">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.6%</div>
            <p className="text-xs flex items-center text-green-500">
              <ArrowUp className="mr-1 h-3 w-3" />
              1.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session Duration</CardTitle>
            <div className="h-4 w-4 text-blue-500">
              <BarChart2 className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2m 45s</div>
            <p className="text-xs flex items-center text-red-500">
              <ArrowDown className="mr-1 h-3 w-3" />
              0.5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Period selector tabs */}
      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="mb-6 bg-white/10 dark:bg-black/10 backdrop-blur-sm">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
        </TabsList>
        
        <TabsContent value="monthly" className="space-y-6">
          {/* Main Charts */}
          <div className="grid gap-6 md:grid-cols-2">
            <AreaChartComponent 
              title="Monthly Visitors"
              description="Showing website traffic over the last 6 months"
              data={visitorData}
            />
            <LineChartComponent
              title="Traffic Analytics"
              description="Website performance metrics"
              data={trafficData}
              series={trafficSeries}
            />
            <BarChartComponent
              title="Device Usage"
              description="Monthly device usage distribution"
              data={deviceData}
              categories={deviceCategories}
            />
            <PieChartComponent 
              title="Project Distribution"
              description="Current project type allocation"
              data={projectData}
              donut={true}
              totalText="100"
            />
          </div>
          
          {/* Revenue chart (full width) */}
          <Card className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border-white/10">
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>
                Total monthly revenue with year-over-year comparison
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <AreaChartComponent 
                  title=""
                  description=""
                  data={revenueData}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="daily" className="space-y-6">
          <Card className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border-white/10">
            <CardHeader>
              <CardTitle>Daily Analytics</CardTitle>
              <CardDescription>Select a different period to view data</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">Daily analytics data will appear here</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="weekly" className="space-y-6">
          <Card className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border-white/10">
            <CardHeader>
              <CardTitle>Weekly Analytics</CardTitle>
              <CardDescription>Select a different period to view data</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">Weekly analytics data will appear here</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="yearly" className="space-y-6">
          <Card className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border-white/10">
            <CardHeader>
              <CardTitle>Yearly Analytics</CardTitle>
              <CardDescription>Select a different period to view data</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">Yearly analytics data will appear here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 