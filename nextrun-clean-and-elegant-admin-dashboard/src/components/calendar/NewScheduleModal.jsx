"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  MdClose,
  MdEvent,
} from "react-icons/md";

import {
  calendarColors,
} from "@/data/calendarData";

import styles from "./NewScheduleModal.module.css";

const EMPTY_FORM = {
  title: "",
  date: "",
  endDate: "",
  startTime: "",
  endTime: "",
  location: "",
  color: "blue",
};

export default function NewScheduleModal({
  open,
  selectedDate,
  onClose,
  onAdd,
}) {
  const [form, setForm] =
    useState(EMPTY_FORM);

  const [error, setError] =
    useState("");

  useEffect(() => {
    if (open) {
      setForm({
        ...EMPTY_FORM,
        date:
          selectedDate ||
          EMPTY_FORM.date,
        endDate:
          selectedDate ||
          EMPTY_FORM.endDate,
      });

      setError("");
    }
  }, [open, selectedDate]);

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
        "Schedule title is required."
      );
      return;
    }

    if (!form.date) {
      setError(
        "Schedule date is required."
      );
      return;
    }

    if (
      form.endDate &&
      form.endDate < form.date
    ) {
      setError(
        "End date cannot be before start date."
      );
      return;
    }

    if (
      form.startTime &&
      form.endTime &&
      form.endDate === form.date &&
      form.endTime <= form.startTime
    ) {
      setError(
        "End time must be after start time."
      );
      return;
    }

    onAdd({
      ...form,
      title: form.title.trim(),
      location:
        form.location.trim(),
      endDate:
        form.endDate ||
        form.date,
      startTime:
        form.startTime ||
        "09:00",
      endTime:
        form.endTime ||
        "10:00",
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
          <div>
            <span className={styles.icon}>
              <MdEvent />
            </span>

            <div>
              <h3>New Schedule</h3>

              <p>
                Add a new calendar
                schedule
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
          >
            <MdClose />
          </button>
        </header>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <label
            className={styles.full}
          >
            <span>Schedule Title</span>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Schedule title"
              autoFocus
            />
          </label>

          <div className={styles.columns}>
            <label>
              <span>Start Date</span>

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </label>

            <label>
              <span>End Date</span>

              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className={styles.columns}>
            <label>
              <span>Start Time</span>

              <input
                type="time"
                name="startTime"
                value={form.startTime}
                onChange={handleChange}
              />
            </label>

            <label>
              <span>End Time</span>

              <input
                type="time"
                name="endTime"
                value={form.endTime}
                onChange={handleChange}
              />
            </label>
          </div>

          <label
            className={styles.full}
          >
            <span>Location</span>

            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Schedule location"
            />
          </label>

          <label
            className={styles.full}
          >
            <span>Color</span>

            <select
              name="color"
              value={form.color}
              onChange={handleChange}
            >
              {calendarColors.map(
                (color) => (
                  <option
                    key={color}
                    value={color}
                  >
                    {color
                      .charAt(0)
                      .toUpperCase() +
                      color.slice(1)}
                  </option>
                )
              )}
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
              className={styles.create}
            >
              Create Schedule
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}