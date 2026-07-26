"use client";

import {
  MdMoreHoriz,
  MdVideocam,
} from "react-icons/md";

import styles from "./ConversationHeader.module.css";

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ConversationHeader({
  chat,
}) {
  return (
    <header className={styles.header}>
      <div className={styles.person}>
        <div className={styles.avatar}>
          {getInitials(chat.name)}

          {chat.online && (
            <span className={styles.status} />
          )}
        </div>

        <div>
          <h3>
            {chat.name}

            {chat.type === "group" &&
              chat.count &&
              ` (${chat.count})`}
          </h3>

          <p>
            {chat.online ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          aria-label="Video call"
          onClick={() => {}}
        >
          <MdVideocam />
        </button>

        <button
          type="button"
          aria-label="More options"
          onClick={() => {}}
        >
          <MdMoreHoriz />
        </button>
      </div>
    </header>
  );
}