"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  CalendarPlus2,
  ClipboardList,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  LogOut,
  Map,
  Menu,
  MessageCircleQuestionMark,
  Pickaxe,
  PieChart,
  Settings,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Complaints",
      url: "/dashboard/complaints",
      icon: ClipboardList,
    },
    {
      title: "Progress",
      url: "/dashboard/progress",
      icon: Pickaxe,
    },
    {
      title: "Events",
      url: "/dashboard/events",
      icon: CalendarPlus2,
    },
  ],
  projects: [
    {
      name: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
    {
      name: "Help",
      url: "/",
      icon: MessageCircleQuestionMark,
    },
    {
      name: "Signout",
      url: "/auth/logout",
      icon: LogOut,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state,toggleSidebar } = useSidebar()
  return (
    <Sidebar collapsible="icon" {...props} >
      <SidebarHeader className="flex flex-row  justify-between items-center w-full">
        <Image src={'/logo.png'} alt="logo" width={100} height={100} className={`w-[50%] ${state == "expanded" ? "block" : "hidden"}`}/>
        <Menu size={18} onClick={() => toggleSidebar()} className="ml-2 cursor-pointer"/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
