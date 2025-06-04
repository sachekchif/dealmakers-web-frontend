import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Contact {
  id: string;
  name: string;
  avatar: string;
  initials: string;
}

export default function ContactsPanel() {
  const contacts: Contact[] = [
    {
      id: "1",
      name: "Natali Craig",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "NC",
    },
    {
      id: "2",
      name: "Drew Cano",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "DC",
    },
    {
      id: "3",
      name: "Orlando Diggs",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "OD",
    },
    // {
    //   id: "4",
    //   name: "Andi Lane",
    //   avatar: "/placeholder.svg?height=32&width=32",
    //   initials: "AL",
    // },
    // {
    //   id: "5",
    //   name: "Kate Morrison",
    //   avatar: "/placeholder.svg?height=32&width=32",
    //   initials: "KM",
    // },
    // {
    //   id: "6",
    //   name: "Koray Okumus",
    //   avatar: "/placeholder.svg?height=32&width=32",
    //   initials: "KO",
    // },
  ];

  return (
    <Card className="shadow-none border-0  bg-transparent py-3 gap-4">
      <CardHeader className="">
        <CardTitle className="text-lg font-medium">Contacts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={contact.avatar || "/placeholder.svg"}
                alt={contact.name}
              />
              <AvatarFallback>{contact.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{contact.name}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
