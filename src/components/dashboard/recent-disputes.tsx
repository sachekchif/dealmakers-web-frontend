import { recentDisputesColumns } from "./columns/recent-disputes-table-column";
import RecentTableContainer from "../ui/recent-table-container";

export interface Dispute {
  id: string;
  disputeType: string;
  date: string;
  hoursLeft: number;
  resolution: string;
  transactionId: string;
  amount: number;
}

export default function RecentDisputes() {
  const disputes: Dispute[] = [
    {
      id: "1",
      disputeType: "Damaged Product",
      date: "27th March, 2024",
      hoursLeft: 45,
      resolution: "Refund",
      transactionId: "#119234890",
      amount: 5000,
    },
    {
      id: "2",
      disputeType: "Damaged Product",
      date: "27th March, 2024",
      hoursLeft: 45,
      resolution: "Refund",
      transactionId: "#119234890",
      amount: 5000,
    },
    {
      id: "3",
      disputeType: "Damaged Product",
      date: "27th March, 2024",
      hoursLeft: 45,
      resolution: "Refund",
      transactionId: "#119234890",
      amount: 5000,
    },
    {
      id: "4",
      disputeType: "Damaged Product",
      date: "27th March, 2024",
      hoursLeft: 45,
      resolution: "Refund",
      transactionId: "#119234890",
      amount: 5000,
    },
  ];

  return (
    <RecentTableContainer
      title="Recent DIsputes"
      data={disputes}
      columns={recentDisputesColumns}
      seeAllHref="/dashboard/dispute"
      seeAllText="See All"
      showSeeAll={true}
    />
  );
}
