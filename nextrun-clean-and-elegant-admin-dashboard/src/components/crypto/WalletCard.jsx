"use client";

import styles from "./WalletCard.module.css";
import { ArrowDownLeft, ArrowUpRight, Wallet } from "lucide-react";

export default function WalletCard() {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <Wallet size={24} />
        </div>

        <div>
          <h2>Wallet Balance</h2>
          <p>Available Balance</p>
        </div>
      </div>

      <div className={styles.balance}>
        <h1>$248,562.45</h1>
        <span>≈ 4.823 BTC</span>
      </div>

      <div className={styles.stats}>
        <div>
          <small>Total Profit</small>
          <h4>+$12,540</h4>
        </div>

        <div>
          <small>Monthly Growth</small>
          <h4 className={styles.positive}>+8.42%</h4>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.deposit}>
          <ArrowDownLeft size={18} />
          Deposit
        </button>

        <button className={styles.withdraw}>
          <ArrowUpRight size={18} />
          Withdraw
        </button>
      </div>
    </section>
  );
}