"use client";

import { MdEdit, MdContentCopy, MdDelete } from "react-icons/md";
import styles from "./TaskMenu.module.css";

export default function TaskMenu({
  onEdit,
  onDuplicate,
  onDelete,
}) {
  return (
    <div className={styles.menu}>
      <button onClick={onEdit}>
        <MdEdit />
        Edit
      </button>

      <button onClick={onDuplicate}>
        <MdContentCopy />
        Duplicate
      </button>

      <button
        className={styles.delete}
        onClick={onDelete}
      >
        <MdDelete />
        Delete
      </button>
    </div>
  );
}