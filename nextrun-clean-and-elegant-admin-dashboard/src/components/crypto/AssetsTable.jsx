"use client";

import styles from "./AssetsTable.module.css";
import AssetRow from "./AssetRow";

const assets = [
  {
    id: 1,
    coin: "Bitcoin",
    symbol: "BTC",
    holdings: "1.245 BTC",
    price: "$48,230.25",
    change: "+2.64%",
    marketCap: "$925.8B",
    status: "Profit",
    positive: true,
    color: "#5668FF",
  },
  {
    id: 2,
    coin: "Ethereum",
    symbol: "ETH",
    holdings: "12.48 ETH",
    price: "$3,245.80",
    change: "+1.25%",
    marketCap: "$390.4B",
    status: "Profit",
    positive: true,
    color: "#00B8D9",
  },
  {
    id: 3,
    coin: "Solana",
    symbol: "SOL",
    holdings: "85.14 SOL",
    price: "$124.82",
    change: "-0.82%",
    marketCap: "$56.7B",
    status: "Loss",
    positive: false,
    color: "#9C27B0",
  },
  {
    id: 4,
    coin: "Ripple",
    symbol: "XRP",
    holdings: "2450 XRP",
    price: "$0.82",
    change: "+3.14%",
    marketCap: "$44.9B",
    status: "Profit",
    positive: true,
    color: "#22C55E",
  },
  {
    id: 5,
    coin: "Litecoin",
    symbol: "LTC",
    holdings: "34.85 LTC",
    price: "$92.18",
    change: "-1.52%",
    marketCap: "$6.8B",
    status: "Loss",
    positive: false,
    color: "#FFB020",
  },
];

export default function AssetsTable() {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2>Assets Portfolio</h2>
          <p>Your cryptocurrency holdings</p>
        </div>

        <button className={styles.viewAll}>
          View All
        </button>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Holdings</th>
              <th>Price</th>
              <th>24h</th>
              <th>Market Cap</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {assets.map((asset) => (
              <AssetRow
                key={asset.id}
                asset={asset}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}   