"use client";

import ContactCard from "./ContactCard";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <section className={styles.grid}>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
        />
      ))}
    </section>
  );
}