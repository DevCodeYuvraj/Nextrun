"use client";

import {
  MdEdit,
  MdAdd,
  MdContentCopy,
  MdDelete,
} from "react-icons/md";

import styles from "./ColumnMenu.module.css";

export default function ColumnMenu({
  onRename,
  onAddCard,
  onDuplicate,
  onDelete,
}) {
  return (
    <div className={styles.menu}>
      <button onClick={onRename}>
        <MdEdit />
        Rename Column
      </button>

      <button onClick={onAddCard}>
        <MdAdd />
        Add New Card
      </button>

      <button onClick={onDuplicate}>
        <MdContentCopy />
        Duplicate Column
      </button>

      <button
        className={styles.delete}
        onClick={onDelete}
      >
        <MdDelete />
        Delete Column
      </button>
    </div>
  );
}