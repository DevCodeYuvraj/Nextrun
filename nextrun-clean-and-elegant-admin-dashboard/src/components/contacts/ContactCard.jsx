"use client";

import { MoreHorizontal, Phone, Mail } from "lucide-react";
import styles from "./ContactCard.module.css";

export default function ContactCard({ contact }) {
  return (
    <div className={styles.card}>
      <button className={styles.menu}>
        <MoreHorizontal size={18} />
      </button>

      <div className={styles.avatarWrapper}>
        {contact.image ? (
          <img
            src={contact.image}
            alt={contact.name}
            className={styles.avatar}
          />
        ) : (
          <div className={styles.placeholder}></div>
        )}
      </div>

      <h3>{contact.name}</h3>

      <p className={styles.position}>{contact.position}</p>

      <p className={styles.company}>{contact.company}</p>

      <div className={styles.contactInfo}>
        <div className={styles.row}>
          <div className={styles.icon}>
            <Phone size={15} />
          </div>

          <span>{contact.phone}</span>
        </div>

        <div className={styles.row}>
          <div className={styles.icon}>
            <Mail size={15} />
          </div>

          <span>{contact.email}</span>
        </div>
      </div>
    </div>
  );
}