"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  MdMoreHoriz,
  MdContentCopy,
  MdPrint,
} from "react-icons/md";

import styles from "./TransactionActionMenu.module.css";

export default function TransactionActionMenu({
  transaction,
  onCopy,
  onPrint,
}) {
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutside
      );
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
    >
      <button
        type="button"
        className={styles.trigger}
        onClick={() =>
          setOpen((previous) => !previous)
        }
        aria-label={`Options for ${transaction.invoice}`}
        aria-expanded={open}
      >
        <MdMoreHoriz />
      </button>

      {open && (
        <div className={styles.menu}>
          <button
            type="button"
            onClick={() => {
              onCopy();
              setOpen(false);
            }}
          >
            <MdContentCopy />
            Copy invoice
          </button>

          <button
            type="button"
            onClick={() => {
              onPrint();
              setOpen(false);
            }}
          >
            <MdPrint />
            Print
          </button>
        </div>
      )}
    </div>
  );
}