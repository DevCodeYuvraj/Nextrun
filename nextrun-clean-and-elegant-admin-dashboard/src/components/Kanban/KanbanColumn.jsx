"use client";

import { memo } from "react";
import { MdAdd, MdMoreHoriz } from "react-icons/md";

import TaskCard from "./TaskCard";
import styles from "./KanbanColumn.module.css";

function KanbanColumn({
  column,
  onAddCard,
  onDrop,
  onDragOver,
  onCardDragStart,
  onEditCard,
  onDeleteCard,
}) {
  return (
    <section
      className={styles.column}
      onDragOver={onDragOver}
      onDrop={(event) => onDrop(event, column.id)}
    >
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <span className={styles.dot}></span>

          <h3>{column.title}</h3>

          <span className={styles.count}>
            {column.cards.length}
          </span>
        </div>

        <button
          className={styles.menuButton}
          aria-label={`${column.title} options`}
        >
          <MdMoreHoriz />
        </button>
      </div>

      {/* Cards */}
      <div className={styles.cardList}>
        {column.cards.map((card) => (
          <TaskCard
            key={card.id}
            card={card}
            columnId={column.id}
            onDragStart={onCardDragStart}
            onEdit={onEditCard}
            onDelete={onDeleteCard}
          />
        ))}
      </div>

      {/* Footer */}
      <button
        className={styles.addButton}
        onClick={() => onAddCard(column.id)}
      >
        <MdAdd />
        Add new card
      </button>
    </section>
  );
}

export default memo(KanbanColumn);