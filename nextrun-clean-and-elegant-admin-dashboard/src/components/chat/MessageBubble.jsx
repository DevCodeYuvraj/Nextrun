"use client";

import {
  MdInsertDriveFile,
} from "react-icons/md";

import styles from "./MessageBubble.module.css";

export default function MessageBubble({
  message,
}) {
  const mine = message.sender === "me";

  return (
    <div
      className={`${styles.message} ${
        mine ? styles.mine : styles.theirs
      }`}
    >
      <div className={styles.bubble}>
        {message.text && (
          <p>{message.text}</p>
        )}

        {message.attachment && (
          <div className={styles.attachment}>
            <MdInsertDriveFile />

            <div>
              <strong>
                {message.attachment.name}
              </strong>

              <span>
                {message.attachment.size}
              </span>
            </div>
          </div>
        )}
      </div>

      <time>{message.time}</time>
    </div>
  );
}