"use client";

import {
  MdCheckCircle,
  MdCancel,
  MdArrowCircleRight,
} from "react-icons/md";

import styles from "./StatusBadge.module.css";

const statusConfig = {
  Paid: {
    className: styles.paid,
    icon: MdCheckCircle,
  },

  Unpaid: {
    className: styles.unpaid,
    icon: MdCancel,
  },

  Pending: {
    className: styles.pending,
    icon: MdArrowCircleRight,
  },
};

export default function StatusBadge({ status }) {
  const config =
    statusConfig[status] ||
    statusConfig.Pending;

  const Icon = config.icon;

  return (
    <span
      className={`${styles.badge} ${config.className}`}
    >
      <span>{status}</span>

      <Icon className={styles.icon} />
    </span>
  );
}