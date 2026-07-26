"use client";

import ScheduleCard from "./ScheduleCard";

import styles from "./ScheduleDetails.module.css";

const INITIAL_VISIBLE = 4;

export default function ScheduleDetails({
  schedules,
  expanded,
  onToggleExpanded,
  onScheduleClick,
}) {
  const visibleSchedules = expanded
    ? schedules
    : schedules.slice(
        0,
        INITIAL_VISIBLE
      );

  return (
    <section className={styles.details}>
      <div className={styles.header}>
        <h3>Schedule Details</h3>

        <p>
          Thursday, 10th April , 2021
        </p>
      </div>

      <div className={styles.list}>
        {visibleSchedules.map(
          (schedule) => (
            <ScheduleCard
              key={schedule.id}
              schedule={schedule}
              onClick={() =>
                onScheduleClick(schedule)
              }
            />
          )
        )}

        {schedules.length === 0 && (
          <div className={styles.empty}>
            No schedules available.
          </div>
        )}
      </div>

      <button
        type="button"
        className={styles.viewMore}
        onClick={onToggleExpanded}
        disabled={
          schedules.length <=
          INITIAL_VISIBLE
        }
      >
        {expanded
          ? "View Less"
          : "View More"}
      </button>
    </section>
  );
}