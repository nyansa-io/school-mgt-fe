"use client";

import * as React from "react";
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
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarContext,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

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
    // {
    //   name: "Acme Corp.",
    //   logo: AudioWaveform,
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: Command,
    //   plan: "Free",
    // },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/private/admin/dashboard",
      baseUrl: "/private/admin/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Applications",
      url: "/private/admin/applications/year-applications",
      baseUrl: "/private/admin/applications",
      icon: HandPlatter,
      isActive: false,
      // items: [
      //   {
      //     title: "Year Application",
      //     url: "/private/admin/applications/year-applications",
      //     baseUrl: "/private/admin/applications/year-applications",
      //   },
      //   {
      //     title: "Application Overview",
      //     url: "/private/admin/applications/overview",
      //     baseUrl: "/private/admin/applications/overview",
      //   },
      //   {
      //     title: "Application List",
      //     url: "/private/admin/applications/list",
      //     baseUrl: "/private/admin/applications/list",
      //   },
      //   {
      //     title: "Application Events",
      //     url: "/private/admin/applications/events",
      //     baseUrl: "/private/admin/applications/events",
      //   },
      // ],
    },
    {
      title: "Settings",
      url: "/private/admin/settings",
      baseUrl: "/private/admin/settings",
      icon: Settings,
      isActive: false,
      items: [
        {
          title: "Profile Settings",
          url: "/private/admin/settings/user-profile",
          baseUrl: "/private/admin/settings/user-profile",
        },
        {
          title: "Academics Setup",
          url: "/private/admin/settings/academics-setup/academic-years",
          baseUrl: "/private/admin/settings/academics-setup",
        },
        {
          title: "User Management",
          url: "/private/admin/settings/user-management",
          baseUrl: "/private/admin/settings/user-management",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [sidebarLinks, setsidebarLinks] = useState(data.navMain);

  const sideBarContext = React.useContext(SidebarContext);

  useEffect(() => {
    let updatedLinks;
    if (sideBarContext?.state === "collapsed") {
      updatedLinks = sidebarLinks.map((link) => ({
        ...link,
        isActive: true,
      }));
      setsidebarLinks(updatedLinks);
    } else {
      updatedLinks = sidebarLinks.map((link) => ({
        ...link,
        isActive: link.items?.length ? false : true, // Set the default active link when expanded
      }));
      setsidebarLinks(updatedLinks);
    }

    return () => {};
  }, [sideBarContext?.state]);

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
  );
}
