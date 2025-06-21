"use client";

import WalletOverview from "@/components/wallet/wallet-overview";
import TransactionHistory from "@/app/dashboard/us/transactions/transactions-history";
import { use, useState } from "react";

export default function WalletContainer() {
  const [isKYCCompleted, setIsKYCCompleted] = useState(false);

  const handleKYCStatusChange = () => {
    setIsKYCCompleted((status) => !status);
  };

  return (
    <>
      {/* <TransactionOverview
        isKYCCompleted={isKYCCompleted}
        handleKYCStatusChange={handleKYCStatusChange}
      /> */}
      <TransactionHistory isKYCCompleted={isKYCCompleted} />
    </>
  );
}
