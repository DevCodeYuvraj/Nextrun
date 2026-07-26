"use client";

import {
  MdArrowDropUp,
  MdArrowDropDown,
} from "react-icons/md";

import styles from "./BankingChartCard.module.css";

const MAX_VALUE = 200;

function Sparkline({ values }) {
  const width = 115;
  const height = 55;
  const padding = 4;

  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;

  const points = values
    .map((value, index) => {
      const x =
        padding +
        (index / (values.length - 1)) *
          (width - padding * 2);

      const y =
        height -
        padding -
        ((value - min) / range) *
          (height - padding * 2);

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      className={styles.sparkline}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
    >
      <polyline
        points={points}
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function BankingChartCard({
  data,
  variant,
}) {
  const isIncome = variant === "income";

  return (
    <section
      className={`${styles.card} ${
        isIncome
          ? styles.incomeCard
          : styles.expenseCard
      }`}
    >
      <div className={styles.header}>
        <div className={styles.overview}>
          <h3>{data.title}</h3>

          <Sparkline values={data.overview} />
        </div>

        <div className={styles.summary}>
          <div
            className={`${styles.change} ${
              isIncome
                ? styles.positive
                : styles.negative
            }`}
          >
            {data.trend === "up" ? (
              <MdArrowDropUp />
            ) : (
              <MdArrowDropDown />
            )}

            <span>+ {data.change}</span>
          </div>

          <strong>{data.amount}</strong>
        </div>
      </div>

      <div className={styles.chartArea}>
        <div className={styles.yAxis}>
          <span>200</span>
          <span>150</span>
          <span>100</span>
          <span>50</span>
          <span>0</span>
        </div>

        <div className={styles.chart}>
          <div className={styles.gridLines}>
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className={styles.bars}>
            {data.chart.map((item) => (
              <div
                key={item.day}
                className={styles.barGroup}
              >
                <div className={styles.barTrack}>
                  <div
                    className={styles.bar}
                    style={{
                      height: `${
                        (item.value /
                          MAX_VALUE) *
                        100
                      }%`,
                    }}
                  />
                </div>

                <span className={styles.day}>
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}