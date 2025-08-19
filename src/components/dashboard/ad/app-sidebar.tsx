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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
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
  UserIcon,
  ShoppingCart,
  Download,
  Upload,
  PenBoxIcon,
  Settings,
  Wallet2Icon,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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
  icon?: React.ElementType; // Optional icon component type for the item

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
          url: "/dashboard/ad",
          icon: Home,
        },
        {
          title: "Users",
          url: "/dashboard/ad/users",
          icon: UserIcon,
        },
      ],
    },
    {
      title: "Wallet Transactions",
      url: "/dashboard/ad/wallet",
      icon: Wallet2Icon,

      items: [
        {
          title: "Deposits",
          url: "/dashboard/ad/wallet?transactionType=deposit",
        },
        {
          title: "Withdrawals",
          url: "/dashboard/ad/wallet?transactionType=withdrawal",
        },
      ],
    },
    {
      title: "",
      url: "#",
      items: [
        {
          title: "Escrow Transactions",
          url: "/dashboard/ad/transactions",
          icon: Coins,
        },
        {
          title: "Disputes",
          url: "/dashboard/ad/disputes",
          icon: HandshakeIcon,
        },
        {
          title: "Marketplace",
          url: "/dashboard/ad/marketplace",
          icon: ShoppingCart,
        },
        {
          title: "Categories",
          url: "/dashboard/ad/categories",
          icon: PenBoxIcon,
        },
        {
          title: "Config",
          url: "/dashboard/ad/config",
          icon: Settings,
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
        <SidebarGroup>
          {data.navMain.map((item, i) => (
            <SidebarGroupContent key={item.title + i}>
              {item.title ? (
                <SidebarMenu>
                  <Collapsible defaultOpen className="group/collapsible">
                    <SidebarMenuItem key={item.title + i + "main"}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="pl-6">
                          <span className="flex items-center gap-2">
                            {item.icon && <item.icon className="size-4" />}
                            {item.title}
                          </span>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem, j) => (
                            <SidebarMenuSubItem key={subItem.title + j}>
                              <SidebarMenuSubButton
                                asChild
                                className="pl-6 hover:bg-background"
                              >
                                <a href={subItem.url}>
                                  {subItem.icon && <subItem.icon />}
                                  <span>{subItem.title}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                </SidebarMenu>
              ) : (
                <SidebarMenu>
                  {item.items.map((subItem, j) => (
                    <SidebarMenuItem key={subItem.title + j}>
                      <SidebarMenuButton
                        asChild
                        className="pl-6 hover:bg-background"
                      >
                        <a href={subItem.url}>
                          {subItem.icon && <subItem.icon />}
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              )}
            </SidebarGroupContent>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
