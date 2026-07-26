"use client";

import { useState } from "react";

import TicketStats from "./TicketStats";
import UpcomingSchedule from "./UpcomingSchedule";
import TicketTable from "./TicketTable";

import {
  initialSchedules,
} from "@/data/ticketingData";

import styles from "./TicketingPageContent.module.css";

export default function TicketingPageContent() {
  const [schedules, setSchedules] =
    useState(initialSchedules);

  const handleAddSchedule = (schedule) => {
    setSchedules((previous) => [
      ...previous,
      {
        id: Date.now(),
        ...schedule,
      },
    ]);
  };

  return (
    <div className={styles.page}>
      <TicketStats />

      <div className={styles.contentGrid}>
        <UpcomingSchedule
          schedules={schedules}
          onAddSchedule={handleAddSchedule}
        />

        <TicketTable />
      </div>
    </div>
  );
}