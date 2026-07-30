"use client";

import styles from "./MarketCapitalRow.module.css";

import {
  cryptoLogos,
  BitcoinLogo,
} from "./CryptoLogos";

export default function MarketCapitalRow({ market }) {
  const Logo =
    cryptoLogos[market.coin] ??
    cryptoLogos[market.coin?.toLowerCase()] ??
    BitcoinLogo;

  return (
    <article className={styles.row}>
      <div className={styles.left}>
        <Logo size={46} />

        <strong className={styles.pair}>
          {market.pair}
        </strong>
      </div>

      <div className={styles.right}>
        <strong className={styles.price}>
          {market.price}
        </strong>

        <span
          className={
            market.positive
              ? styles.positive
              : styles.negative
          }
        >
          {market.change}
        </span>
      </div>
    </article>
  );
}