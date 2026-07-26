"use client";

import { useState } from "react";

import {
  earningCategories,
} from "@/data/bankingData";

import styles from "./EarningCategories.module.css";

export default function EarningCategories() {
  const [expanded, setExpanded] =
    useState(false);

  const visibleCategories = expanded
    ? [
        ...earningCategories,
        {
          id: 5,
          title: "Other Income",
          amount: "$50",
          target: "$1000",
          progress: 35,
          type: "other",
        },
        {
          id: 6,
          title: "Savings",
          amount: "$50",
          target: "$1000",
          progress: 47,
          type: "savings",
        },
      ]
    : earningCategories;

  return (
    <section className={styles.card}>
      <h3>Earning Categories</h3>

      <div className={styles.categories}>
        {visibleCategories.map(
          (category) => (
            <div
              key={category.id}
              className={styles.category}
            >
              <span
                className={styles.title}
              >
                {category.title}
              </span>

              <div
                className={styles.track}
              >
                <span
                  className={`${styles.progress} ${
                    styles[
                      category.type
                    ] || styles.other
                  }`}
                  style={{
                    width: `${category.progress}%`,
                  }}
                />
              </div>

              <p>
                {category.amount} / from{" "}
                <span
                  className={
                    styles[
                      category.type
                    ] || styles.otherText
                  }
                >
                  {category.target}
                </span>
              </p>
            </div>
          )
        )}
      </div>

      <button
        type="button"
        className={styles.viewMore}
        onClick={() =>
          setExpanded(
            (previous) => !previous
          )
        }
      >
        {expanded
          ? "View less"
          : "View more"}
      </button>
    </section>
  );
}