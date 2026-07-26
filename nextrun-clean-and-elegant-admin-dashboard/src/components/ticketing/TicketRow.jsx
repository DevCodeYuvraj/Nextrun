"use client";

import TicketStatusBadge from "./TicketStatusBadge";

import styles from "./TicketRow.module.css";

export default function TicketRow({
  ticket,
  selected,
  onSelect,
}) {
  return (
    <tr
      className={`${styles.row} ${
        selected
          ? styles.selected
          : ""
      }`}
    >
      <td className={styles.checkboxCell}>
        <input
          type="checkbox"
          checked={selected}
          onChange={() =>
            onSelect(ticket.id)
          }
          aria-label={`Select ${ticket.event}`}
        />
      </td>

      <td>
        <div className={styles.event}>
          <div
            className={styles.eventIcon}
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </div>

          <div className={styles.eventInfo}>
            <strong>
              {ticket.event}
            </strong>

            <span>
              {ticket.ticketId}
            </span>
          </div>
        </div>
      </td>

      <td>
        <div className={styles.contact}>
          <div
            className={styles.avatar}
            aria-hidden="true"
          />

          <div className={styles.contactInfo}>
            <strong>
              {ticket.contact}
            </strong>

            <span>
              {ticket.email}
            </span>
          </div>
        </div>
      </td>

      <td>
        <strong className={styles.price}>
          {ticket.price}
        </strong>
      </td>

      <td>
        <span className={styles.date}>
          {ticket.date}
        </span>
      </td>

      <td>
        <TicketStatusBadge
          status={ticket.status}
        />
      </td>
    </tr>
  );
}