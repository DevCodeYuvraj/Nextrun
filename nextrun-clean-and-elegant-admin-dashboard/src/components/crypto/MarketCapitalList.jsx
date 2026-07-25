"use client";

import styles from "./MarketCapitalList.module.css";
import MarketCapitalRow from "./MarketCapitalRow";

const markets = [
  {
    id: 1,
    coin: "Bitcoin",
    pair: "BTC/USD",
    price: "149.50",
    change: "+12%",
    positive: true,
  },
  {
    id: 2,
    coin: "Ripple",
    pair: "RPC/USD",
    price: "149.50",
    change: "-22%",
    positive: false,
  },
  {
    id: 3,
    coin: "Ethereum",
    pair: "ETH/USD",
    price: "149.50",
    change: "+42%",
    positive: true,
  },
  {
    id: 4,
    coin: "Litecoin",
    pair: "LTC/USD",
    price: "149.50",
    change: "-32%",
    positive: false,
  },
  {
    id: 5,
    coin: "Bitcoin",
    pair: "BTC/USD",
    price: "149.50",
    change: "+10%",
    positive: true,
  },
];

export default function MarketCapitalList() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Market Capital List
      </h2>

      <div className={styles.list}>
        {markets.map((market) => (
          <MarketCapitalRow
            key={market.id}
            market={market}
          />
        ))}
      </div>
    </section>
  );
}