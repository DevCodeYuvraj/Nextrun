"use client";

import {
  MdAttachFile,
  MdEdit,
} from "react-icons/md";

import TodoLabel from "./TodoLabel";
import TodoActionMenu from "./TodoActionMenu";

import styles from "./TodoTaskCard.module.css";

export default function TodoTaskCard({
  task,
  trashMode,
  onToggleComplete,
  onToggleImportant,
  onEdit,
  onTrash,
  onRestore,
  onDeleteForever,
}) {
  return (
    <article
      className={`${styles.card} ${
        task.completed
          ? styles.completed
          : ""
      }`}
    >
      <div className={styles.top}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            onToggleComplete(
              task.id
            )
          }
        />

        <TodoActionMenu
          task={task}
          trashMode={trashMode}
          onEdit={onEdit}
          onToggleImportant={
            onToggleImportant
          }
          onTrash={onTrash}
          onRestore={onRestore}
          onDeleteForever={
            onDeleteForever
          }
        />
      </div>

      <div className={styles.body}>
        <h3>{task.title}</h3>

        <p>
          {task.date}, {task.time}
        </p>

        <TodoLabel
          priority={task.priority}
        />
      </div>

      <div className={styles.footer}>
        <div className={styles.members}>
          {task.members
            .slice(0, 3)
            .map(
              (member, index) => (
                <span
                  key={`${member}-${index}`}
                />
              )
            )}
        </div>

        <div className={styles.icons}>
          <MdAttachFile />

          <button
            type="button"
            onClick={() =>
              onEdit(task)
            }
            aria-label="Edit"
          >
            <MdEdit />
          </button>
        </div>
      </div>
    </article>
  );
}