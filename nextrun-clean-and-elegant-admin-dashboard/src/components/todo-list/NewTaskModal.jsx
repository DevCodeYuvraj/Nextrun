"use client";

import {
  useState,
} from "react";

import {
  MdClose,
} from "react-icons/md";

import styles from "./NewTaskModal.module.css";

const INITIAL_FORM = {
  title: "",
  date: "2 March 2021",
  time: "12:30 PM",
  priority: "normal",
};

export default function NewTaskModal({
  open,
  onClose,
  onAdd,
}) {
  const [form, setForm] =
    useState(INITIAL_FORM);

  const [error, setError] =
    useState("");

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

    if (!form.title.trim()) {
      setError(
        "Task title is required."
      );

      return;
    }

    onAdd({
      ...form,
      title: form.title.trim(),
    });

    setForm(INITIAL_FORM);
    setError("");
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
          <div>
            <h3>New Task</h3>

            <p>
              Create a new task
            </p>
          </div>

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
              placeholder="Task name"
              autoFocus
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

          {error && (
            <p className={styles.error}>
              {error}
            </p>
          )}

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
              Create Task
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}