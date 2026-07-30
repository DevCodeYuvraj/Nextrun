"use client";

import { MdEmail } from "react-icons/md";

import styles from "./UserContactRow.module.css";

export default function UserContactRow({
  contact,
  onMessage,
}) {
  const initials = contact.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className={styles.row}>
      <div className={styles.person}>
        <div className={styles.avatar}>
          {initials}
        </div>

        <div className={styles.info}>
          <strong>
            {contact.name}
          </strong>

          <span>
            {contact.role}
          </span>
        </div>
      </div>

      <button
        type="button"
        className={styles.message}
        onClick={onMessage}
        aria-label={`Message ${contact.name}`}
      >
        <MdEmail />
      </button>
    </div>
  );
}