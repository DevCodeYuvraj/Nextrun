"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import styles from "./MarketChart.module.css";
import CandlestickChart from "./CandlestickChart";

const periods = ["1H", "1D", "1W", "1M", "1Y"];

export default function MarketChart() {
  const [activePeriod, setActivePeriod] = useState("1D");

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Market Chart</h2>

        <div className={styles.controls}>
          <div className={styles.periods}>
            {periods.map((period) => (
              <button
                key={period}
                type="button"
                onClick={() => setActivePeriod(period)}
                className={`${styles.period} ${
                  activePeriod === period
                    ? styles.active
                    : ""
                }`}
              >
                {period}
              </button>
            ))}
          </div>

          <button
            type="button"
            className={styles.coinSelect}
          >
            <span>BTC/USD</span>

            <ChevronDown
              size={13}
              strokeWidth={2}
            />
          </button>
        </div>
      </div>

      <div className={styles.chartArea}>
        <CandlestickChart />
      </div>
    </section>
  );
}