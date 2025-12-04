"use client"

import * as React from "react"
import {
  AudioWaveform,
  HandPlatter,
  Megaphone,
  Command,
  GalleryVerticalEnd,
  Store,
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
  SidebarContext,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useEffect, useState } from "react"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/images/sampleProdImage.png",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    // {
    //   title: "Dashboard",
    //   url: "/private/dashboard",
    //   baseUrl: "/private/dashboard",
    //   icon: SquareTerminal,
    //   isActive: true,
    // },
    {
      title: "Forms",
      url: "/private/forms/list",
      baseUrl: "/private/forms",
      icon: HandPlatter,
      isActive: false,
      items: [
        {
          title: "All Forms",
          url: "/private/forms/list",
          baseUrl: "/private/forms/list",
        },
      ],
    },
    {
      title: "Applications",
      url: "/private/applications/list",
      baseUrl: "/private/applications",
      icon: Store,
      isActive: false,
      items: [
        {
          title: "All Applications",
          url: "/private/applications/list",
          baseUrl: "/private/applications/list",
        },
      ],
    },
    {
      title: "Settings",
      url: "/private/settings/user-profile",
      baseUrl: "/private/settings",
      icon: Settings,
      isActive: false,
      items: [
        {
          title: "Profile Settings",
          url: "/private/settings/user-profile",
          baseUrl: "/private/settings/user-profile",
        },
      ],
    },

  ],

}


export function ExternalUserSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [sidebarLinks, setsidebarLinks] = useState(data.navMain)

  const sideBarContext = React.useContext(SidebarContext)

  useEffect(() => {
    let updatedLinks;
    if (sideBarContext?.state === 'collapsed') {
      updatedLinks = sidebarLinks.map(link => ({
        ...link,
        isActive: true
      }))
      setsidebarLinks(updatedLinks)
    } else {
      updatedLinks = sidebarLinks.map(link => ({
        ...link,
        isActive: link.items?.length ? false : true // Set the default active link when expanded
      }))
      setsidebarLinks(updatedLinks)
    }

    return () => {

    }
  }, [sideBarContext?.state])


  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarLinks} />
        {/* <NavMain items={data.Markets} /> */}
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
