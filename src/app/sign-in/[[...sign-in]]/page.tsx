import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/header';

export default function SignInPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center px-4">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-yellow-100 dark:from-purple-950 dark:via-gray-900 dark:to-yellow-950 -z-20"></div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-purple-400/30 dark:bg-purple-700/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-yellow-400/20 dark:bg-yellow-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-500/20 dark:bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] bg-purple-300/30 dark:bg-purple-800/15 rounded-full blur-3xl -z-10"></div>
      
      <Header />
      
      <div className="w-full max-w-md z-10 pt-24 flex-1 flex flex-col justify-center">
        <div className="text-center mb-8">
          <div className="inline-flex flex-col items-center gap-2 mb-6">
            <span className="h-14 w-14 flex items-center justify-center rounded-full bg-purple-600 text-white font-bold text-2xl shadow-lg">Y</span>
            <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-yellow-400">
              YUV.AI
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Sign in to your account to continue</p>
        </div>
        
        <div className="backdrop-blur-2xl bg-white/40 dark:bg-gray-900/40 border border-white/50 dark:border-purple-900/30 shadow-2xl rounded-2xl overflow-hidden">
          <div className="p-1">
            <SignIn 
              redirectUrl="/dashboard"
              appearance={{
                elements: {
                  rootBox: "mx-auto",
                  card: "bg-transparent shadow-none",
                  headerTitle: "text-xl font-semibold text-gray-900 dark:text-white",
                  headerSubtitle: "text-sm text-gray-600 dark:text-gray-300",
                  socialButtonsBlockButton: "border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 hover:bg-purple-50 dark:hover:bg-purple-900/30",
                  socialButtonsBlockButtonText: "text-gray-700 dark:text-gray-300 font-medium",
                  formFieldLabel: "text-gray-700 dark:text-gray-300",
                  formFieldInput: "rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600",
                  formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
                  footerActionLink: "text-purple-600 hover:text-purple-700",
                  identityPreviewText: "text-gray-600 dark:text-gray-300",
                  identityPreviewEditButton: "text-purple-600 hover:text-purple-700",
                }
              }}
            />
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <Link href="/sign-up" className="font-medium text-purple-600 hover:text-purple-700">
              Sign up <ArrowRight className="inline h-3 w-3" />
            </Link>
          </p>
        </div>
        
        {/* Enhanced animated decorative elements */}
        <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-full bg-purple-500/70 flex items-center justify-center text-white shadow-lg animate-bounce hidden sm:flex">
          <span className="h-6 w-6 rounded-full bg-purple-600"></span>
        </div>
        <div className="absolute top-1/2 -left-6 h-10 w-10 rounded-full bg-yellow-400/60 animate-pulse hidden sm:block"></div>
      </div>
    </div>
  );
}
