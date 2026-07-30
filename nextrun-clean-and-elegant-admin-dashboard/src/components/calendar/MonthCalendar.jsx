"use client";

import {
  useMemo,
} from "react";

import {
  calendarWeekDays,
} from "@/data/calendarData";

import CalendarDay from "./CalendarDay";

import styles from "./MonthCalendar.module.css";

function formatDateKey(date) {
  const year =
    date.getFullYear();

  const month =
    String(
      date.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      date.getDate()
    ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function createCalendarDays(
  currentDate
) {
  const year =
    currentDate.getFullYear();

  const month =
    currentDate.getMonth();

  const firstDay =
    new Date(year, month, 1);

  const startDate =
    new Date(
      year,
      month,
      1 - firstDay.getDay()
    );

  return Array.from(
    { length: 35 },
    (_, index) => {
      const date =
        new Date(startDate);

      date.setDate(
        startDate.getDate() +
          index
      );

      return {
        date,
        key:
          formatDateKey(date),
        day: date.getDate(),
        currentMonth:
          date.getMonth() ===
          month,
      };
    }
  );
}

export default function MonthCalendar({
  events,
  currentDate,
  selectedDate,
  onSelectDate,
  onEventClick,
}) {
  const days = useMemo(
    () =>
      createCalendarDays(
        currentDate
      ),
    [currentDate]
  );

  return (
    <div className={styles.calendar}>
      <div
        className={
          styles.weekHeader
        }
      >
        {calendarWeekDays.map(
          (day) => (
            <div key={day}>
              {day}
            </div>
          )
        )}
      </div>

      <div className={styles.grid}>
        {days.map((day) => (
          <CalendarDay
            key={day.key}
            day={day}
            events={events}
            selected={
              selectedDate ===
              day.key
            }
            onSelect={() =>
              onSelectDate(day.key)
            }
            onEventClick={
              onEventClick
            }
          />
        ))}
      </div>
    </div>
  );
}