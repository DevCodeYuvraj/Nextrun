"use client";

import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

import styles from "./EditInvoiceModal.module.css";

export default function EditInvoiceModal({
  open,
  invoice,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState({
    invoice: "",
    customer: "",
    date: "",
    status: "Pending",
  });

  useEffect(() => {
    if (!invoice) return;

    setForm({
      invoice: invoice.invoice || "",
      customer: invoice.customer || "",
      date: invoice.date || "",
      status: invoice.status || "Pending",
    });
  }, [invoice]);

  if (!open || !invoice) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.invoice.trim() ||
      !form.customer.trim() ||
      !form.date.trim()
    ) {
      return;
    }

    onSave({
      ...invoice,
      ...form,
    });
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
            <span>Edit Invoice</span>
            <h2>{invoice.invoice}</h2>
          </div>

          <button
            type="button"
            className={styles.close}
            onClick={onClose}
          >
            <MdClose />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label>Invoice ID</label>

            <input
              name="invoice"
              value={form.invoice}
              onChange={handleChange}
            />
          </div>

          <div className={styles.group}>
            <label>Customer</label>

            <input
              name="customer"
              value={form.customer}
              onChange={handleChange}
            />
          </div>

          <div className={styles.group}>
            <label>Date</label>

            <input
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </div>

          <div className={styles.group}>
            <label>Status</label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancel}
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className={styles.save}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}