"use client";

import styles from "./CalendarEvent.module.css";

const DAY_MS =
  24 * 60 * 60 * 1000;

function parseDate(date) {
  const [
    year,
    month,
    day,
  ] = date
    .split("-")
    .map(Number);

  return new Date(
    year,
    month - 1,
    day
  );
}

function getSpan(event) {
  if (
    !event.endDate ||
    event.endDate === event.date
  ) {
    return 1;
  }

  const start =
    parseDate(event.date);

  const end =
    parseDate(event.endDate);

  return Math.max(
    1,
    Math.round(
      (end - start) / DAY_MS
    ) + 1
  );
}

export default function CalendarEvent({
  event,
  onClick,
}) {
  const span = getSpan(event);

  return (
    <button
      type="button"
      className={`${styles.event} ${
        styles[event.color] ||
        styles.blue
      }`}
      style={{
        width:
          span > 1
            ? `calc(${span * 100}% + ${
                (span - 1) * 15
              }px)`
            : "100%",
      }}
      onClick={(clickEvent) => {
        clickEvent.stopPropagation();
        onClick();
      }}
      title={event.title}
    >
      {event.title}
    </button>
  );
}