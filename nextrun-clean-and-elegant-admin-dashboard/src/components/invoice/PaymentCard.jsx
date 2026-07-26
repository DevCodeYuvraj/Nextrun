"use client";

import {
  MdWifi,
  MdCreditCard,
} from "react-icons/md";

import styles from "./PaymentCard.module.css";

export default function PaymentCard() {
  return (
    <section className={styles.card}>
      <div className={styles.top}>
        <div>
          <span className={styles.balanceLabel}>
            Current Balance
          </span>

          <h2>$4,811.21</h2>
        </div>

        <MdWifi className={styles.contactless} />
      </div>

      <div className={styles.middle}>
        <div className={styles.chip}>
          <span />
          <span />
          <span />
        </div>

        <div className={styles.number}>
          <span>4589</span>
          <span>4589</span>
          <span>4589</span>
          <span>4589</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.detail}>
          <span>Card Holder</span>
          <strong>Karen Smith</strong>
        </div>

        <div className={styles.detail}>
          <span>Expires</span>
          <strong>08/28</strong>
        </div>

        <MdCreditCard className={styles.cardIcon} />
      </div>
    </section>
  );
}