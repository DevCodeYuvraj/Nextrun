"use client";

import {
  MdDoneAll,
  MdCheckCircle,
  MdError,
  MdCancel,
  MdArrowDropUp,
  MdArrowDropDown,
} from "react-icons/md";

import styles from "./InvoiceStats.module.css";

const stats = [
  {
    id: 1,
    title: "Invoice Sent",
    value: "932",
    change: "2.0%",
    trend: "up",
    type: "sent",
    icon: MdDoneAll,
  },
  {
    id: 2,
    title: "Paid Invoice",
    value: "480",
    change: "2.0%",
    trend: "up",
    type: "paid",
    icon: MdCheckCircle,
  },
  {
    id: 3,
    title: "Pending Invoice",
    value: "560",
    change: "3.0%",
    trend: "down",
    type: "pending",
    icon: MdError,
  },
  {
    id: 4,
    title: "Unpaid Invoice",
    value: "231",
    change: "5.0%",
    trend: "down",
    type: "unpaid",
    icon: MdCancel,
  },
];

export default function InvoiceStats() {
  return (
    <section className={styles.stats}>
      {stats.map((stat) => {
        const Icon = stat.icon;
        const TrendIcon =
          stat.trend === "up"
            ? MdArrowDropUp
            : MdArrowDropDown;

        return (
          <article
            key={stat.id}
            className={styles.stat}
          >
            <div className={styles.content}>
              <span className={styles.title}>
                {stat.title}
              </span>

              <div className={styles.numberRow}>
                <strong className={styles.value}>
                  {stat.value}
                </strong>

                <span
                  className={`${styles.change} ${
                    stat.trend === "up"
                      ? styles.up
                      : styles.down
                  }`}
                >
                  <TrendIcon />
                  {stat.change}
                </span>
              </div>
            </div>

            <div
              className={`${styles.iconBox} ${
                styles[stat.type]
              }`}
            >
              <Icon />
            </div>
          </article>
        );
      })}
    </section>
  );
}