"use client";

import { useMemo, useState } from "react";

import ActivityToolbar from "./ActivityToolbar";
import ActivityTimeline from "./ActivityTimeline";

import {
  initialActivities,
  activityFilters,
} from "@/data/activityData";

import styles from "./LatestActivityPageContent.module.css";

export default function LatestActivityPageContent() {
  const [filter, setFilter] = useState("all");

  const filteredActivities = useMemo(() => {
    if (filter === "all") {
      return initialActivities;
    }

    return initialActivities.filter(
      (activity) => activity.type === filter
    );
  }, [filter]);

  return (
    <div className={styles.page}>
      <ActivityToolbar
        filter={filter}
        filters={activityFilters}
        onFilterChange={setFilter}
      />

      <ActivityTimeline
        activities={filteredActivities}
      />
    </div>
  );
}