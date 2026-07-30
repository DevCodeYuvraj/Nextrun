"use client";

import {
  userActivities,
} from "@/data/userData";

import styles from "./UserActivity.module.css";

export default function UserActivity() {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h3>Latest Activity</h3>
      </div>

      <div className={styles.timeline}>
        {userActivities.map(
          (activity, index) => (
            <div
              key={activity.id}
              className={
                styles.activity
              }
            >
              <div
                className={
                  styles.timelineColumn
                }
              >
                <span
                  className={`${styles.dot} ${
                    styles[
                      activity.highlightType
                    ]
                  }`}
                />

                {index <
                  userActivities.length -
                    1 && (
                  <span
                    className={
                      styles.line
                    }
                  />
                )}
              </div>

              <div
                className={
                  styles.activityContent
                }
              >
                <p>
                  <strong>
                    {activity.person}
                  </strong>{" "}
                  {activity.before}

                  {activity.highlight && (
                    <span
                      className={`${styles.highlight} ${
                        styles[
                          activity.highlightType
                        ]
                      }`}
                    >
                      {activity.highlight}
                    </span>
                  )}

                  {activity.between}

                  {activity.secondHighlight && (
                    <span
                      className={`${styles.highlight} ${styles.blue}`}
                    >
                      {
                        activity.secondHighlight
                      }
                    </span>
                  )}

                  {activity.after}
                </p>

                <span
                  className={
                    styles.date
                  }
                >
                  {activity.date}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}