"use client";

import type React from "react";

import {
  TrendingUp,
  Clock,
  XCircle,
  CreditCard,
  TrendingDown,
  DollarSign,
  ArrowUpDown,
  AlertTriangle,
  CheckCircle,
  PauseCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  amount: string;
  label: string;
  iconBg: string;
}

function StatItem({ icon, amount, label, iconBg }: StatItemProps) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
      <div className="flex items-center space-x-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBg}`}
        >
          {icon}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-lg">{amount}</div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      </div>
    </div>
  );
}

interface StatsSectionProps {
  title: string;
  stats: Array<{
    icon: React.ReactNode;
    amount: string;
    label: string;
    iconBg: string;
  }>;
}

function StatsSection({ title, stats }: StatsSectionProps) {
  return (
    <Card className="bg-white border-none shadow-none ">
      <CardContent className="p-6 px-0 ">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="space-y-2 grid grid-cols-1 sm:grid-cols-2  gap-4 rounded-sm border-gray-200 border py-4">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function EcrowDisputeStats() {
  const transactionsStats = [
    {
      icon: <ArrowUpDown className="w-5 h-5 text-green-600" />,
      amount: "₦84,657,460",
      label: "Current Escrow Balance",
      iconBg: "bg-green-100",
    },
    {
      icon: <ArrowUpDown className="w-5 h-5 text-orange-600" />,
      amount: "₦21,370,000",
      label: "Total Escrow Payouts",
      iconBg: "bg-orange-100",
    },
    {
      icon: <ArrowUpDown className="w-5 h-5 text-red-600" />,
      amount: "₦3,721,300",
      label: "Total Escrow Payings",
      iconBg: "bg-red-100",
    },
    {
      icon: <CreditCard className="w-5 h-5 text-blue-600" />,
      amount: "₦1,565,950",
      label: "Total Commissions",
      iconBg: "bg-blue-100",
    },
  ];

  const disputeStats = [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      amount: "₦15,420,800",
      label: "Resolved Disputes",
      iconBg: "bg-green-100",
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-orange-600" />,
      amount: "₦4,680,000",
      label: "Pending Disputes",
      iconBg: "bg-orange-100",
    },
    {
      icon: <XCircle className="w-5 h-5 text-red-600" />,
      amount: "₦890,400",
      label: "Escalated Disputes",
      iconBg: "bg-red-100",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-blue-600" />,
      amount: "₦234,100",
      label: "Dispute Charges",
      iconBg: "bg-blue-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <StatsSection title="Escrow" stats={transactionsStats} />
      <StatsSection title="Dispute" stats={disputeStats} />
    </div>
  );
}
