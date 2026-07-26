"use client";

import {
  MdCalendarToday,
  MdAccessTime,
} from "react-icons/md";

import styles from "./ScheduleCard.module.css";

export default function ScheduleCard({
  schedule,
}) {
  return (
    <article className={styles.card}>
      <h4>{schedule.title}</h4>

      <div className={styles.details}>
        <div className={styles.detail}>
          <MdCalendarToday
            className={styles.calendar}
          />

          <span>{schedule.date}</span>
        </div>

        <div className={styles.detail}>
          <MdAccessTime
            className={styles.clock}
          />

          <span>{schedule.time}</span>
        </div>
      </div>
    </article>
  );
}