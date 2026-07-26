"use client";

import ActivityItem from "./ActivityItem";

import styles from "./ActivityTimeline.module.css";

export default function ActivityTimeline({
  activities,
}) {
  const today = activities.filter(
    (activity) => activity.group === "today"
  );

  const yesterday = activities.filter(
    (activity) => activity.group === "yesterday"
  );

  if (activities.length === 0) {
    return (
      <div className={styles.empty}>
        No activity found.
      </div>
    );
  }

  return (
    <div className={styles.timeline}>
      {today.length > 0 && (
        <section className={styles.group}>
          <h2>Today</h2>

          <div className={styles.items}>
            {today.map((activity, index) => (
              <ActivityItem
                key={activity.id}
                activity={activity}
                last={index === today.length - 1}
              />
            ))}
          </div>
        </section>
      )}

      {yesterday.length > 0 && (
        <section className={styles.group}>
          <h2>Yesterday</h2>

          <div className={styles.items}>
            {yesterday.map((activity, index) => (
              <ActivityItem
                key={activity.id}
                activity={activity}
                last={index === yesterday.length - 1}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}