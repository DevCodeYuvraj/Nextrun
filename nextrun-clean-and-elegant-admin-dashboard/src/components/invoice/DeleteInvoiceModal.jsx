"use client";

import {
  MdClose,
  MdDeleteOutline,
} from "react-icons/md";

import styles from "./DeleteInvoiceModal.module.css";

export default function DeleteInvoiceModal({
  open,
  invoice,
  onClose,
  onConfirm,
}) {
  if (!open || !invoice) return null;

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
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
        >
          <MdClose />
        </button>

        <div className={styles.deleteIcon}>
          <MdDeleteOutline />
        </div>

        <h2>Delete Invoice?</h2>

        <p>
          Are you sure you want to delete{" "}
          <strong>{invoice.invoice}</strong> for{" "}
          <strong>{invoice.customer}</strong>?
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.cancel}
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className={styles.delete}
            onClick={() => onConfirm(invoice.id)}
          >
            Delete Invoice
          </button>
        </div>
      </div>
    </div>
  );
}