"use client";

import styles from "./MarketStatistics.module.css";

const stats = [
  {
    id: "open",
    label: "Open",
    value: "$45,231.40",
  },
  {
    id: "high",
    label: "High",
    value: "$47,184.65",
  },
  {
    id: "low",
    label: "Low",
    value: "$44,782.20",
  },
  {
    id: "close",
    label: "Close",
    value: "$46,825.90",
  },
];

export default function MarketStatistics() {
  return (
    <div className={styles.statistics}>
      {stats.map((stat) => (
        <div key={stat.id} className={styles.stat}>
          <span className={styles.label}>{stat.label}</span>
          <strong className={styles.value}>{stat.value}</strong>
        </div>
      ))}
    </div>
  );
}