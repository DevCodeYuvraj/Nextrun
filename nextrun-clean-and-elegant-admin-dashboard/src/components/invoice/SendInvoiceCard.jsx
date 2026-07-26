// src/components/invoice/SendInvoiceCard.jsx

"use client";

import { useState } from "react";
import RecipientList from "./RecipientList";

import {
  recipients,
  currencies,
} from "@/data/invoiceData";

import styles from "./SendInvoiceCard.module.css";

export default function SendInvoiceCard() {
  const [recipient, setRecipient] =
    useState(recipients[0].name);

  const [currency, setCurrency] =
    useState(currencies[0]);

  const [amount, setAmount] =
    useState("");

  const handleSend = () => {
    alert(`Invoice sent to ${recipient}`);
  };

  return (
    <>
      <RecipientList />

      <div className={styles.card}>
        <h3>Send Invoice</h3>

        <div className={styles.group}>
          <label>Recipient</label>

          <select
            value={recipient}
            onChange={(e) =>
              setRecipient(e.target.value)
            }
          >
            {recipients.map((person) => (
              <option
                key={person.id}
              >
                {person.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.group}>
          <label>Currency</label>

          <select
            value={currency}
            onChange={(e) =>
              setCurrency(e.target.value)
            }
          >
            {currencies.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.group}>
          <label>Amount</label>

          <input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
          />
        </div>

        <button
          className={styles.button}
          onClick={handleSend}
        >
          Send Invoice
        </button>
      </div>
    </>
  );
}