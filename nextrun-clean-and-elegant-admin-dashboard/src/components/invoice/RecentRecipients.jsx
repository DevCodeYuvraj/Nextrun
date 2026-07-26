"use client";

import { recentRecipients } from "@/data/invoiceData";

import styles from "./RecentRecipients.module.css";

export default function RecentRecipients() {
  return (
    <section className={styles.card}>
      <h3>Recent Recipient</h3>

      <div className={styles.recipients}>
        {recentRecipients.map((recipient) => (
          <button
            key={recipient.id}
            type="button"
            className={styles.recipient}
          >
            <span className={styles.avatar}>
              {recipient.initials}
            </span>

            <span className={styles.name}>
              {recipient.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}