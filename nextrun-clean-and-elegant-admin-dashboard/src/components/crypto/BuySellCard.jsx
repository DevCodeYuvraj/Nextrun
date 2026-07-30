"use client";

import { useState } from "react";
import styles from "./BuySellCard.module.css";
import { ChevronDown } from "lucide-react";

export default function BuySellCard() {
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h2>Buy / Sell</h2>
        <p>Trade cryptocurrency instantly</p>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "buy" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("buy")}
        >
          Buy
        </button>

        <button
          className={`${styles.tab} ${
            activeTab === "sell" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("sell")}
        >
          Sell
        </button>
      </div>

      <div className={styles.field}>
        <label>Coin</label>

        <button className={styles.select}>
          <div className={styles.coin}>
            <div className={styles.coinIcon}>₿</div>

            <div>
              <strong>Bitcoin</strong>
              <span>BTC</span>
            </div>
          </div>

          <ChevronDown size={18} />
        </button>
      </div>

      <div className={styles.field}>
        <label>Amount</label>

        <input
          type="text"
          defaultValue="0.250 BTC"
          className={styles.input}
        />
      </div>

      <div className={styles.summary}>
        <div>
          <span>Price</span>
          <strong>$48,230.25</strong>
        </div>

        <div>
          <span>Fee</span>
          <strong>$18.40</strong>
        </div>

        <div>
          <span>Total</span>
          <strong>$12,075.96</strong>
        </div>
      </div>

      <button className={styles.action}>
        {activeTab === "buy" ? "Buy Bitcoin" : "Sell Bitcoin"}
      </button>
    </section>
  );
}