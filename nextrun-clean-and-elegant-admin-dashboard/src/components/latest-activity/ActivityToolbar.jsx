"use client";

import { useEffect, useRef, useState } from "react";

import {
  MdExpandMore,
  MdMoreHoriz,
  MdRefresh,
  MdTune,
} from "react-icons/md";

import styles from "./ActivityToolbar.module.css";

export default function ActivityToolbar({
  filter,
  filters,
  onFilterChange,
}) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const filterRef = useRef(null);
  const menuRef = useRef(null);

  const selectedFilter =
    filters.find((item) => item.value === filter) ||
    filters[0];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target)
      ) {
        setFilterOpen(false);
      }

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  return (
    <div className={styles.toolbar}>
      <div
        className={styles.filterWrapper}
        ref={filterRef}
      >
        <button
          type="button"
          className={styles.filterButton}
          onClick={() =>
            setFilterOpen((previous) => !previous)
          }
        >
          <span>{selectedFilter.label}</span>

          <MdExpandMore
            className={
              filterOpen ? styles.rotate : ""
            }
          />
        </button>

        {filterOpen && (
          <div className={styles.filterMenu}>
            {filters.map((item) => (
              <button
                key={item.value}
                type="button"
                className={
                  filter === item.value
                    ? styles.selected
                    : ""
                }
                onClick={() => {
                  onFilterChange(item.value);
                  setFilterOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        className={styles.moreWrapper}
        ref={menuRef}
      >
        <button
          type="button"
          className={styles.moreButton}
          onClick={() =>
            setMenuOpen((previous) => !previous)
          }
          aria-label="Activity options"
        >
          <MdMoreHoriz />
        </button>

        {menuOpen && (
          <div className={styles.moreMenu}>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
            >
              <MdRefresh />
              Refresh
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
            >
              <MdTune />
              Activity Settings
            </button>
          </div>
        )}
      </div>
    </div>
  );
}