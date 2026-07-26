"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  MdDeleteOutline,
  MdEdit,
  MdMoreHoriz,
  MdRestore,
  MdStar,
  MdStarBorder,
} from "react-icons/md";

import styles from "./TodoActionMenu.module.css";

export default function TodoActionMenu({
  task,
  trashMode,
  onEdit,
  onToggleImportant,
  onTrash,
  onRestore,
  onDeleteForever,
}) {
  const [open, setOpen] =
    useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const close = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target
        )
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      close
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        close
      );
  }, []);

  return (
    <div
      className={styles.wrapper}
      ref={menuRef}
    >
      <button
        type="button"
        className={styles.trigger}
        onClick={() =>
          setOpen(
            (previous) =>
              !previous
          )
        }
        aria-label="Task actions"
      >
        <MdMoreHoriz />
      </button>

      {open && (
        <div className={styles.menu}>
          {!trashMode ? (
            <>
              <button
                type="button"
                onClick={() => {
                  onEdit(task);
                  setOpen(false);
                }}
              >
                <MdEdit />

                Edit
              </button>

              <button
                type="button"
                onClick={() => {
                  onToggleImportant(
                    task.id
                  );
                  setOpen(false);
                }}
              >
                {task.important ? (
                  <MdStar />
                ) : (
                  <MdStarBorder />
                )}

                {task.important
                  ? "Remove Important"
                  : "Mark Important"}
              </button>

              <button
                type="button"
                className={
                  styles.danger
                }
                onClick={() => {
                  onTrash(task.id);
                  setOpen(false);
                }}
              >
                <MdDeleteOutline />

                Move to Trash
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => {
                  onRestore(task.id);
                  setOpen(false);
                }}
              >
                <MdRestore />

                Restore
              </button>

              <button
                type="button"
                className={
                  styles.danger
                }
                onClick={() => {
                  onDeleteForever(
                    task.id
                  );
                  setOpen(false);
                }}
              >
                <MdDeleteOutline />

                Delete Forever
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}