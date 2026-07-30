"use client";

import {
  MdChevronRight,
  MdSearch,
} from "react-icons/md";

import styles from "./FileToolbar.module.css";

export default function FileToolbar({
  activeFolder,
  search,
  onSearchChange,
}) {
  return (
    <div className={styles.toolbar}>
      <nav
        className={styles.breadcrumb}
        aria-label="File breadcrumb"
      >
        <button type="button">
          Storage
        </button>

        <MdChevronRight />

        <button type="button">
          Drive A
        </button>

        <MdChevronRight />

        <span>
          {activeFolder
            ? activeFolder.breadcrumb
            : "Libary"}
        </span>
      </nav>

      <div className={styles.searchBox}>
        <MdSearch />

        <input
          type="text"
          value={search}
          placeholder="Search here..."
          onChange={(event) =>
            onSearchChange(
              event.target.value
            )
          }
          aria-label="Search files"
        />
      </div>
    </div>
  );
}