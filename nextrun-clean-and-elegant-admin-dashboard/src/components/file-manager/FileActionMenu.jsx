"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  MdMoreHoriz,
  MdOpenInNew,
  MdEdit,
  MdFileDownload,
  MdDeleteOutline,
} from "react-icons/md";

import styles from "./FileActionMenu.module.css";

export default function FileActionMenu({
  file,
  open,
  onToggle,
  onClose,
}) {
  const menuRef = useRef(null);

  const [renaming, setRenaming] =
    useState(false);

  const [name, setName] =
    useState(file.name);

  useEffect(() => {
    if (!open) {
      setRenaming(false);
      setName(file.name);
    }
  }, [open, file.name]);

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(
          event.target
        )
      ) {
        onClose();
      }
    };

    document.addEventListener(
      "mousedown",
      handleMouseDown
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleMouseDown
      );
    };
  }, [open, onClose]);

  const handleOpen = () => {
    onClose();
  };

  const handleDownload = () => {
    const content =
      `File: ${file.name}\n` +
      `Items: ${file.items}\n` +
      `Modified: ${file.modified}\n` +
      `Size: ${file.size}`;

    const blob = new Blob(
      [content],
      {
        type: "text/plain",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download =
      `${file.name}.txt`;

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);

    onClose();
  };

  const handleRenameSubmit = (
    event
  ) => {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    /*
      The reference does not define
      persistence/backend behaviour.

      This keeps the menu interaction
      functional without mutating the
      supplied source data.
    */

    setRenaming(false);
    onClose();
  };

  const handleDelete = () => {
    onClose();
  };

  return (
    <div
      className={styles.wrapper}
      ref={menuRef}
    >
      <button
        type="button"
        className={styles.trigger}
        onClick={onToggle}
        aria-label={`Actions for ${file.name}`}
        aria-expanded={open}
      >
        <MdMoreHoriz />
      </button>

      {open && (
        <div className={styles.menu}>
          {renaming ? (
            <form
              className={styles.renameForm}
              onSubmit={
                handleRenameSubmit
              }
            >
              <span>Rename File</span>

              <input
                type="text"
                value={name}
                onChange={(event) =>
                  setName(
                    event.target.value
                  )
                }
                autoFocus
              />

              <div
                className={
                  styles.renameActions
                }
              >
                <button
                  type="button"
                  onClick={() =>
                    setRenaming(false)
                  }
                >
                  Cancel
                </button>

                <button type="submit">
                  Save
                </button>
              </div>
            </form>
          ) : (
            <>
              <button
                type="button"
                className={
                  styles.menuItem
                }
                onClick={handleOpen}
              >
                <MdOpenInNew />
                <span>Open</span>
              </button>

              <button
                type="button"
                className={
                  styles.menuItem
                }
                onClick={() =>
                  setRenaming(true)
                }
              >
                <MdEdit />
                <span>Rename</span>
              </button>

              <button
                type="button"
                className={
                  styles.menuItem
                }
                onClick={
                  handleDownload
                }
              >
                <MdFileDownload />
                <span>Download</span>
              </button>

              <div
                className={
                  styles.divider
                }
              />

              <button
                type="button"
                className={`${styles.menuItem} ${styles.delete}`}
                onClick={
                  handleDelete
                }
              >
                <MdDeleteOutline />
                <span>Delete</span>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}