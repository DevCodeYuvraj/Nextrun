"use client";

import { useState } from "react";
import { MdEmail } from "react-icons/md";

import { initialContacts as contacts } from "@/data/contacts";

import styles from "./Contacts.module.css";

const INITIAL_CONTACTS = 4;

export default function Contacts() {
  const [showAll, setShowAll] = useState(false);

  const visibleContacts = showAll
    ? contacts
    : contacts.slice(0, INITIAL_CONTACTS);

  function handleViewMore() {
    setShowAll((previousState) => !previousState);
  }

  return (
    <section className={styles.contacts}>
      <h3 className={styles.title}>Contacts</h3>

      <div className={styles.contactList}>
        {visibleContacts.map((contact) => (
          <article
            key={contact.id}
            className={styles.contactItem}
          >
            <div className={styles.avatar}>
              {contact.avatar}
            </div>

            <div className={styles.contactInfo}>
              <h4 className={styles.name}>
                {contact.name}
              </h4>

              <p className={styles.role}>
                {contact.position} • {contact.company}
              </p>
            </div>

            <a
              href={`mailto:${contact.email}`}
              className={styles.emailButton}
              aria-label={`Email ${contact.name}`}
            >
              <MdEmail size={14} />
            </a>
          </article>
        ))}
      </div>

      {contacts.length > INITIAL_CONTACTS && (
        <button
          type="button"
          className={styles.viewMoreButton}
          onClick={handleViewMore}
          aria-expanded={showAll}
        >
          {showAll ? "Show Less" : "View More"}
        </button>
      )}
    </section>
  );
}
