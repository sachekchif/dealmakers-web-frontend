import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BugIcon, FileEdit, Trash2 } from "lucide-react";

interface Activity {
  id: string;
  content: string;
  time: string;
  user: {
    avatar: string;
    initials: string;
  };
  icon?: React.ReactNode;
}

export default function ActivitiesPanel() {
  const activities: Activity[] = [
    {
      id: "1",
      content: "You have a bug that needs fixing",
      time: "Just now",
      user: {
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "YA",
      },
      icon: <BugIcon className="h-4 w-4" />,
    },
    {
      id: "2",
      content: "Released a new version",
      time: "59 minutes ago",
      user: {
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "RV",
      },
    },
    {
      id: "3",
      content: "Submitted a bug",
      time: "12 hours ago",
      user: {
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SB",
      },
      icon: <BugIcon className="h-4 w-4" />,
    },
    // {
    //   id: "4",
    //   content: "Modified A data in Page X",
    //   time: "Today, 11:59 AM",
    //   user: {
    //     avatar: "/placeholder.svg?height=32&width=32",
    //     initials: "MD",
    //   },
    //   icon: <FileEdit className="h-4 w-4" />,
    // },
    // {
    //   id: "5",
    //   content: "Deleted a page in Project X",
    //   time: "Feb 2, 2023",
    //   user: {
    //     avatar: "/placeholder.svg?height=32&width=32",
    //     initials: "DP",
    //   },
    //   icon: <Trash2 className="h-4 w-4" />,
    // },
  ];

  return (
    <Card className="shadow-none border-0  bg-transparent py-3 gap-4">
      <CardHeader className="">
        <CardTitle className="font-semibold">Activities</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={activity.user.avatar || "/placeholder.svg"}
                alt=""
              />
              <AvatarFallback>{activity.user.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm">{activity.content}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
