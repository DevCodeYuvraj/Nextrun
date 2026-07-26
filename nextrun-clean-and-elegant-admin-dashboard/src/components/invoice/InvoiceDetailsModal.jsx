"use client";

import {
  MdClose,
  MdPrint,
} from "react-icons/md";

import StatusBadge from "./StatusBadge";
import styles from "./InvoiceDetailsModal.module.css";

export default function InvoiceDetailsModal({
  open,
  invoice,
  onClose,
}) {
  if (!open || !invoice) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className={styles.overlay}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <div>
            <span className={styles.label}>
              Invoice Details
            </span>

            <h2>{invoice.invoice}</h2>
          </div>

          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close"
          >
            <MdClose />
          </button>
        </div>

        <div className={styles.customer}>
          <div className={styles.avatar}>
            {invoice.customer
              .split(" ")
              .map((word) => word[0])
              .slice(0, 2)
              .join("")}
          </div>

          <div>
            <span>Customer</span>
            <strong>{invoice.customer}</strong>
          </div>
        </div>

        <div className={styles.details}>
          <div>
            <span>Invoice ID</span>
            <strong>{invoice.invoice}</strong>
          </div>

          <div>
            <span>Date</span>
            <strong>{invoice.date}</strong>
          </div>

          <div>
            <span>Status</span>
            <StatusBadge status={invoice.status} />
          </div>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.cancel}
            onClick={onClose}
          >
            Close
          </button>

          <button
            type="button"
            className={styles.print}
            onClick={handlePrint}
          >
            <MdPrint />
            Print Invoice
          </button>
        </div>
      </div>
    </div>
  );
}