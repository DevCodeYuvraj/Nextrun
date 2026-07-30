"use client";

import styles from "./WeeklyCalendar.module.css";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getWeek(currentDate) {
  const start = new Date(currentDate);

  start.setDate(
    currentDate.getDate() -
      currentDate.getDay()
  );

  return Array.from(
    { length: 7 },
    (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);

      return {
        date,
        key: dateKey(date),
      };
    }
  );
}

export default function WeeklyCalendar({
  events,
  currentDate,
  selectedDate,
  onSelectDate,
  onEventClick,
}) {
  const week = getWeek(currentDate);

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {week.map((day, index) => {
          const dayEvents = events.filter(
            (event) =>
              day.key >= event.date &&
              day.key <=
                (event.endDate || event.date)
          );

          return (
            <div
              key={day.key}
              className={`${styles.day} ${
                selectedDate === day.key
                  ? styles.selected
                  : ""
              }`}
              onClick={() =>
                onSelectDate(day.key)
              }
            >
              <div className={styles.header}>
                <span>{DAYS[index]}</span>

                <strong>
                  {day.date.getDate()}
                </strong>
              </div>

              <div className={styles.events}>
                {dayEvents.map((event) => (
                  <button
                    key={event.id}
                    type="button"
                    className={`${styles.event} ${
                      styles[event.color] ||
                      styles.blue
                    }`}
                    onClick={(clickEvent) => {
                      clickEvent.stopPropagation();
                      onEventClick(event);
                    }}
                  >
                    <strong>
                      {event.title}
                    </strong>

                    <span>
                      {event.startTime} -{" "}
                      {event.endTime}
                    </span>
                  </button>
                ))}

                {dayEvents.length === 0 && (
                  <span
                    className={
                      styles.noSchedule
                    }
                  >
                    No schedule
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}