"use client";

import TodoRow from "./TodoRow";

import styles from "./TodoList.module.css";

export default function TodoList({
  tasks,
  trashMode,
  onToggleComplete,
  onToggleImportant,
  onEdit,
  onTrash,
  onRestore,
  onDeleteForever,
}) {
  if (tasks.length === 0) {
    return (
      <div className={styles.empty}>
        No tasks found.
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {tasks.map((task) => (
          <TodoRow
            key={task.id}
            task={task}
            trashMode={trashMode}
            onToggleComplete={
              onToggleComplete
            }
            onToggleImportant={
              onToggleImportant
            }
            onEdit={onEdit}
            onTrash={onTrash}
            onRestore={onRestore}
            onDeleteForever={
              onDeleteForever
            }
          />
        ))}
      </div>
    </div>
  );
}