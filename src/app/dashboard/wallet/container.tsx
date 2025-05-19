"use client";

import WalletOverview from "@/components/wallet/wallet-overview";
import TransactionHistory from "@/components/wallet/transaction-history";
import { use, useState } from "react";

export default function WalletContainer() {
  const [isKYCCompleted, setIsKYCCompleted] = useState(false);

  const handleKYCStatusChange = () => {
    setIsKYCCompleted((status) => !status);
  };

  return (
    <>
      <WalletOverview
        isKYCCompleted={isKYCCompleted}
        handleKYCStatusChange={handleKYCStatusChange}
      />
      <TransactionHistory isKYCCompleted={isKYCCompleted} />
    </>
  );
}
