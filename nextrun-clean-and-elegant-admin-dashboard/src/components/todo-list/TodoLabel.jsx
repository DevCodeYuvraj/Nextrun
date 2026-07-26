import {
  MdLabel,
} from "react-icons/md";

import styles from "./TodoLabel.module.css";

export default function TodoLabel({
  priority,
}) {
  return (
    <span
      className={`${styles.label} ${
        styles[priority]
      }`}
    >
      <MdLabel />

      <span>
        {priority
          .charAt(0)
          .toUpperCase() +
          priority.slice(1)}
      </span>
    </span>
  );
}