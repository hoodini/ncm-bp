"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  ChevronLeft, 
  LayoutDashboard, 
  Settings, 
  Layers, 
  BarChart3,
  Users,
  FileText,
  Bell,
  Home
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "relative flex flex-col h-screen border-r transition-all duration-300 ease-in-out",
        collapsed ? "w-[70px]" : "w-[240px]",
        className
      )}
    >
      <div className="p-4 h-16 flex items-center border-b">
        {/* Empty space for consistency with header height */}
      </div>
      <div className="flex-1 overflow-auto pb-10 pt-2">
        <nav className="grid items-start px-2 gap-1">
          <NavItem
            href="/dashboard"
            icon={LayoutDashboard}
            text="Dashboard"
            collapsed={collapsed}
            active={pathname === "/dashboard"}
          />
          <NavItem
            href="/projects"
            icon={Layers}
            text="Projects"
            collapsed={collapsed}
            active={pathname === "/projects"}
          />
          <NavItem
            href="/analytics"
            icon={BarChart3}
            text="Analytics"
            collapsed={collapsed}
            active={pathname === "/analytics"}
          />
          <NavItem
            href="/team"
            icon={Users}
            text="Team"
            collapsed={collapsed}
            active={pathname === "/team"}
          />
          <NavItem
            href="/documents"
            icon={FileText}
            text="Documents"
            collapsed={collapsed}
            active={pathname === "/documents"}
          />
          <NavItem
            href="/notifications"
            icon={Bell}
            text="Notifications"
            collapsed={collapsed}
            active={pathname === "/notifications"}
          />
          <NavItem
            href="/settings"
            icon={Settings}
            text="Settings"
            collapsed={collapsed}
            active={pathname === "/settings"}
          />
        </nav>
      </div>
      
      {/* Collapse button */}
      <Button
        onClick={() => setCollapsed(!collapsed)}
        variant="ghost"
        size="icon"
        className="absolute right-[-12px] top-20 h-6 w-6 rounded-full border bg-background shadow-md"
      >
        <ChevronLeft className={cn(
          "h-3 w-3 transition-transform",
          collapsed ? "rotate-180" : "rotate-0"
        )} />
      </Button>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ComponentType<{ className?: string }>
  text: string
  active?: boolean
  collapsed?: boolean
}

function NavItem({
  href,
  icon: Icon,
  text,
  active,
  collapsed,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:text-purple-600",
        active ? "bg-purple-50 dark:bg-purple-900/20 text-purple-600 font-medium" : "text-muted-foreground"
      )}
    >
      <Icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
      {!collapsed && <span>{text}</span>}
    </Link>
  )
} 