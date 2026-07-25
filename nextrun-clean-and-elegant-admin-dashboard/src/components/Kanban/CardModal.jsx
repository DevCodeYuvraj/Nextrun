"use client";

import { useEffect, useState } from "react";
import styles from "./CardModal.module.css";

const emptyCard = {
  title: "",
  priority: "Medium",
  dueDate: "",
};

export default function CardModal({
  open,
  mode,
  initialData,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState(emptyCard);

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title || "",
        priority: initialData.priority || "Medium",
        dueDate: initialData.dueDate || "",
      });
    } else {
      setForm(emptyCard);
    }
  }, [initialData]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) return;

    onSave(form);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>
          {mode === "edit"
            ? "Edit Card"
            : "Add Card"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Title</label>

            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Task title"
            />
          </div>

          <div className={styles.field}>
            <label>Priority</label>

            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
              <option>Completed</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>Due Date</label>

            <input
              name="dueDate"
              value={form.dueDate}
              onChange={handleChange}
              placeholder="2 March 2021, 12:30 PM"
            />
          </div>

          <div className={styles.footer}>
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