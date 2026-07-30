"use client";

import styles from "./StorageCard.module.css";

export default function StorageCard({
  storage,
}) {
  const percentage = Math.min(
    Math.max(storage.percentage, 0),
    100
  );

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          Storage
        </span>

        <h3>{storage.title}</h3>

        <p>
          <span className={styles.used}>
            {storage.used}
          </span>

          <span className={styles.separator}>
            {" "}
            /{" "}
          </span>

          <span
            className={`${styles.total} ${
              styles[storage.type]
            }`}
          >
            {storage.total}
          </span>
        </p>
      </div>

      <div
        className={`${styles.progressRing} ${
          styles[`${storage.type}Ring`]
        }`}
        style={{
          "--progress": `${percentage * 3.6}deg`,
        }}
        aria-label={`${storage.title} ${percentage}% storage used`}
      >
        <span />
      </div>
    </article>
  );
}