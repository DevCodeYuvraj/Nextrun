"use client";

import CalendarEvent from "./CalendarEvent";

import styles from "./CalendarDay.module.css";

export default function CalendarDay({
  day,
  events,
  selected,
  onSelect,
  onEventClick,
}) {
  const startingEvents =
    events.filter(
      (event) =>
        event.date === day.key
    );

  return (
    <div
      className={`${styles.day} ${
        selected
          ? styles.selected
          : ""
      }`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          onSelect();
        }
      }}
    >
      <span
        className={`${styles.number} ${
          !day.currentMonth
            ? styles.muted
            : ""
        }`}
      >
        {day.day}
      </span>

      <div
        className={
          styles.events
        }
      >
        {startingEvents.map(
          (calendarEvent) => (
            <CalendarEvent
              key={
                calendarEvent.id
              }
              event={
                calendarEvent
              }
              onClick={() =>
                onEventClick(
                  calendarEvent
                )
              }
            />
          )
        )}
      </div>
    </div>
  );
}