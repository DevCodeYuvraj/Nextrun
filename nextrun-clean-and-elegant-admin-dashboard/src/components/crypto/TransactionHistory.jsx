"use client";

import styles from "./TransactionHistory.module.css";
import TransactionRow from "./TransactionRow";

const transactions = [
  {
    id: 1,
    type: "Buy",
    date: "2 March 2021, 13:45 PM",
    amount: "+10 BTC",
  },
  {
    id: 2,
    type: "Sell",
    date: "2 March 2021, 13:45 PM",
    amount: "-10 ETH",
  },
  {
    id: 3,
    type: "Buy",
    date: "2 March 2021, 13:45 PM",
    amount: "+10 BTC",
  },
  {
    id: 4,
    type: "Sell",
    date: "2 March 2021, 13:45 PM",
    amount: "-10 ETH",
  },
  {
    id: 5,
    type: "Buy",
    date: "2 March 2021, 13:45 PM",
    amount: "+10 BTC",
  },
];

export default function TransactionHistory() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Recent Trading Activity
      </h2>

      <div className={styles.list}>
        {transactions.map((transaction) => (
          <TransactionRow
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </div>
    </section>
  );
}