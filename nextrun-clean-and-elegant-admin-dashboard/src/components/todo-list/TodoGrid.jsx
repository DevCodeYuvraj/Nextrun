"use client";

import TodoTaskCard from "./TodoTaskCard";

import styles from "./TodoGrid.module.css";

export default function TodoGrid({
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
    <div className={styles.grid}>
      {tasks.map((task) => (
        <TodoTaskCard
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
  );
}