import { Folder, Clock, Users, Check, Filter, Plus } from "lucide-react";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function ProjectsPage() {
  const session = await auth();
  const user = await currentUser();
  const userName = user?.firstName || user?.username || "User";

  const projects = [
    {
      id: 1,
      name: "AI Content Generator",
      description: "A tool to generate various types of content using AI",
      status: "In Progress",
      progress: 65,
      members: 4,
      updated: "2 hours ago",
      image: "https://picsum.photos/id/1/200"
    },
    {
      id: 2,
      name: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex data sets",
      status: "Completed",
      progress: 100,
      members: 3,
      updated: "1 day ago",
      image: "https://picsum.photos/id/2/200"
    },
    {
      id: 3,
      name: "E-commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      status: "In Progress",
      progress: 40,
      members: 5,
      updated: "Just now",
      image: "https://picsum.photos/id/3/200"
    },
    {
      id: 4,
      name: "Mobile App Redesign",
      description: "Redesigning the UI/UX of our flagship mobile application",
      status: "Planning",
      progress: 10,
      members: 2,
      updated: "3 days ago",
      image: "https://picsum.photos/id/4/200"
    },
    {
      id: 5,
      name: "Customer Analytics Tool",
      description: "Tool for analyzing customer behavior and interactions",
      status: "In Progress",
      progress: 75,
      members: 3,
      updated: "5 hours ago",
      image: "https://picsum.photos/id/5/200"
    },
    {
      id: 6,
      name: "API Integration Service",
      description: "Service for seamless integration with third-party APIs",
      status: "Completed",
      progress: 100,
      members: 2,
      updated: "1 week ago",
      image: "https://picsum.photos/id/6/200"
    }
  ];

  return (
    <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            Manage and monitor your project portfolio
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden backdrop-blur-sm bg-white/5 dark:bg-black/5 border-white/10 hover:border-white/20 transition-all hover:shadow-md">
            <CardHeader className="pb-0">
              <div className="aspect-video w-full h-40 rounded-md mb-4 overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
              </div>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-center justify-between text-sm mb-3">
                <div className="flex items-center gap-1.5">
                  <span className={`inline-block w-2 h-2 rounded-full ${
                    project.status === "Completed" ? "bg-green-500" :
                    project.status === "In Progress" ? "bg-yellow-500" :
                    "bg-blue-500"
                  }`}></span>
                  <span>{project.status}</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{project.updated}</span>
                </div>
              </div>
              
              <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    project.status === "Completed" ? "bg-green-500" :
                    project.status === "In Progress" ? "bg-yellow-500" :
                    "bg-blue-500"
                  }`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center -space-x-2">
                  {Array.from({ length: project.members }).map((_, i) => (
                    <Avatar key={i} className="h-7 w-7 border-2 border-background">
                      <AvatarImage src={`https://picsum.photos/id/${20 + i}/30`} />
                      <AvatarFallback>U{i+1}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="text-xs">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 