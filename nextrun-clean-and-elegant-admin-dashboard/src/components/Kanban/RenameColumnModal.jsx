"use client";

import { useEffect, useState } from "react";
import styles from "./RenameColumnModal.module.css";

export default function RenameColumnModal({
  open,
  column,
  onClose,
  onSave,
}) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (column) {
      setName(column.title);
    }
  }, [column]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    onSave(name.trim());
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>Rename Column</h3>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Column Name</label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              autoFocus
            />
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}