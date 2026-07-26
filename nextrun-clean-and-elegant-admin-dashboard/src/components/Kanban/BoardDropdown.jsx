"use client";

import styles from "./BoardDropdown.module.css";

const boards = [
  "Project Board",
  "Sprint Board",
  "Marketing Board",
  "Design Board",
];

export default function BoardDropdown({
  currentBoard,
  onSelect,
}) {
  return (
    <div className={styles.dropdown}>
      {boards.map((board) => (
        <button
          key={board}
          className={
            currentBoard === board
              ? styles.active
              : ""
          }
          onClick={() => onSelect(board)}
        >
          {currentBoard === board ? "✓ " : ""}
          {board}
        </button>
      ))}
    </div>
  );
}