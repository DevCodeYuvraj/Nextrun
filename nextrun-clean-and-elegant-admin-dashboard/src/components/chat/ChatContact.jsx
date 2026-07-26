"use client";

import styles from "./ChatContact.module.css";

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ChatContact({
  chat,
  active,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`${styles.contact} ${
        active ? styles.active : ""
      }`}
      onClick={onClick}
    >
      <div
        className={`${styles.avatar} ${
          styles[chat.color] || styles.gray
        }`}
      >
        <span>{getInitials(chat.name)}</span>

        {chat.online && (
          <i className={styles.online} />
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.nameRow}>
          <strong>
            {chat.name}

            {chat.type === "group" && chat.count
              ? ` (${chat.count})`
              : ""}
          </strong>

          <time>{chat.time}</time>
        </div>

        <div className={styles.previewRow}>
          <p>{chat.preview}</p>

          {chat.unread > 0 && (
            <span className={styles.unread}>
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}