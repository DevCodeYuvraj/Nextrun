"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  MdClose,
} from "react-icons/md";

import styles from "./EditTaskModal.module.css";

export default function EditTaskModal({
  task,
  onClose,
  onSave,
}) {
  const [form, setForm] =
    useState(null);

  useEffect(() => {
    if (task) {
      setForm({ ...task });
    }
  }, [task]);

  if (!task || !form) {
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.title.trim()) {
      return;
    }

    onSave({
      ...form,
      title: form.title.trim(),
    });
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
        <header className={styles.header}>
          <h3>Edit Task</h3>

          <button
            type="button"
            onClick={onClose}
          >
            <MdClose />
          </button>
        </header>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <label>
            <span>Task Name</span>

            <input
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </label>

          <div className={styles.columns}>
            <label>
              <span>Date</span>

              <input
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </label>

            <label>
              <span>Time</span>

              <input
                name="time"
                value={form.time}
                onChange={handleChange}
              />
            </label>
          </div>

          <label>
            <span>Priority</span>

            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
            >
              <option value="high">
                High
              </option>

              <option value="medium">
                Medium
              </option>

              <option value="normal">
                Normal
              </option>
            </select>
          </label>

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
      </section>
    </div>
  );
}