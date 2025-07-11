import DepositsWithdrawalReport from "./deposit-withdrawal-report";
import RecentTransactions from "./recent-transactions";
import StatCards from "./recent-stats";
import { EcrowDisputeStats } from "./ecrow-dispute-stats";

export default function Page() {
  return (
    <section className="p-8 flex flex-col lg:min-w-max">
      <StatCards />
      <EcrowDisputeStats />
      <DepositsWithdrawalReport />
      <RecentTransactions />
    </section>
  );
}
