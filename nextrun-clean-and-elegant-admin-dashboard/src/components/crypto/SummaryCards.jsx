"use client";

import styles from "./SummaryCards.module.css";
import SummaryCard from "./SummaryCard";

const coins = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$40,291",
    change: "+0.25%",
    positive: true,
    chart: "bitcoin",
    chartColor: "#22C55E"
  },
  {
    id: 2,
    name: "Ripplecoin",
    symbol: "XRP",
    price: "$40,291",
    change: "+0.25%",
    positive: true,
    chart: "ripple",
    chartColor: "#22C55E"
  },
  {
    id: 3,
    name: "Ethereum",
    symbol: "ETH",
    price: "$40,291",
    change: "-0.25%",
    positive: false,
    chart: "ethereum",
    chartColor: "#EF4444"
  },
  {
    id: 4,
    name: "Litecoin",
    symbol: "LTC",
    price: "$40,291",
    change: "+0.25%",
    positive: true,
    chart: "litecoin",
    chartColor: "#22C55E"
  },
];

export default function SummaryCards() {
  return (
    <section className={styles.wrapper}>
      {coins.map((coin) => (
        <SummaryCard key={coin.id} coin={coin} />
      ))}
    </section>
  );
}