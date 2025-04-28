import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative font-outfit">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-30%] left-[-20%] w-[80%] h-[80%] rounded-full bg-purple-600/20 blur-[100px]" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[80%] h-[80%] rounded-full bg-yellow-400/20 blur-[100px]" />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>
      
      {/* Content with glass effect */}
      <div className="relative w-full max-w-md p-8 rounded-lg backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/10 shadow-lg">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-purple-600/90 text-white">
            <span className="text-5xl font-bold">404</span>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-yellow-400">
              Page Not Found
            </h1>
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button asChild className="flex-1">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link href="javascript:history.back()">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Link>
            </Button>
          </div>
          
          <div className="w-full pt-4 border-t border-border/40">
            <p className="text-sm text-center text-muted-foreground">
              "Fly High With YUV.AI"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 