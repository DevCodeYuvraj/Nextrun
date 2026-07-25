"use client";

import {
  MdCalendarToday,
  MdChatBubbleOutline,
  MdAttachFile,
  MdMoreHoriz,
} from "react-icons/md";

import styles from "./TaskCard.module.css";

const priorityClass = {
  High: styles.high,
  Medium: styles.medium,
  Low: styles.low,
  Completed: styles.completed,
};

export default function TaskCard({
  card,
  columnId,
  onDragStart,
  onEdit,
  onDelete,
}) {
  return (
    <article
      className={styles.card}
      draggable
      onDragStart={(e) =>
        onDragStart(e, card.id, columnId)
      }
    >
      <div className={styles.header}>
        <span
          className={`${styles.priority} ${
            priorityClass[card.priority]
          }`}
        >
          {card.priority}
        </span>

        <button
          className={styles.menuButton}
          onClick={() => onEdit(card)}
          aria-label="More options"
        >
          <MdMoreHoriz />
        </button>
      </div>

      <h4 className={styles.title}>
        {card.title}
      </h4>

      <div className={styles.date}>
        <MdCalendarToday />

        <span>{card.dueDate}</span>
      </div>

      <div className={styles.footer}>
        <div className={styles.members}>
          {card.members.map((member, index) => (
            <div
              key={index}
              className={styles.avatar}
            >
              {member}
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <MdChatBubbleOutline />

            <span>{card.comments}</span>
          </div>

          <div className={styles.stat}>
            <MdAttachFile />

            <span>{card.attachments}</span>
          </div>
        </div>
      </div>
    </article>
  );
}