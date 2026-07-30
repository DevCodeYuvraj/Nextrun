"use client";

import { MdFolder } from "react-icons/md";

import styles from "./FolderItem.module.css";

export default function FolderItem({
  folder,
  active,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`${styles.item} ${
        active ? styles.active : ""
      }`}
      onClick={onClick}
      title={folder.breadcrumb}
    >
      <span className={styles.icon}>
        <MdFolder />
      </span>

      <span>{folder.label}</span>
    </button>
  );
}