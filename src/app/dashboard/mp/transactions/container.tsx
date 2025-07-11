"use client";

import TransactionHistory from "@/app/dashboard/ad/transactions/transactions-history";
import TransactionOverview from "./transaction-overview";
import StatCards from "./commissions-card";

export default function WalletContainer() {
  return (
    <>
      <StatCards />
      <TransactionHistory />
    </>
  );
}
