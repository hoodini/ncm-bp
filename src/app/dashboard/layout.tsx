import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Toaster } from "sonner"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto px-4 py-6 md:px-6 md:py-8">
          {children}
        </main>
        <footer className="border-t py-4 px-6 text-center text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="text-xs">
              Created with 💜 by <a href="https://linktr.ee/yuvai" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Yuval Avidani</a> - AI Builder & Speaker
            </div>
            <div className="text-xs text-yellow-500 font-medium">
              "Fly High With YUV.AI"
            </div>
          </div>
        </footer>
      </div>
      <Toaster position="top-right" />
    </div>
  )
} 