"use client";

import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

import styles from "./SendInvoiceForm.module.css";

export default function SendInvoiceForm() {
  const [recipient, setRecipient] = useState("Jordan");
  const [currency, setCurrency] = useState("Bitcoin");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!amount.trim()) {
      return;
    }

    setAmount("");
  };

  return (
    <section className={styles.card}>
      <h3>Send Invoice</h3>

      <form onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="invoice-recipient">
            Recipient
          </label>

          <div className={styles.selectWrapper}>
            <select
              id="invoice-recipient"
              value={recipient}
              onChange={(event) =>
                setRecipient(event.target.value)
              }
            >
              <option value="Jordan">Jordan</option>
              <option value="Tony">Tony</option>
              <option value="Karen">Karen</option>
              <option value="Alex">Alex</option>
            </select>

            <MdKeyboardArrowDown />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.field}>
            <label htmlFor="invoice-currency">
              Currency
            </label>

            <div className={styles.selectWrapper}>
              <select
                id="invoice-currency"
                value={currency}
                onChange={(event) =>
                  setCurrency(event.target.value)
                }
              >
                <option value="Bitcoin">
                  Bitcoin
                </option>

                <option value="Ethereum">
                  Ethereum
                </option>

                <option value="USD">
                  USD
                </option>
              </select>

              <MdKeyboardArrowDown />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="invoice-amount">
              Amount
            </label>

            <input
              id="invoice-amount"
              type="number"
              min="0"
              step="0.01"
              value={amount}
              placeholder="0.00"
              onChange={(event) =>
                setAmount(event.target.value)
              }
            />
          </div>
        </div>

        <button
          type="submit"
          className={styles.sendButton}
        >
          Send Invoice
        </button>
      </form>
    </section>
  );
}