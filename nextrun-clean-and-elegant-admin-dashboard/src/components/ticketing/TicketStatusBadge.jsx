"use client";

import {
  MdCheckCircle,
  MdCancel,
  MdArrowCircleRight,
} from "react-icons/md";

import styles from "./TicketStatusBadge.module.css";

const STATUS_CONFIG = {
  Paid: {
    className: "paid",
    icon: MdCheckCircle,
  },

  Unpaid: {
    className: "unpaid",
    icon: MdCancel,
  },

  Pending: {
    className: "pending",
    icon: MdArrowCircleRight,
  },
};

export default function TicketStatusBadge({
  status,
}) {
  const config =
    STATUS_CONFIG[status] ||
    STATUS_CONFIG.Pending;

  const Icon = config.icon;

  return (
    <span
      className={`${styles.badge} ${
        styles[config.className]
      }`}
    >
      <span>{status}</span>

      <Icon className={styles.icon} />
    </span>
  );
}