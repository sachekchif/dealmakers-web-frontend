import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import NotificationsPanel from "./dashboard/notifications-panel";
import ActivitiesPanel from "./dashboard/activities-panel";
import ContactsPanel from "./dashboard/contacts-panel";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  calendars: [
    {
      name: "My Calendars",
      items: ["Personal", "Work", "Family"],
    },
    {
      name: "Favorites",
      items: ["Holidays", "Birthdays"],
    },
    {
      name: "Other",
      items: ["Travel", "Reminders", "Deadlines"],
    },
  ],
};

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden lg:flex top-0 h-svh border-l bg-background min-w-[16rem]"
      {...props}
    >
      <SidebarContent className="">
        <SidebarSeparator className="mx-0" />
        <NotificationsPanel />
        <ActivitiesPanel />
        <ContactsPanel />
      </SidebarContent>
    </Sidebar>
  );
}
