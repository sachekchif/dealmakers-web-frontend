import * as React from "react";
import logo from "../../../../public/images/logo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HandshakeIcon,
  Home,
  ShoppingBag,
  UserCircle,
  Coins,
} from "lucide-react";

// This is sample data.
type NavItem = {
  title: string;
  url: string;
  isActive?: boolean;
  icon?: React.ElementType; // Optional icon component type for the item
};

type NavGroup = {
  title: string;
  url: string;
  items: NavItem[];
};

const data: {
  versions: string[];
  navMain: NavGroup[];
} = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard/us",
          icon: Home,
        },
        {
          title: "Wallet Transactions",
          url: "/dashboard/us/wallet",
          icon: ShoppingBag,
        },
        {
          title: "Escrow Transactions",
          url: "/dashboard/us/transactions",
          icon: Coins,
        },
        {
          title: "Disputes",
          url: "/dashboard/us/disputes",
          icon: HandshakeIcon,
        },
        {
          title: "Profile",
          url: "/dashboard/us/profile",
          icon: UserCircle,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-start gap-2">
          {" "}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>TDM</AvatarFallback>
          </Avatar>
          <div className="w-36 h-12 relative my-0 flex ">
            <Image
              src={logo}
              alt={"logo"}
              fill
              className="object-contain"
            ></Image>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            {/* <SidebarGroupLabel>{item.title}</SidebarGroupLabel> */}
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="pl-6 hover:bg-background"
                    >
                      <a href={item.url}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
