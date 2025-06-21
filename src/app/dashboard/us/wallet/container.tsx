"use client";

import { use, useState } from "react";
import WalletOverview from "./wallet-transaction-overview";
import WalletTransactionHistory from "./wallet-transaction-history";

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
      <WalletTransactionHistory isKYCCompleted={isKYCCompleted} />
    </>
  );
}
