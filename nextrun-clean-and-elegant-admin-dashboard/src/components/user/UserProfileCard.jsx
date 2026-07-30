"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdMoreHoriz,
  MdContentCopy,
  MdPersonOutline,
} from "react-icons/md";

import {
  userProfile,
} from "@/data/userData";

import styles from "./UserProfileCard.module.css";

export default function UserProfileCard() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (
      event
    ) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(
          event.target
        )
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
  }, [menuOpen]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        userProfile.email
      );
    } catch {
      // Clipboard may be unavailable
      // in some development contexts.
    }

    setMenuOpen(false);
  };

  return (
    <section className={styles.card}>
      <div
        className={styles.avatarFrame}
      >
        <div
          className={styles.avatar}
          aria-label={userProfile.name}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.identity}>
          <h2>{userProfile.name}</h2>
          <p>{userProfile.role}</p>
        </div>

        <div className={styles.details}>
          <div className={styles.detail}>
            <span
              className={`${styles.detailIcon} ${styles.location}`}
            >
              <MdLocationOn />
            </span>

            <span>
              {userProfile.location}
            </span>
          </div>

          <a
            className={styles.detail}
            href={`tel:${userProfile.phone.replace(
              /\s/g,
              ""
            )}`}
          >
            <span
              className={`${styles.detailIcon} ${styles.phone}`}
            >
              <MdPhone />
            </span>

            <span>
              {userProfile.phone}
            </span>
          </a>

          <a
            className={styles.detail}
            href={`mailto:${userProfile.email}`}
          >
            <span
              className={`${styles.detailIcon} ${styles.email}`}
            >
              <MdEmail />
            </span>

            <span>
              {userProfile.email}
            </span>
          </a>
        </div>
      </div>

      <div
        className={styles.menuWrapper}
        ref={menuRef}
      >
        <button
          type="button"
          className={styles.moreButton}
          onClick={() =>
            setMenuOpen(
              (previous) => !previous
            )
          }
          aria-label="Profile options"
          aria-expanded={menuOpen}
        >
          <MdMoreHoriz />
        </button>

        {menuOpen && (
          <div className={styles.menu}>
            <button
              type="button"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              <MdPersonOutline />
              View Profile
            </button>

            <button
              type="button"
              onClick={copyEmail}
            >
              <MdContentCopy />
              Copy Email
            </button>
          </div>
        )}
      </div>
    </section>
  );
}