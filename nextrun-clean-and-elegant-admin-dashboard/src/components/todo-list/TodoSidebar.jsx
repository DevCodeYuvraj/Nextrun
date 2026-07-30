"use client";

import {
  MdCheckCircle,
  MdDelete,
  MdExpandMore,
  MdLabel,
  MdPending,
  MdStar,
} from "react-icons/md";

import {
  todoPriorities,
} from "@/data/todoData";

import styles from "./TodoSidebar.module.css";

const MENU = [
  {
    id: "important",
    label: "Important",
    icon: MdStar,
  },
  {
    id: "completed",
    label: "Completed",
    icon: MdCheckCircle,
  },
  {
    id: "pending",
    label: "Pending",
    icon: MdPending,
  },
  {
    id: "trash",
    label: "Trash",
    icon: MdDelete,
  },
  {
    id: "more",
    label: "More",
    icon: MdExpandMore,
  },
];

export default function TodoSidebar({
  activeMenu,
  priorityFilter,
  onMenuChange,
  onPriorityChange,
  onNewTask,
}) {
  return (
    <section className={styles.card}>
      <button
        type="button"
        className={styles.newTask}
        onClick={onNewTask}
      >
        + New Task
      </button>

      <div className={styles.section}>
        <p className={styles.heading}>
          Menu
        </p>

        <div className={styles.menu}>
          {MENU.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                className={`${styles.menuItem} ${
                  activeMenu ===
                  item.id
                    ? styles.active
                    : ""
                }`}
                onClick={() =>
                  onMenuChange(
                    item.id
                  )
                }
              >
                <Icon />

                <span>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.section}>
        <p className={styles.heading}>
          Label
        </p>

        <div className={styles.labels}>
          {todoPriorities.map(
            (priority) => (
              <button
                key={priority.id}
                type="button"
                className={`${styles.labelItem} ${
                  priorityFilter ===
                  priority.id
                    ? styles.labelActive
                    : ""
                }`}
                onClick={() =>
                  onPriorityChange(
                    priority.id
                  )
                }
              >
                <span
                  className={`${styles.labelIcon} ${
                    styles[
                      priority.id
                    ]
                  }`}
                >
                  <MdLabel />
                </span>

                {priority.label}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}