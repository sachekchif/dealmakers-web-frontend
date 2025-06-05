import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { RecentTable } from "../recent-table";
import { ColumnDef } from "@tanstack/react-table"; // Assuming you're using react-table

// Generic interface for any item type
export interface RecentTableContainerProps<TData, TValue> {
  title: string;
  data: TData[];
  columns: ColumnDef<TData, TValue>[];
  seeAllHref?: string;
  seeAllText?: string;
  showSeeAll?: boolean;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
}

export default function RecentTableContainer<TData, TValue>({
  title,
  data,
  columns,
  seeAllHref = "#",
  seeAllText = "See All",
  showSeeAll,
  className = "",
  headerClassName = "",
  contentClassName = "",
}: RecentTableContainerProps<TData, TValue>) {
  return (
    <Card className={`shadow-none gap-2 border-none px-0 ${className}`}>
      <CardHeader
        className={`flex flex-row items-center justify-between px-0 ${headerClassName}`}
      >
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        {showSeeAll && (
          <Button
            asChild={true}
            variant="link"
            className="text-primary h-auto p-0"
          >
            <Link href={seeAllHref} className="flex items-center gap-1">
              {seeAllText}
            </Link>
          </Button>
        )}
      </CardHeader>
      <CardContent className={`px-0 ${contentClassName}`}>
        <RecentTable data={data} columns={columns} />
      </CardContent>
    </Card>
  );
}
