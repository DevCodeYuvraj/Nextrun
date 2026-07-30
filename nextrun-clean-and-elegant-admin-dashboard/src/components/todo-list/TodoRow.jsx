"use client";

import {
  MdAttachFile,
  MdEdit,
} from "react-icons/md";

import TodoLabel from "./TodoLabel";
import TodoActionMenu from "./TodoActionMenu";

import styles from "./TodoRow.module.css";

export default function TodoRow({
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
      className={`${styles.row} ${
        task.completed &&
        !trashMode
          ? styles.completed
          : ""
      }`}
    >
      <div className={styles.check}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            onToggleComplete(
              task.id
            )
          }
          aria-label={`Complete ${task.title}`}
        />
      </div>

      <div className={styles.task}>
        <h3>{task.title}</h3>

        <p>
          {task.date}, {task.time}
        </p>
      </div>

      <TodoLabel
        priority={task.priority}
      />

      <div className={styles.members}>
        {task.members
          .slice(0, 3)
          .map(
            (member, index) => (
              <span
                key={`${member}-${index}`}
                title={member}
              >
                {member}
              </span>
            )
          )}
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          title="Attachment"
          aria-label="Attachment"
          onClick={() => {
            if (!task.attachment) {
              return;
            }
          }}
        >
          <MdAttachFile />
        </button>

        <button
          type="button"
          title="Edit"
          aria-label="Edit task"
          onClick={() =>
            onEdit(task)
          }
        >
          <MdEdit />
        </button>

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
    </article>
  );
}