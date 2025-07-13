// Updated marketplace-table-column.tsx
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowUpDown,
  MoreHorizontal,
  Edit,
  Power,
  PowerOff,
  Eye,
  Percent,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export interface Marketplace {
  id: number;
  marketplaceId: string;
  commissions: number;
  status: "enabled" | "disabled";
}

export const MarketplaceColumns: ColumnDef<Marketplace>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "SL",
    cell: ({ row }) => <div className="font-medium">{row.index + 1}</div>,
  },
  {
    accessorKey: "marketplaceId",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Marketplace ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-medium uppercase">
        {row.getValue("marketplaceId")}
      </div>
    ),
  },
  {
    accessorKey: "commissions",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Commissions
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const commissions = row.getValue("commissions") as number;
      return (
        <div className="font-medium">₦{commissions.toLocaleString()}.00</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      return (
        <Badge
          variant={status === "enabled" ? "default" : "secondary"}
          className={
            status === "enabled"
              ? "bg-green-100 text-green-800 hover:bg-green-100"
              : "bg-red-100 text-red-800 hover:bg-red-100"
          }
        >
          • {status === "enabled" ? "Enabled" : "Disabled"}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Action",
    enableHiding: false,
    cell: ({ row }) => {
      const marketplace = row.original as Marketplace;

      return (
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-cyan-600 border-cyan-200 hover:bg-cyan-50"
            onClick={() => {
              const event = new CustomEvent("assignCommissions", {
                detail: marketplace,
              });
              window.dispatchEvent(event);
            }}
          >
            <Percent className="h-4 w-4 mr-2" />
            Set Commission
          </Button>

          {/* <Button
            variant="outline"
            size="sm"
            className={
              marketplace.status === "enabled"
                ? "text-red-600 border-red-200 hover:bg-red-50"
                : "text-green-600 border-green-200 hover:bg-green-50"
            }
            onClick={() => {
              const event = new CustomEvent("toggleMarketplaceStatus", {
                detail: marketplace.id,
              });
              window.dispatchEvent(event);
            }}
          >
            {marketplace.status === "enabled" ? (
              <>
                <PowerOff className="h-4 w-4 mr-1" />
                Disable
              </>
            ) : (
              <>
                <Power className="h-4 w-4 mr-1" />
                Enable
              </>
            )}
          </Button> */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() =>
                  navigator.clipboard.writeText(marketplace.marketplaceId)
                }
              >
                Copy Marketplace ID
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  navigator.clipboard.writeText(
                    marketplace.commissions.toString()
                  )
                }
              >
                Copy Commission Amount
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem
                className="text-purple-600"
                onClick={() => {
                  const event = new CustomEvent("assignCommissions", {
                    detail: marketplace,
                  });
                  window.dispatchEvent(event);
                }}
              >
                <Percent className="h-4 w-4 mr-2" />
                Assign Commissions
              </DropdownMenuItem> */}
              {/* <DropdownMenuSeparator />s */}
              <DropdownMenuItem
                className="text-cyan-600"
                onClick={() => {
                  const event = new CustomEvent("toggleMarketplaceStatus", {
                    detail: marketplace,
                  });
                  window.dispatchEvent(event);
                }}
              >
                Toggle Marketplace
              </DropdownMenuItem>
              {/* <DropdownMenuItem
                className="text-blue-600"
                onClick={() => {
                  const event = new CustomEvent("duplicateMarketplace", {
                    detail: marketplace,
                  });
                  window.dispatchEvent(event);
                }}
              >
                Duplicate Marketplace
              </DropdownMenuItem> */}
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem
                className="text-red-600"
                onClick={() => {
                  const event = new CustomEvent("deleteMarketplace", {
                    detail: marketplace.id,
                  });
                  window.dispatchEvent(event);
                }}
              >
                Delete Marketplace
              </DropdownMenuItem> */}
              <DropdownMenuItem>
                {" "}
                <Button
                  asChild={true}
                  variant="link"
                  className="text-primary h-auto p-0"
                >
                  <Link
                    href={`/dashboard/ad/marketplace/${marketplace.id}`}
                    className="flex items-center gap-1"
                  >
                    View details
                  </Link>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
