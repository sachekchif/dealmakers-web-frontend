// marketplace-details-page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

// This would typically come from a database or API
const getMarketplaceDetails = (id: string) => {
  // Mock data for demonstration
  return {
    date: "2025-02-16 12:20 AM",
    idNumber: "OQLWHSIRFAIIJI92911",
    username: "@JIJI",
    users: 628,
    amount: "₦223,871,000",
    charge: "₦21,000.00",
    status: "Active",
    representative: {
      name: "Jacob Chris Elvis",
      bvn: "02893727823",
      status: "Verified",
    },
  };
};

export default async function MarketplaceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // In a real app, you would fetch this data from an API or database
  const marketplace = getMarketplaceDetails(id);

  if (!marketplace) {
    return <div>Marketplace not found</div>;
  }

  // Status color based on status
  const getStatusColor = () => {
    if (marketplace.status.toLowerCase() === "active") {
      return "bg-green-100 text-green-700 hover:bg-green-100";
    } else if (marketplace.status.toLowerCase() === "pending") {
      return "bg-orange-100 text-orange-600 hover:bg-orange-100";
    } else if (marketplace.status.toLowerCase() === "disabled") {
      return "bg-red-100 text-red-600 hover:bg-red-100";
    }
    return "bg-gray-100 text-gray-600 hover:bg-gray-100";
  };

  const getRepresentativeStatusColor = () => {
    if (marketplace.representative.status.toLowerCase() === "verified") {
      return "bg-green-100 text-green-700 hover:bg-green-100";
    }
    return "bg-gray-100 text-gray-600 hover:bg-gray-100";
  };

  return (
    <div className="container p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Marketplace Details</h1>
        {/* <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
          <Edit className="h-4 w-4 mr-2" />
          Edit Marketplace
        </Button> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Marketplace Information Card */}
        <Card className="shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-800">
              Marketplace Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">Date</div>
              <div className="text-sm font-medium text-right">
                {marketplace.date}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">ID Number</div>
              <div className="text-sm font-medium text-right">
                {marketplace.idNumber}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">Username</div>
              <div className="text-sm font-medium text-right text-blue-600">
                {marketplace.username}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">Users</div>
              <div className="text-sm font-medium text-right">
                {marketplace.users}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">Amount</div>
              <div className="text-sm font-medium text-right">
                {marketplace.amount}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">Charge</div>
              <div className="text-sm font-medium text-right">
                {marketplace.charge}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-500">Status</div>
              <div className="text-right">
                <Badge className={getStatusColor()}>
                  • {marketplace.status}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Representative Details Card */}
        <Card className="shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-800">
              Representative Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <div className="text-sm text-gray-500">Representative Name</div>
              <div className="text-sm font-medium">
                {marketplace.representative.name}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-sm text-gray-500">BVN</div>
              <div className="text-sm font-medium text-gray-600">
                {marketplace.representative.bvn}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-sm text-gray-500">Status</div>
              <div>
                <Badge className={getRepresentativeStatusColor()}>
                  • {marketplace.representative.status}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
