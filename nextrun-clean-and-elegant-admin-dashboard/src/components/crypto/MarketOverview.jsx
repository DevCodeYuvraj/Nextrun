"use client";

import styles from "./MarketOverview.module.css";
import MarketChart from "./MarketChart";

export default function MarketOverview() {
  return (
    <section className={styles.overview}>
      <MarketChart />
    </section>
  );
}