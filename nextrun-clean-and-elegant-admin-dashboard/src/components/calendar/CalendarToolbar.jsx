"use client";

import {
  MdAdd,
  MdKeyboardArrowDown,
} from "react-icons/md";

import styles from "./CalendarToolbar.module.css";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function CalendarToolbar({
  view,
  currentDate,
  onViewChange,
  onDateChange,
  onNewSchedule,
}) {
  const month =
    currentDate.getMonth();

  const year =
    currentDate.getFullYear();

  const handleMonthChange = (
    event
  ) => {
    onDateChange(
      new Date(
        year,
        Number(event.target.value),
        1
      )
    );
  };

  return (
    <div className={styles.toolbar}>
      <div
        className={
          styles.monthSelector
        }
      >
        <select
          value={month}
          onChange={
            handleMonthChange
          }
          aria-label="Select month"
        >
          {MONTHS.map(
            (monthName, index) => (
              <option
                key={monthName}
                value={index}
              >
                {monthName} {year}
              </option>
            )
          )}
        </select>

        <MdKeyboardArrowDown />
      </div>

      <div className={styles.actions}>
        <div
          className={
            styles.viewButtons
          }
        >
          <button
            type="button"
            className={
              view === "month"
                ? styles.active
                : ""
            }
            onClick={() =>
              onViewChange("month")
            }
          >
            Monthly
          </button>

          <button
            type="button"
            className={
              view === "week"
                ? styles.active
                : ""
            }
            onClick={() =>
              onViewChange("week")
            }
          >
            Weekly
          </button>

          <button
            type="button"
            className={
              view === "day"
                ? styles.active
                : ""
            }
            onClick={() =>
              onViewChange("day")
            }
          >
            Day
          </button>
        </div>

        <button
          type="button"
          className={
            styles.newSchedule
          }
          onClick={onNewSchedule}
        >
          <MdAdd />

          <span>
            New Schedule
          </span>
        </button>
      </div>
    </div>
  );
}