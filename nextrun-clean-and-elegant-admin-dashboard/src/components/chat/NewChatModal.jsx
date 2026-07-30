"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  MdChat,
  MdClose,
} from "react-icons/md";

import styles from "./NewChatModal.module.css";

export default function NewChatModal({
  open,
  onClose,
  onAdd,
}) {
  const [name, setName] =
    useState("");

  const [error, setError] =
    useState("");

  useEffect(() => {
    if (open) {
      setName("");
      setError("");
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const handleSubmit = (
    event
  ) => {
    event.preventDefault();

    if (!name.trim()) {
      setError(
        "Contact name is required."
      );

      return;
    }

    onAdd({
      name: name.trim(),
    });
  };

  return (
    <div
      className={styles.overlay}
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <section className={styles.modal}>
        <header className={styles.header}>
          <div className={styles.title}>
            <span>
              <MdChat />
            </span>

            <div>
              <h3>New Chat</h3>

              <p>
                Start a new conversation
              </p>
            </div>
          </div>

          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close"
          >
            <MdClose />
          </button>
        </header>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <label>
            <span>Contact Name</span>

            <input
              type="text"
              value={name}
              placeholder="Enter contact name"
              autoFocus
              onChange={(event) => {
                setName(
                  event.target.value
                );

                setError("");
              }}
            />
          </label>

          {error && (
            <p className={styles.error}>
              {error}
            </p>
          )}

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancel}
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className={styles.create}
            >
              Start Chat
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}