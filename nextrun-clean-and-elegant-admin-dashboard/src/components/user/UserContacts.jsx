"use client";

import { useState } from "react";
import { MdAdd } from "react-icons/md";

import UserContactRow from "./UserContactRow";
import AddContactModal from "./AddContactModal";

import styles from "./UserContacts.module.css";

const INITIAL_VISIBLE = 5;

export default function UserContacts({
  contacts,
  onAddContact,
  onMessage,
}) {
  const [expanded, setExpanded] =
    useState(false);

  const [modalOpen, setModalOpen] =
    useState(false);

  const visibleContacts = expanded
    ? contacts
    : contacts.slice(
        0,
        INITIAL_VISIBLE
      );

  return (
    <>
      <section className={styles.card}>
        <div className={styles.header}>
          <h3>Contacts</h3>

          <button
            type="button"
            className={styles.addButton}
            onClick={() =>
              setModalOpen(true)
            }
            aria-label="Add contact"
          >
            <MdAdd />
          </button>
        </div>

        <div className={styles.list}>
          {visibleContacts.map(
            (contact) => (
              <UserContactRow
                key={contact.id}
                contact={contact}
                onMessage={() =>
                  onMessage(contact)
                }
              />
            )
          )}

          {contacts.length === 0 && (
            <div className={styles.empty}>
              No contacts available.
            </div>
          )}
        </div>

        {contacts.length >
          INITIAL_VISIBLE && (
          <div className={styles.footer}>
            <button
              type="button"
              className={
                styles.viewButton
              }
              onClick={() =>
                setExpanded(
                  (previous) =>
                    !previous
                )
              }
            >
              {expanded
                ? "View Less"
                : "View More"}
            </button>
          </div>
        )}

        {contacts.length <=
          INITIAL_VISIBLE && (
          <div className={styles.footer}>
            <button
              type="button"
              className={
                styles.viewButton
              }
              disabled
            >
              View More
            </button>
          </div>
        )}
      </section>

      <AddContactModal
        open={modalOpen}
        onClose={() =>
          setModalOpen(false)
        }
        onAdd={(contact) => {
          onAddContact(contact);
          setModalOpen(false);
          setExpanded(true);
        }}
      />
    </>
  );
}