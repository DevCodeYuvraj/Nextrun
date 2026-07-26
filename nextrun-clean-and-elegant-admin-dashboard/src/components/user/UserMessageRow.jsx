"use client";

import styles from "./UserMessageRow.module.css";

export default function UserMessageRow({
  message,
  onClick,
}) {
  const initials = message.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <button
      type="button"
      className={styles.row}
      onClick={onClick}
    >
      <div className={styles.avatar}>
        {initials}
      </div>

      <div className={styles.content}>
        <div className={styles.top}>
          <strong>
            {message.name}
          </strong>

          <span>
            {message.time}
          </span>
        </div>

        <div className={styles.bottom}>
          <p>
            {message.preview ||
              "Start a conversation"}
          </p>

          {message.unread > 0 && (
            <span
              className={
                styles.unread
              }
            >
              {message.unread}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}