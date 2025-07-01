import {
  TransactionChart,
  TransactionData,
} from "@/components/dashboard/charts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type TransactionReportData = {
  deposits: TransactionData[];
  withdrawals: TransactionData[];
  totalDeposits: number;
  totalWithdrawals: number;
};

// Main Deposits and Withdrawal Report Component
export default function DepositsWithdrawalReport() {
  // Sample data for escrow transactions
  const reportData: TransactionReportData = {
    totalDeposits: 2500000, // $2.5M
    totalWithdrawals: 1800000, // $1.8M
    deposits: [
      {
        category: "Total Deposited",
        percentage: 45.2,
        amount: 1130000,
        fill: "var(--color-total-deposited)",
      },
      {
        category: "Deposited Charge",
        percentage: 28.6,
        amount: 715000,
        fill: "var(--color-deposited-charge)",
      },
      {
        category: "Pending Deposits",
        percentage: 18.4,
        amount: 460000,
        fill: "var(--color-pending-deposits)",
      },
      {
        category: "Rejected Deposits",
        percentage: 7.8,
        amount: 195000,
        fill: "var(--color-rejected-deposits)",
      },
    ],
    withdrawals: [
      {
        category: "Total Withdrawals",
        percentage: 52.8,
        amount: 950400,
        fill: "var(--color-total-withdrawals)",
      },
      {
        category: "Withdrawals Charge",
        percentage: 25.0,
        amount: 450000,
        fill: "var(--color-withdrawals-charge)",
      },
      {
        category: "Pending Withdrawals",
        percentage: 15.6,
        amount: 280800,
        fill: "var(--color-pending-withdrawals)",
      },
      {
        category: "Rejected Withdrawals",
        percentage: 6.6,
        amount: 118800,
        fill: "var(--color-rejected-withdrawals)",
      },
    ],
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="shadow-none border-none px-0">
      <CardHeader className="px-0 pb-4">
        <CardTitle className="text-lg font-medium">
          Deposits and Withdrawal Report
        </CardTitle>
        <div className="flex gap-6 text-sm text-gray-600">
          <div>Total Deposits: {formatCurrency(reportData.totalDeposits)}</div>
          <div>
            Total Withdrawals: {formatCurrency(reportData.totalWithdrawals)}
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <TransactionChart
            title="Deposits"
            chartData={reportData.deposits}
            total={reportData.totalDeposits}
          />

          <TransactionChart
            title="Withdrawals"
            chartData={reportData.withdrawals}
            total={reportData.totalWithdrawals}
          />
        </div>
      </CardContent>
    </Card>
  );
}
