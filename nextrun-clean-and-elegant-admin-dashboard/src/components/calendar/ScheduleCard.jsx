"use client";

import {
  MdCalendarToday,
  MdLocationOn,
  MdAccessTime,
} from "react-icons/md";

import styles from "./ScheduleCard.module.css";

function formatDate(value) {
  const [year, month, day] =
    value.split("-").map(Number);

  return new Date(
    year,
    month - 1,
    day
  ).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );
}

function formatTime(time) {
  if (!time) return "";

  const [hour, minute] =
    time.split(":").map(Number);

  const period =
    hour >= 12 ? "PM" : "AM";

  const formattedHour =
    hour % 12 || 12;

  return `${String(
    formattedHour
  ).padStart(2, "0")}.${String(
    minute
  ).padStart(2, "0")} ${period}`;
}

export default function ScheduleCard({
  schedule,
  onClick,
}) {
  return (
    <button
      type="button"
      className={styles.card}
      onClick={onClick}
    >
      <span
        className={`${styles.marker} ${
          styles[schedule.color] ||
          styles.blue
        }`}
      />

      <div className={styles.content}>
        <h4>{schedule.title}</h4>

        <div className={styles.meta}>
          <span>
            <MdLocationOn />

            {schedule.location ||
              "Sanctuary Studio"}
          </span>

          <span>
            <MdCalendarToday />

            {formatDate(schedule.date)}
          </span>

          <span>
            <MdAccessTime />

            {formatTime(
              schedule.startTime
            )}{" "}
            -{" "}
            {formatTime(
              schedule.endTime
            )}
          </span>
        </div>
      </div>
    </button>
  );
}