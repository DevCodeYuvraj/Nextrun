"use client";

import { MdClose, MdStar } from "react-icons/md";

import styles from "./PlanModal.module.css";

export default function PlanModal({
  open,
  plan,
  onClose,
}) {
  if (!open) {
    return null;
  }

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
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close plan"
        >
          <MdClose />
        </button>

        <div className={styles.icon}>
          <MdStar />
        </div>

        <span>Your Plan</span>

        <h2>{plan.name}</h2>

        <div className={styles.features}>
          <div>
            <span>Storage</span>
            <strong>
              {plan.storage}
            </strong>
          </div>

          <div>
            <span>Features</span>
            <strong>
              {plan.feature}
            </strong>
          </div>
        </div>

        <button
          type="button"
          className={styles.done}
          onClick={onClose}
        >
          Done
        </button>
      </section>
    </div>
  );
}