// src/components/invoice/RecipientList.jsx

"use client";

import { recipients } from "@/data/invoiceData";
import styles from "./RecipientList.module.css";

export default function RecipientList() {
  return (
    <div className={styles.card}>
      <h3>Recent Recipient</h3>

      <div className={styles.row}>
        {recipients.map((person) => (
          <div
            key={person.id}
            className={styles.person}
          >
            <div className={styles.avatar}>
              {person.name.charAt(0)}
            </div>

            <span>{person.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}