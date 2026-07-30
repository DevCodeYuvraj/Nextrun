"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  MdMoreHoriz,
  MdStar,
  MdVisibility,
  MdContentCopy,
} from "react-icons/md";

import {
  userPlan,
} from "@/data/userData";

import PlanModal from "./PlanModal";

import styles from "./UserPlanCard.module.css";

export default function UserPlanCard() {
  const [planOpen, setPlanOpen] =
    useState(false);

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

  const copyPlan = async () => {
    const text =
      `${userPlan.name} — ` +
      `${userPlan.storage}, ` +
      `${userPlan.feature}`;

    try {
      await navigator.clipboard.writeText(
        text
      );
    } catch {
      // Clipboard may not be available.
    }

    setMenuOpen(false);
  };

  return (
    <>
      <section className={styles.card}>
        <MdStar
          className={styles.star}
          aria-hidden="true"
        />

        <div className={styles.content}>
          <span className={styles.label}>
            Your Plan
          </span>

          <h2>{userPlan.name}</h2>

          <ul>
            <li>{userPlan.storage}</li>
            <li>{userPlan.feature}</li>
          </ul>

          <button
            type="button"
            className={styles.viewButton}
            onClick={() =>
              setPlanOpen(true)
            }
          >
            View Plan
          </button>
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
            aria-label="Plan options"
            aria-expanded={menuOpen}
          >
            <MdMoreHoriz />
          </button>

          {menuOpen && (
            <div className={styles.menu}>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setPlanOpen(true);
                }}
              >
                <MdVisibility />
                View Plan
              </button>

              <button
                type="button"
                onClick={copyPlan}
              >
                <MdContentCopy />
                Copy Details
              </button>
            </div>
          )}
        </div>
      </section>

      <PlanModal
        open={planOpen}
        plan={userPlan}
        onClose={() =>
          setPlanOpen(false)
        }
      />
    </>
  );
}