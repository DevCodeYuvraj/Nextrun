"use client";

import styles from "./DayCalendar.module.css";

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");
  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatHeading(date) {
  return date.toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );
}

export default function DayCalendar({
  events,
  currentDate,
  selectedDate,
  onSelectDate,
  onEventClick,
}) {
  const fallback =
    dateKey(currentDate);

  const activeDate =
    selectedDate || fallback;

  const dateParts = activeDate
    .split("-")
    .map(Number);

  const displayDate = new Date(
    dateParts[0],
    dateParts[1] - 1,
    dateParts[2]
  );

  const dayEvents = events.filter(
    (event) =>
      activeDate >= event.date &&
      activeDate <=
        (event.endDate || event.date)
  );

  const changeDay = (amount) => {
    const next = new Date(displayDate);

    next.setDate(
      displayDate.getDate() + amount
    );

    onSelectDate(dateKey(next));
  };

  return (
    <div className={styles.dayView}>
      <div className={styles.heading}>
        <button
          type="button"
          onClick={() => changeDay(-1)}
        >
          ‹
        </button>

        <h3>
          {formatHeading(displayDate)}
        </h3>

        <button
          type="button"
          onClick={() => changeDay(1)}
        >
          ›
        </button>
      </div>

      <div className={styles.timeline}>
        {dayEvents.length > 0 ? (
          dayEvents.map((event) => (
            <button
              key={event.id}
              type="button"
              className={styles.row}
              onClick={() =>
                onEventClick(event)
              }
            >
              <div
                className={styles.time}
              >
                <strong>
                  {event.startTime}
                </strong>

                <span>
                  {event.endTime}
                </span>
              </div>

              <div
                className={`${styles.event} ${
                  styles[event.color] ||
                  styles.blue
                }`}
              >
                <strong>
                  {event.title}
                </strong>

                <span>
                  {event.location ||
                    "Schedule"}
                </span>
              </div>
            </button>
          ))
        ) : (
          <div className={styles.empty}>
            No schedules for this day.
          </div>
        )}
      </div>
    </div>
  );
}