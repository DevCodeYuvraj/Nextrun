"use client";

import styles from "./SummaryCard.module.css";

import {
  BitcoinLogo,
  RippleLogo,
  EthereumLogo,
  LitecoinLogo,
} from "./CryptoLogos";

const logos = {
  Bitcoin: BitcoinLogo,
  Ripplecoin: RippleLogo,
  Ethereum: EthereumLogo,
  Litecoin: LitecoinLogo,
};

const chartPaths = {
  bitcoin:
    "M0 42 C12 18 24 52 36 28 C48 8 60 42 72 18 C84 2 96 36 108 12 C120 38 132 10 144 30 C156 8 170 32 182 14 C188 10 191 16 194 12",

  ripple:
    "M0 44 C12 22 24 50 36 24 C48 6 60 40 72 16 C84 4 96 34 108 12 C120 36 132 14 144 28 C156 8 170 30 182 16 C188 12 191 18 194 14",

  ethereum:
    "M0 18 C12 42 24 10 36 34 C48 54 60 18 72 44 C84 14 96 48 108 24 C120 46 132 18 144 40 C156 16 170 42 182 22 C188 18 191 28 194 24",

  litecoin:
    "M0 40 C12 18 24 50 36 24 C48 6 60 38 72 14 C84 2 96 34 108 10 C120 36 132 12 144 28 C156 8 170 30 182 14 C188 10 191 18 194 12",
};

export default function SummaryCard({ coin }) {
  const Logo = logos[coin.name] || BitcoinLogo;

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <Logo size={42} />

        <div className={styles.details}>
          <h3>{coin.name}</h3>

          <span className={styles.symbol}>
            {coin.symbol}
          </span>

          <strong className={styles.price}>
            {coin.price}
          </strong>

          <span
            className={`${styles.change} ${coin.positive
                ? styles.positive
                : styles.negative
              }`}
          >
            {coin.change}
          </span>
        </div>
      </div>

      <div className={styles.chart}>
        <svg
          viewBox="0 0 194 60"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className={styles.chartLine}
            style={{ stroke: coin.chartColor }}
            d={chartPaths[coin.chart]}
          />
        </svg>
      </div>
    </article>
  );
}