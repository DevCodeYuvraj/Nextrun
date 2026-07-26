"use client";

import { useEffect, useRef, useState } from "react";

import {
  MdCalendarToday,
  MdChatBubbleOutline,
  MdAttachFile,
  MdMoreHoriz,
  MdEdit,
  MdContentCopy,
  MdDelete,
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
  onDuplicate,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

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

        <div
          ref={menuRef}
          style={{ position: "relative" }}
        >
          <button
            className={styles.menuButton}
            onClick={() =>
              setShowMenu((prev) => !prev)
            }
          >
            <MdMoreHoriz />
          </button>

          {showMenu && (
            <div
              style={{
                position: "absolute",
                top: "36px",
                right: 0,
                width: "180px",
                background: "#fff",
                borderRadius: "12px",
                boxShadow:
                  "0 10px 25px rgba(0,0,0,.12)",
                overflow: "hidden",
                zIndex: 100,
              }}
            >
              <button
                style={menuStyle}
                onClick={() => {
                  setShowMenu(false);
                  onEdit(card);
                }}
              >
                <MdEdit />
                Edit
              </button>

              <button
                style={menuStyle}
                onClick={() => {
                  setShowMenu(false);
                  onDuplicate(card);
                }}
              >
                <MdContentCopy />
                Duplicate
              </button>

              <button
                style={{
                  ...menuStyle,
                  color: "#ef4444",
                }}
                onClick={() => {
                  setShowMenu(false);
                  onDelete(card.id);
                }}
              >
                <MdDelete />
                Delete
              </button>
            </div>
          )}
        </div>
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

const menuStyle = {
  width: "100%",
  padding: "12px 16px",
  border: "none",
  background: "#fff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "14px",
};