"use client";

import {
  MdGridView,
  MdFormatListBulleted,
} from "react-icons/md";

import styles from "./TodoHeader.module.css";

export default function TodoHeader({
  title,
  view,
  onViewChange,
}) {
  return (
    <section className={styles.header}>
      <h2>{title}</h2>

      <div className={styles.views}>
        <button
          type="button"
          className={
            view === "list"
              ? styles.active
              : ""
          }
          onClick={() =>
            onViewChange("list")
          }
          aria-label="List view"
        >
          <MdFormatListBulleted />
        </button>

        <button
          type="button"
          className={
            view === "grid"
              ? styles.active
              : ""
          }
          onClick={() =>
            onViewChange("grid")
          }
          aria-label="Grid view"
        >
          <MdGridView />
        </button>
      </div>
    </section>
  );
}