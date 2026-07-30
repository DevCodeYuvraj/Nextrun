"use client";

import { useEffect, useState } from "react";

import {
  MdClose,
  MdAdd,
} from "react-icons/md";

import styles from "./ScheduleModal.module.css";

const EMPTY_FORM = {
  title: "",
  date: "",
  startTime: "",
  endTime: "",
};

function formatDate(value) {
  if (!value) {
    return "";
  }

  const date = new Date(
    `${value}T00:00:00`
  );

  return date.toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );
}

function formatTime(value) {
  if (!value) {
    return "";
  }

  const [hourString, minute] =
    value.split(":");

  const hour = Number(hourString);

  const period =
    hour >= 12 ? "PM" : "AM";

  const displayHour =
    hour % 12 || 12;

  return `${String(
    displayHour
  ).padStart(2, "0")}.${minute} ${period}`;
}

export default function ScheduleModal({
  open,
  onClose,
  onSave,
}) {
  const [form, setForm] =
    useState(EMPTY_FORM);

  useEffect(() => {
    if (!open) {
      setForm(EMPTY_FORM);
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } =
      event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.title.trim() ||
      !form.date ||
      !form.startTime ||
      !form.endTime
    ) {
      return;
    }

    onSave({
      title: form.title.trim(),
      date: formatDate(form.date),
      time: `${formatTime(
        form.startTime
      )} - ${formatTime(form.endTime)}`,
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
      <div className={styles.modal}>
        <div className={styles.header}>
          <div>
            <span>Ticketing</span>
            <h3>Add Schedule</h3>
          </div>

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
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
            <span>Schedule title</span>

            <input
              type="text"
              name="title"
              placeholder="Enter schedule title"
              value={form.title}
              onChange={handleChange}
              autoFocus
            />
          </label>

          <label>
            <span>Date</span>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </label>

          <div className={styles.timeGrid}>
            <label>
              <span>Start time</span>

              <input
                type="time"
                name="startTime"
                value={form.startTime}
                onChange={handleChange}
              />
            </label>

            <label>
              <span>End time</span>

              <input
                type="time"
                name="endTime"
                value={form.endTime}
                onChange={handleChange}
              />
            </label>
          </div>

          <button
            type="submit"
            className={styles.saveButton}
          >
            <MdAdd />
            Add Schedule
          </button>
        </form>
      </div>
    </div>
  );
}