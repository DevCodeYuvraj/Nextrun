"use client";

import { useEffect, useState } from "react";

import {
  MdClose,
  MdPersonAddAlt1,
} from "react-icons/md";

import styles from "./AddContactModal.module.css";

const EMPTY_FORM = {
  name: "",
  role: "",
};

export default function AddContactModal({
  open,
  onClose,
  onAdd,
}) {
  const [form, setForm] =
    useState(EMPTY_FORM);

  const [error, setError] =
    useState("");

  useEffect(() => {
    if (!open) {
      setForm(EMPTY_FORM);
      setError("");
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name =
      form.name.trim();

    const role =
      form.role.trim();

    if (!name) {
      setError(
        "Contact name is required."
      );
      return;
    }

    onAdd({
      name,
      role:
        role ||
        "Marketing Manager",
    });

    setForm(EMPTY_FORM);
  };

  return (
    <div
      className={styles.overlay}
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <section className={styles.modal}>
        <div className={styles.header}>
          <div>
            <span
              className={
                styles.headerIcon
              }
            >
              <MdPersonAddAlt1 />
            </span>

            <div>
              <h3>Add Contact</h3>
              <p>
                Create a new contact
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={styles.close}
            aria-label="Close"
          >
            <MdClose />
          </button>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <label>
            <span>Name</span>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Contact name"
              autoFocus
            />
          </label>

          <label>
            <span>Position</span>

            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Marketing Manager"
            />
          </label>

          {error && (
            <p className={styles.error}>
              {error}
            </p>
          )}

          <div className={styles.actions}>
            <button
              type="button"
              className={
                styles.cancel
              }
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className={styles.add}
            >
              Add Contact
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}