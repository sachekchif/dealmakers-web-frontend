import Link from "next/link";

export default function ConfigOverviewPage() {
  return (
    <div className={"container mx-auto p-6 space-y-6"}>
      <h1>Configuration Overview</h1>
      <ul>
        <li>
          <Link href="config/dispute-resolution">Dispute Resolution</Link>
        </li>
        <li>
          <Link href="config/transaction-flow">Transaction Flow</Link>
        </li>
        <li>
          <Link href="config/system-timers">System Timers</Link>
        </li>
      </ul>
    </div>
  );
}
