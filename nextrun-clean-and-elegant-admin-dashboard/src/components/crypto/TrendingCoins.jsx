"use client";

import styles from "./TrendingCoins.module.css";

const trendingCoins = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$48,230",
    change: "+2.64%",
    positive: true,
    color: "#5668FF",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,245",
    change: "+1.48%",
    positive: true,
    color: "#00B8D9",
  },
  {
    id: 3,
    name: "Solana",
    symbol: "SOL",
    price: "$124.82",
    change: "-0.82%",
    positive: false,
    color: "#9C27B0",
  },
  {
    id: 4,
    name: "Ripple",
    symbol: "XRP",
    price: "$0.82",
    change: "+3.15%",
    positive: true,
    color: "#22C55E",
  },
  {
    id: 5,
    name: "Litecoin",
    symbol: "LTC",
    price: "$92.15",
    change: "-1.23%",
    positive: false,
    color: "#FFB020",
  },
];

export default function TrendingCoins() {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2>Trending Coins</h2>
          <p>Top market movers</p>
        </div>

        <button className={styles.viewAll}>
          View All
        </button>
      </div>

      <div className={styles.list}>
        {trendingCoins.map((coin) => (
          <div
            key={coin.id}
            className={styles.row}
          >
            <div className={styles.left}>
              <div
                className={styles.icon}
                style={{ background: coin.color }}
              >
                {coin.symbol.charAt(0)}
              </div>

              <div>
                <h4>{coin.name}</h4>
                <span>{coin.symbol}</span>
              </div>
            </div>

            <div className={styles.right}>
              <h4>{coin.price}</h4>

              <span
                className={
                  coin.positive
                    ? styles.positive
                    : styles.negative
                }
              >
                {coin.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}