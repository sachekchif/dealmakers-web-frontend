import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BugIcon } from "lucide-react";

interface Notification {
  id: string;
  content: string;
  time: string;
  icon: React.ReactNode;
}

export default function NotificationsPanel() {
  const notifications: Notification[] = [
    {
      id: "1",
      content: "You have a bug that needs fixing",
      time: "Just now",
      icon: <BugIcon className="h-4 w-4" />,
    },
    {
      id: "2",
      content: "New user registered",
      time: "59 minutes ago",
      icon: (
        <Avatar className="h-5 w-5">
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      ),
    },
    {
      id: "3",
      content: "You have a bug that needs fixing",
      time: "12 hours ago",
      icon: <BugIcon className="h-4 w-4" />,
    },
    {
      id: "4",
      content: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
      icon: (
        <Avatar className="h-5 w-5">
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
      ),
    },
  ];

  return (
    <Card className="shadow-none border-0">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Notifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start gap-3">
            <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
              {notification.icon}
            </div>
            <div>
              <p className="text-sm">{notification.content}</p>
              <p className="text-xs text-muted-foreground">
                {notification.time}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
