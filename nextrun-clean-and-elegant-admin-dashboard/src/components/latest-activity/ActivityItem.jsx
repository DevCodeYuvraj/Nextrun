"use client";

import ActivityAttachments from "./ActivityAttachments";

import styles from "./ActivityItem.module.css";

export default function ActivityItem({
  activity,
  last,
}) {
  return (
    <article
      className={`${styles.item} ${
        last ? styles.last : ""
      }`}
    >
      <div className={styles.timelineColumn}>
        <span
          className={`${styles.marker} ${
            styles[activity.color] || styles.blue
          }`}
        />

        {!last && (
          <span className={styles.line} />
        )}
      </div>

      <div className={styles.content}>
        <p className={styles.date}>
          {activity.date}
        </p>

        <p className={styles.description}>
          {activity.actor && (
            <>
              <strong>{activity.actor}</strong>{" "}
            </>
          )}

          {activity.before}

          {activity.highlight && (
            <>
              {" "}
              <strong className={styles.highlight}>
                {activity.highlight}
              </strong>
            </>
          )}

          {activity.after && (
            <> {activity.after}</>
          )}
        </p>

        {activity.attachments?.length > 0 && (
          <ActivityAttachments
            attachments={activity.attachments}
          />
        )}
      </div>
    </article>
  );
}