"use client";

import {
  MdDashboard,
  MdImage,
  MdPlayCircleFilled,
  MdMusicNote,
  MdInsertDriveFile,
} from "react-icons/md";

import styles from "./CategoryItem.module.css";

const ICONS = {
  all: MdDashboard,
  image: MdImage,
  video: MdPlayCircleFilled,
  music: MdMusicNote,
  document: MdInsertDriveFile,
};

export default function CategoryItem({
  category,
  active,
  onClick,
}) {
  const Icon =
    ICONS[category.type] ||
    MdInsertDriveFile;

  return (
    <button
      type="button"
      className={`${styles.item} ${
        active ? styles.active : ""
      }`}
      onClick={onClick}
    >
      <span
        className={`${styles.icon} ${
          styles[category.type]
        }`}
      >
        <Icon />
      </span>

      <span className={styles.label}>
        {category.label}
      </span>
    </button>
  );
}