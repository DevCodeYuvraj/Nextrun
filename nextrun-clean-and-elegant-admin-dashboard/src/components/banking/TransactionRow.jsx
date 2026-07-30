"use client";

import { useState } from "react";

import {
  MdContentCopy,
  MdPrint,
} from "react-icons/md";

import TransactionActionMenu from "./TransactionActionMenu";

import styles from "./TransactionRow.module.css";

export default function TransactionRow({
  transaction,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyInvoice = async () => {
    try {
      await navigator.clipboard.writeText(
        transaction.invoice
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1200);
    } catch {
      setCopied(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.row}>
      <div className={styles.customer}>
        <div className={styles.avatar} />

        <div className={styles.customerInfo}>
          <span>{transaction.email}</span>

          <strong>{transaction.company}</strong>
        </div>
      </div>

      <div className={styles.invoiceArea}>
        <button
          type="button"
          className={styles.invoiceIcon}
          onClick={handleCopyInvoice}
          aria-label={`Copy ${transaction.invoice}`}
          title={
            copied
              ? "Copied"
              : "Copy invoice number"
          }
        >
          <MdContentCopy />
        </button>

        <div className={styles.invoiceInfo}>
          <span>{transaction.date}</span>

          <strong>
            {transaction.invoice}
          </strong>
        </div>
      </div>

      <strong
        className={`${styles.amount} ${
          transaction.type === "income"
            ? styles.income
            : styles.expense
        }`}
      >
        {transaction.amount}
      </strong>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.printButton}
          onClick={handlePrint}
          aria-label={`Print ${transaction.invoice}`}
        >
          <MdPrint />
        </button>

        <TransactionActionMenu
          transaction={transaction}
          onCopy={handleCopyInvoice}
          onPrint={handlePrint}
        />
      </div>
    </div>
  );
}