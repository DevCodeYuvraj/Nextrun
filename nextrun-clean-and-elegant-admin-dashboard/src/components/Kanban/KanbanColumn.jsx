"use client";

import { memo, useEffect, useRef, useState } from "react";
import { MdAdd, MdMoreHoriz } from "react-icons/md";

import ColumnMenu from "./ColumnMenu";
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
  onDuplicateCard,

  // NEW
  onRenameColumn,
  onDuplicateColumn,
  onDeleteColumn,
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

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

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

        <div
          ref={menuRef}
          style={{
            position: "relative",
          }}
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
            <ColumnMenu
              onRename={() => {
                setShowMenu(false);
                onRenameColumn(column);
              }}
              onAddCard={() => {
                setShowMenu(false);
                onAddCard(column.id);
              }}
              onDuplicate={() => {
                setShowMenu(false);
                onDuplicateColumn(column);
              }}
              onDelete={() => {
                setShowMenu(false);
                onDeleteColumn(column.id);
              }}
            />
          )}
        </div>
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
            onDuplicate={onDuplicateCard}
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