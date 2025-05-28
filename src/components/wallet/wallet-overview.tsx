"use client";

import { toast } from "sonner";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import KycDialog from "./kyc-dialog";
import DepositDialog from "./deposit-dialog";
import WithdrawDialog from "./withdraw-dialog";
import AddBankDialog from "./add-bank-dialog";
import BankCards from "./bank-cards";

interface BankAccount {
  id: string;
  accountNumber: string;
  accountName: string;
  bankName: string;
  bankCode: string;
}

// import DepositDialog from "";

type WalletOverviewProps = {
  handleKYCStatusChange: () => void;
  isKYCCompleted: boolean;
};

export default function WalletOverview({
  handleKYCStatusChange,
  isKYCCompleted,
}: WalletOverviewProps) {
  const [withdrawDialogOpen, setWithdrawDialogOpen] = useState(false);
  const [addBankDialogOpen, setAddBankDialogOpen] = useState(false);
  const [banks, setBanks] = useState<BankAccount[]>([]);
  const [timeframe, setTimeframe] = useState("week");
  const [depositDialogOpen, setDepositDialogOpen] = useState(false);

  const handleBankAdded = (bank: BankAccount) => {
    setBanks((prev) => [...prev, bank]);
    toast("Bank Added Successfully", {
      description: `${bank.bankName} account has been added to your wallet.`,
    });
  };

  const handleRemoveBank = (bankId: string) => {
    setBanks((prev) => prev.filter((bank) => bank.id !== bankId));
    toast("Bank Removed", {
      description: "Bank account has been removed from your wallet.",
    });
  };

  const canAddMoreBanks = banks.length < 3;

  // Sample data for the chart
  const chartData = {
    percentage: "+6.79%",
    dates: [
      "DEC 1",
      "DEC 3",
      "DEC 5",
      "DEC 7",
      "DEC 9",
      "DEC 11",
      "DEC 13",
      "DEC 15",
    ],
    // This would be replaced with actual data points in a real application
    dataPoints: [20, 25, 18, 30, 22, 35, 28, 32],
  };

  const handleDepositComplete = () => {
    toast("Deposit Initiated", {
      description:
        "Your deposit has been initiated. It will be credited once confirmed.",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };

  const handleWithdrawComplete = (amount: number, bank: BankAccount) => {
    toast("Withdrawal Initiated", {
      description: `₦${amount.toLocaleString()} withdrawal to ${
        bank.bankName
      } has been initiated.`,
      action: {
        label: "View Details",
        onClick: () => console.log("View withdrawal details"),
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fund Balance Card */}
        <Card className="bg-white border border-blue-100">
          <CardContent className="p-6 flex flex-col space-y-4">
            {isKYCCompleted ? (
              <>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Total Balance</p>
                  <h2 className="text-3xl font-bold">₦24,000</h2>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Pending Balance</p>
                  <h2 className="text-3xl font-bold">₦70,000</h2>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Total Balance</p>
                  <h2 className="text-3xl font-bold">Not Applicable</h2>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Pending Balance</p>
                  <h2 className="text-3xl font-bold">Not Applicable</h2>
                </div>
              </>
            )}

            <div className="grid grid-cols-2 gap-4">
              <WithdrawDialog
                open={withdrawDialogOpen}
                onOpenChange={setWithdrawDialogOpen}
                availableBanks={banks}
                maxAmount={24000}
                onWithdrawComplete={handleWithdrawComplete}
                trigger={
                  <Button
                    className="w-full bg-blue-500 hover:bg-blue-600"
                    disabled={!isKYCCompleted || banks.length === 0}
                  >
                    Withdraw
                  </Button>
                }
              />
              <DepositDialog
                open={depositDialogOpen}
                onOpenChange={setDepositDialogOpen}
                onComplete={handleDepositComplete}
                trigger={
                  <Button
                    disabled={!isKYCCompleted}
                    className="w-full bg-blue-500 hover:bg-blue-600"
                  >
                    Deposit
                  </Button>
                }
              />
            </div>
            {isKYCCompleted ? (
              <AddBankDialog
                open={addBankDialogOpen}
                onOpenChange={setAddBankDialogOpen}
                onBankAdded={handleBankAdded}
                existingBanks={banks}
                trigger={
                  <Button
                    variant="outline"
                    className="w-full border-gray-200 text-gray-700 hover:bg-gray-50"
                    disabled={!canAddMoreBanks}
                  >
                    {canAddMoreBanks ? "Add Bank" : "Maximum Banks Added"}
                  </Button>
                }
              />
            ) : (
              <KycDialog
                onSubmit={handleKYCStatusChange}
                trigger={
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    Complete KYC
                  </Button>
                }
              />
              // <Button
              //   variant="outline"
              //   className="w-full border-gray-200 text-gray-700 hover:bg-gray-50"
              //   onClick={handleKYCStatusChange}
              // >
              //   Complete KYC
              // </Button>
              // <KycDialog/>
            )}
          </CardContent>
        </Card>

        {/* Money Flow Chart */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-medium">Money Flow</h3>
                <div className="flex items-center text-green-500 text-sm">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  <span>{chartData.percentage}</span>
                </div>
              </div>
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="w-[100px] h-8 bg-gray-50">
                  <div className="flex items-center">
                    <Calendar className="h-3.5 w-3.5 mr-2" />
                    <SelectValue placeholder="Week" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Day</SelectItem>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="month">Month</SelectItem>
                  <SelectItem value="year">Year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Chart */}
            <div className="h-[200px] w-full relative">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
                <span>5k</span>
                <span>4k</span>
                <span>3k</span>
                <span>2k</span>
                <span>1k</span>
                <span>0</span>
              </div>

              {/* Chart area */}
              <div className="ml-8 h-full flex flex-col">
                {/* Chart grid lines */}
                <div className="flex-1 border-b border-dashed border-gray-200"></div>
                <div className="flex-1 border-b border-dashed border-gray-200"></div>
                <div className="flex-1 border-b border-dashed border-gray-200"></div>
                <div className="flex-1 border-b border-dashed border-gray-200"></div>
                <div className="flex-1 border-b border-gray-200"></div>

                {/* Line chart (simplified) */}
                <div className="absolute left-8 right-0 top-0 h-full">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d={`M0,${100 - chartData.dataPoints[0]} 
                        L${100 / 7},${100 - chartData.dataPoints[1]} 
                        L${200 / 7},${100 - chartData.dataPoints[2]} 
                        L${300 / 7},${100 - chartData.dataPoints[3]} 
                        L${400 / 7},${100 - chartData.dataPoints[4]} 
                        L${500 / 7},${100 - chartData.dataPoints[5]} 
                        L${600 / 7},${100 - chartData.dataPoints[6]} 
                        L100,${100 - chartData.dataPoints[7]}`}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>

              {/* X-axis labels */}
              <div className="ml-8 mt-2 flex justify-between text-xs text-gray-400">
                {chartData.dates.map((date, index) => (
                  <span key={index}>{date}</span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Bank Cards */}
      {banks.length > 0 && (
        <BankCards banks={banks} onRemoveBank={handleRemoveBank} />
      )}
    </div>
  );
}
