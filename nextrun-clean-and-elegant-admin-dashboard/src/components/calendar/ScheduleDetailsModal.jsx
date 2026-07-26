"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  MdClose,
  MdDeleteOutline,
  MdEdit,
  MdLocationOn,
  MdCalendarToday,
  MdAccessTime,
} from "react-icons/md";

import styles from "./ScheduleDetailsModal.module.css";

export default function ScheduleDetailsModal({
  open,
  event,
  onClose,
  onUpdate,
  onDelete,
}) {
  const [editing, setEditing] =
    useState(false);

  const [form, setForm] =
    useState(null);

  useEffect(() => {
    if (event) {
      setForm({ ...event });
      setEditing(false);
    }
  }, [event, open]);

  if (!open || !event || !form) {
    return null;
  }

  const handleChange = (
    changeEvent
  ) => {
    const {
      name,
      value,
    } = changeEvent.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (!form.title.trim()) {
      return;
    }

    onUpdate({
      ...form,
      title: form.title.trim(),
      endDate:
        form.endDate || form.date,
    });

    setEditing(false);
  };

  return (
    <div
      className={styles.overlay}
      onMouseDown={(clickEvent) => {
        if (
          clickEvent.target ===
          clickEvent.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <section className={styles.modal}>
        <header className={styles.header}>
          <h3>Schedule Details</h3>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
          >
            <MdClose />
          </button>
        </header>

        {editing ? (
          <div className={styles.editForm}>
            <label>
              <span>Title</span>

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
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
                  value={
                    form.endDate ||
                    form.date
                  }
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
                  value={
                    form.startTime || ""
                  }
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>End Time</span>

                <input
                  type="time"
                  name="endTime"
                  value={
                    form.endTime || ""
                  }
                  onChange={handleChange}
                />
              </label>
            </div>

            <label>
              <span>Location</span>

              <input
                name="location"
                value={
                  form.location || ""
                }
                onChange={handleChange}
              />
            </label>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.cancel}
                onClick={() => {
                  setForm({ ...event });
                  setEditing(false);
                }}
              >
                Cancel
              </button>

              <button
                type="button"
                className={styles.save}
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <>
            <div
              className={
                styles.details
              }
            >
              <span
                className={`${styles.marker} ${
                  styles[event.color] ||
                  styles.blue
                }`}
              />

              <h2>{event.title}</h2>

              <div className={styles.meta}>
                <span>
                  <MdLocationOn />

                  {event.location ||
                    "No location"}
                </span>

                <span>
                  <MdCalendarToday />

                  {event.date}

                  {event.endDate &&
                    event.endDate !==
                      event.date &&
                    ` - ${event.endDate}`}
                </span>

                <span>
                  <MdAccessTime />

                  {event.startTime ||
                    "--:--"}{" "}
                  -{" "}
                  {event.endTime ||
                    "--:--"}
                </span>
              </div>
            </div>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.delete}
                onClick={() => {
                  if (
                    window.confirm(
                      "Delete this schedule?"
                    )
                  ) {
                    onDelete(event.id);
                  }
                }}
              >
                <MdDeleteOutline />

                Delete
              </button>

              <button
                type="button"
                className={styles.save}
                onClick={() =>
                  setEditing(true)
                }
              >
                <MdEdit />

                Edit Schedule
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}