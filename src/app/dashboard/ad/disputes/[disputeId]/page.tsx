import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

// Updated interface to match the dispute structure
interface DisputeDetails {
  id: string;
  transactionId: string;
  dateTime: string;
  disputeReason: string;
  description: string;
  status: "Completed" | "Pending" | "In Progress" | "Failed";
  preferredResolution: string;
  transaction: {
    escrowNumber: string;
    type: string;
    amount: string;
    marketplace: {
      id: string;
      name: string;
      rating: number;
      logo?: string;
      website?: string;
      status: "enabled" | "disabled";
    };
  };
  buyer: {
    name: string;
    username: string;
    userId: string;
    bankAccountName: string;
    avatar?: string;
    email: string;
  };
  seller: {
    name: string;
    username: string;
    userId: string;
    bankAccountName: string;
    avatar?: string;
    email: string;
  };
}

// This would typically come from a database or API
const getDisputeDetails = (id: string): DisputeDetails | null => {
  // Mock data for demonstration
  return {
    id: id,
    transactionId: "#019234890",
    dateTime: "27th March, 2024. 2:39 PM",
    disputeReason: "Damaged Product",
    description:
      "The product received was damaged during shipping. The packaging was torn and the item inside was broken.",
    status: "Pending",
    preferredResolution: "Refund",
    transaction: {
      escrowNumber: "#019234890",
      type: "Product",
      amount: "₦5,000.00",
      marketplace: {
        id: "MKT001",
        name: "Jiji",
        rating: 4.8,
        logo: "/logos/jiji.png",
        website: "https://jiji.ng",
        status: "enabled",
      },
    },
    buyer: {
      name: "John Mark",
      username: "Johnmark012",
      userId: "BUYER001681",
      bankAccountName: "John Mark Adebayo",
      avatar: "/avatars/john-mark.jpg",
      email: "john.mark@example.com",
    },
    seller: {
      name: "Sarah Johnson",
      username: "sarahj_seller",
      userId: "SELLER002456",
      bankAccountName: "Sarah Johnson Enterprises",
      avatar: "/avatars/sarah-johnson.jpg",
      email: "sarah.johnson@example.com",
    },
  };
};

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700 hover:bg-green-100";
    case "Pending":
      return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
    case "In Progress":
      return "bg-blue-100 text-blue-700 hover:bg-blue-100";
    case "Failed":
      return "bg-red-100 text-red-700 hover:bg-red-100";
    default:
      return "bg-gray-100 text-gray-700 hover:bg-gray-100";
  }
};

export default async function DisputeDetailsPage({
  params,
}: {
  params: Promise<{ disputeId: string }>;
}) {
  const { disputeId } = await params;
  // Remove the # if it's included in the ID
  const cleanDisputeId = disputeId.startsWith("#")
    ? disputeId.substring(1)
    : disputeId;

  // In a real app, you would fetch this data from an API or database
  const dispute = getDisputeDetails(cleanDisputeId);

  if (!dispute) {
    notFound();
  }

  return (
    <div className="container p-6 max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dispute Details</h1>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="border-red-200 text-red-600 hover:bg-red-50"
          >
            Reject Dispute
          </Button>
          <Button
            variant="outline"
            className="border-orange-200 text-orange-600 hover:bg-orange-50"
          >
            Escalate
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            Resolve Dispute
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Dispute Information Card */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              Dispute Information
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-500">Dispute ID</div>
                <div className="text-sm font-medium text-right">
                  <Badge
                    variant="outline"
                    className="border border-purple-300 text-purple-600 bg-purple-50"
                  >
                    #{dispute.id}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-500">Transaction ID</div>
                <div className="text-sm font-medium text-right">
                  <Badge
                    variant="outline"
                    className="border border-blue-300 text-blue-600 bg-blue-50"
                  >
                    {dispute.transactionId}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-500">Date/Time</div>
                <div className="text-sm font-medium text-right">
                  {dispute.dateTime}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-500">Reason</div>
                <div className="text-sm font-medium text-right">
                  {dispute.disputeReason}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-500">Status</div>
                <div className="text-right">
                  <Badge className={getStatusStyle(dispute.status)}>
                    • {dispute.status}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-500">Preferred Resolution</div>
                <div className="text-sm font-medium text-right font-semibold text-blue-600">
                  {dispute.preferredResolution}
                </div>
              </div>

              <div className="col-span-2">
                <div className="text-sm text-gray-500 mb-2">Description</div>
                <div className="text-sm font-medium bg-gray-50 p-3 rounded-md">
                  {dispute.description}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transaction Details Card */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              Related Transaction
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-500">Escrow Number</div>
                <div className="text-sm font-medium text-right">
                  <Badge
                    variant="outline"
                    className="border border-blue-300 text-blue-600 bg-blue-50"
                  >
                    {dispute.transaction.escrowNumber}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-500">Type</div>
                <div className="text-sm font-medium text-right flex items-center justify-end">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  {dispute.transaction.type}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-500">Amount</div>
                <div className="text-sm font-medium text-right font-semibold">
                  {dispute.transaction.amount}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-500">Marketplace Name</div>
                <div className="text-sm font-medium text-right flex items-center justify-end">
                  <Avatar className="w-5 h-5 mr-2">
                    <AvatarImage
                      src={dispute.transaction.marketplace.logo}
                      alt={dispute.transaction.marketplace.name}
                    />
                    <AvatarFallback className="text-[10px]">
                      {dispute.transaction.marketplace.name
                        .substring(0, 2)
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span>{dispute.transaction.marketplace.name}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-500">Marketplace ID</div>
                <div className="text-sm font-medium text-right">
                  {dispute.transaction.marketplace.id}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-500">Rating</div>
                <div className="text-sm font-medium text-right flex items-center justify-end text-yellow-500">
                  ⭐ {dispute.transaction.marketplace.rating}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-500">Website</div>
                <div className="text-sm font-medium text-right">
                  <a
                    href={dispute.transaction.marketplace.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {dispute.transaction.marketplace.website}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-500">Status</div>
                <div className="text-right">
                  <Badge
                    className={
                      dispute.transaction.marketplace.status === "enabled"
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                    }
                  >
                    • {dispute.transaction.marketplace.status}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Buyer Information Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Avatar className="w-8 h-8 mr-3">
                <AvatarImage
                  src={dispute.buyer.avatar}
                  alt={dispute.buyer.name}
                />
                <AvatarFallback>
                  {dispute.buyer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              Buyer Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">Full Name</div>
              <div className="text-sm font-medium text-right">
                {dispute.buyer.name}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">Username</div>
              <div className="text-sm font-medium text-right text-blue-600">
                @{dispute.buyer.username}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">User ID</div>
              <div className="text-sm font-medium text-right">
                {dispute.buyer.userId}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">Email</div>
              <div className="text-sm font-medium text-right">
                {dispute.buyer.email}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">Bank Account Name</div>
              <div className="text-sm font-medium text-right">
                {dispute.buyer.bankAccountName}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seller Information Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Avatar className="w-8 h-8 mr-3">
                <AvatarImage
                  src={dispute.seller.avatar}
                  alt={dispute.seller.name}
                />
                <AvatarFallback>
                  {dispute.seller.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              Seller Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">Full Name</div>
              <div className="text-sm font-medium text-right">
                {dispute.seller.name}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">Username</div>
              <div className="text-sm font-medium text-right text-blue-600">
                @{dispute.seller.username}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">User ID</div>
              <div className="text-sm font-medium text-right">
                {dispute.seller.userId}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">Email</div>
              <div className="text-sm font-medium text-right">
                {dispute.seller.email}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">Bank Account Name</div>
              <div className="text-sm font-medium text-right">
                {dispute.seller.bankAccountName}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export const generateStaticParams = async () => {
  return [
    { disputeId: "1" },
    { disputeId: "2" },
    { disputeId: "3" },
    { disputeId: "4" },
    { disputeId: "5" },
  ];
};
