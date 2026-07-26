"use client";

import { useEffect, useRef, useState } from "react";

import {
  MdMoreHoriz,
  MdVisibility,
  MdEdit,
  MdPrint,
  MdDeleteOutline,
} from "react-icons/md";

import styles from "./ActionMenu.module.css";

export default function ActionMenu({
  invoice,
  onView,
  onEdit,
  onPrint,
  onDelete,
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
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

  const handleAction = (callback) => {
    setOpen(false);

    if (callback) {
      callback(invoice);
    }
  };

  return (
    <div
      className={styles.wrapper}
      ref={menuRef}
    >
      <button
        type="button"
        className={styles.trigger}
        onClick={() =>
          setOpen((previous) => !previous)
        }
        aria-label="Invoice actions"
      >
        <MdMoreHoriz />
      </button>

      {open && (
        <div className={styles.menu}>
          <button
            type="button"
            onClick={() =>
              handleAction(onView)
            }
          >
            <MdVisibility />
            View
          </button>

          <button
            type="button"
            onClick={() =>
              handleAction(onEdit)
            }
          >
            <MdEdit />
            Edit
          </button>

          <button
            type="button"
            onClick={() =>
              handleAction(onPrint)
            }
          >
            <MdPrint />
            Print
          </button>

          <div className={styles.divider} />

          <button
            type="button"
            className={styles.delete}
            onClick={() =>
              handleAction(onDelete)
            }
          >
            <MdDeleteOutline />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}