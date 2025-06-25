"use client";

import { toast } from "sonner";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AddBankDialog from "@/app/dashboard/us/wallet/_dialogues/add-bank-dialog";
import DepositDialog from "@/app/dashboard/us/wallet/_dialogues/deposit-dialog";
import WithdrawDialog from "@/app/dashboard/us/wallet/_dialogues/withdraw-dialog";
import BankCards from "@/app/dashboard/us/wallet/bank-cards";
import KycDialog from "@/app/dashboard/us/wallet/_dialogues/kyc-dialog";
import { MoneyFlowChart } from "@/components/dashboard/charts";

interface BankAccount {
  id: string;
  accountNumber: string;
  accountName: string;
  bankName: string;
  bankCode: string;
}

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
    percentage: "+12%",
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
    dataPoints: [2000, 2500, 1800, 3000, 2200, 3500, 2800, 3200],
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

  const handleTimeframeChange = (newTimeframe: string) => {
    setTimeframe(newTimeframe);
    // Here you would typically fetch new data based on the timeframe
    console.log("Timeframe changed to:", newTimeframe);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fund Balance Card */}
        <Card className="bg-white border border-blue-100">
          <CardContent className="p-6 py-0 flex flex-col justify-between grow">
            {isKYCCompleted ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Total Balance</p>
                  <h2 className="text-3xl font-bold">₦24,000</h2>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Pending Balance</p>
                  <h2 className="text-3xl font-bold">₦70,000</h2>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Total Balance</p>
                  <h2 className="text-3xl font-bold">Not Applicable</h2>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Pending Balance</p>
                  <h2 className="text-3xl font-bold">Not Applicable</h2>
                </div>
              </div>
            )}
            <div className=" flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <WithdrawDialog
                  open={withdrawDialogOpen}
                  onOpenChange={setWithdrawDialogOpen}
                  availableBanks={banks}
                  maxAmount={24000}
                  onWithdrawComplete={handleWithdrawComplete}
                  trigger={
                    <Button
                      variant={"defaultOutline"}
                      className="w-full "
                      disabled={!isKYCCompleted || banks.length === 0}
                    >
                      Withdraw
                    </Button>
                  }
                />
                {/* <DepositDialog
                  open={depositDialogOpen}
                  onOpenChange={setDepositDialogOpen}
                  onComplete={handleDepositComplete}
                  trigger={
                    <Button
                      disabled={!isKYCCompleted}
                      className="w-full"
                      variant={"defaultOutline"}
                    >
                      Deposit
                    </Button>
                  }
                /> */}
                {isKYCCompleted ? (
                  <AddBankDialog
                    open={addBankDialogOpen}
                    onOpenChange={setAddBankDialogOpen}
                    onBankAdded={handleBankAdded}
                    existingBanks={banks}
                    trigger={
                      <Button className="w-full " disabled={!canAddMoreBanks}>
                        {canAddMoreBanks ? "Add Bank" : "Maximum Banks Added"}
                      </Button>
                    }
                  />
                ) : (
                  <KycDialog
                    onSubmit={handleKYCStatusChange}
                    trigger={<Button className="">Complete KYC</Button>}
                  />
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <MoneyFlowChart
          chartData={chartData}
          // timeframe={timeframe}
          // setTimeframe={handleTimeframeChange}
        />
      </div>

      {/* Bank Cards
      {banks.length > 0 && (
        <BankCards banks={banks} onRemoveBank={handleRemoveBank} />
      )} */}
    </div>
  );
}
