import RecentUsers from "./recent-users";
import RecentTransactions from "./recent-transactions";
import StatCards from "./recent-stats";
import CustomersLocation from "./customers-location";

export default function Page() {
  return (
    <section className="p-8 flex flex-col">
      <StatCards />
      <RecentUsers />
      <RecentTransactions />
      <CustomersLocation />
    </section>
  );
}
