// src/components/invoice/PreviewCard.jsx

"use client";

import { MdCreditCard } from "react-icons/md";
import styles from "./PreviewCard.module.css";

export default function PreviewCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <span className={styles.label}>
            Balance
          </span>

          <h2>$4,811.21</h2>
        </div>

        <MdCreditCard className={styles.logo} />
      </div>

      <div className={styles.chip}></div>

      <div className={styles.number}>
        •••• •••• •••• 1234
      </div>

      <div className={styles.footer}>
        <div>
          <small>Valid Thru</small>
          <strong>03/21</strong>
        </div>

        <div>
          <small>Card Holder</small>
          <strong>Karen</strong>
        </div>
      </div>
    </div>
  );
}