"use client";

import ContactList from "./ContactList";
import styles from "./ContactsPageContent.module.css";

import { initialContacts } from "@/data/contacts";

export default function ContactsPageContent() {
  return (
    <section className={styles.container}>
      <ContactList contacts={initialContacts} />
    </section>
  );
}