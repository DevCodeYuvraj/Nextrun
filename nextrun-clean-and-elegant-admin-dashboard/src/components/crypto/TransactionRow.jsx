"use client";

import {
  ArrowDown,
  ArrowUp,
} from "lucide-react";

import styles from "./TransactionRow.module.css";

export default function TransactionRow({ transaction }) {
  const isBuy = transaction.type === "Buy";

  return (
    <article className={styles.row}>
      <div
        className={`${styles.icon} ${
          isBuy ? styles.buyIcon : styles.sellIcon
        }`}
      >
        {isBuy ? (
          <ArrowDown size={28} strokeWidth={2.5} />
        ) : (
          <ArrowUp size={28} strokeWidth={2.5} />
        )}
      </div>

      <div className={styles.details}>
        <h3>{transaction.type}</h3>
        <p>{transaction.date}</p>
      </div>

      <strong
        className={`${styles.amount} ${
          isBuy ? styles.buyAmount : styles.sellAmount
        }`}
      >
        {transaction.amount}
      </strong>
    </article>
  );
}