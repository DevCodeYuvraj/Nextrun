"use client";

import { useState } from "react";

import { MdAdd } from "react-icons/md";

import ScheduleCard from "./ScheduleCard";
import ScheduleModal from "./ScheduleModal";

import styles from "./UpcomingSchedule.module.css";

export default function UpcomingSchedule({
  schedules,
  onAddSchedule,
}) {
  const [modalOpen, setModalOpen] =
    useState(false);

  return (
    <>
      <aside className={styles.schedule}>
        <div className={styles.header}>
          <h3>Upcoming Schedule</h3>

          <button
            type="button"
            className={styles.addButton}
            onClick={() =>
              setModalOpen(true)
            }
            aria-label="Add schedule"
          >
            <MdAdd />
          </button>
        </div>

        <div className={styles.list}>
          {schedules.map((schedule) => (
            <ScheduleCard
              key={schedule.id}
              schedule={schedule}
            />
          ))}
        </div>
      </aside>

      <ScheduleModal
        open={modalOpen}
        onClose={() =>
          setModalOpen(false)
        }
        onSave={(schedule) => {
          onAddSchedule(schedule);
          setModalOpen(false);
        }}
      />
    </>
  );
}