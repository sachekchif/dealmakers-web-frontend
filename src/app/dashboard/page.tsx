import RecentDisputes from "@/components/dashboard/recent-disputes";
import RecentTransactions from "@/components/dashboard/recent-transactions";
import StatCards from "@/components/dashboard/recent-stats";
import UsersLocation from "@/components/dashboard/users-location";

export default function Page() {
  return (
    <section className="p-8 flex flex-col">
      <StatCards />
      <RecentTransactions />
      <UsersLocation />
      <RecentDisputes />
    </section>
  );
}
