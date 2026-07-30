"use client";

import styles from "./CryptoPageContent.module.css";

import SummaryCards from "./SummaryCards";
import MarketOverview from "./MarketOverview";
import TransactionHistory from "./TransactionHistory";
import MarketCapitalList from "./MarketCapitalList";

export default function CryptoPageContent() {
  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <main className={styles.mainContent}>
          <SummaryCards />
          <MarketOverview />
        </main>

        <aside className={styles.sidebar}>
          <TransactionHistory />
          <MarketCapitalList />
        </aside>
      </div>
    </div>
  );
}