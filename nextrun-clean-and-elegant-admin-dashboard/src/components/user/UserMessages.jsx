"use client";

import {
  useEffect,
  useState,
} from "react";

import { MdAdd } from "react-icons/md";

import UserMessageRow from "./UserMessageRow";
import MessagePanel from "./MessagePanel";

import styles from "./UserMessages.module.css";

const INITIAL_VISIBLE = 5;

export default function UserMessages({
  messages,
  selectedMessage,
  onOpenMessage,
  onSendMessage,
}) {
  const [expanded, setExpanded] =
    useState(false);

  const [panelOpen, setPanelOpen] =
    useState(false);

  useEffect(() => {
    if (selectedMessage) {
      setPanelOpen(true);
    }
  }, [selectedMessage]);

  const visibleMessages = expanded
    ? messages
    : messages.slice(
        0,
        INITIAL_VISIBLE
      );

  const openConversation = (id) => {
    onOpenMessage(id);
    setPanelOpen(true);
  };

  const handleNewMessage = () => {
    if (messages.length > 0) {
      openConversation(
        messages[0].id
      );
    }
  };

  return (
    <>
      <section className={styles.card}>
        <div className={styles.header}>
          <h3>Messages</h3>

          <button
            type="button"
            className={styles.addButton}
            onClick={handleNewMessage}
            aria-label="New message"
          >
            <MdAdd />
          </button>
        </div>

        <div className={styles.list}>
          {visibleMessages.map(
            (message) => (
              <UserMessageRow
                key={message.id}
                message={message}
                onClick={() =>
                  openConversation(
                    message.id
                  )
                }
              />
            )
          )}

          {messages.length === 0 && (
            <div className={styles.empty}>
              No messages available.
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <button
            type="button"
            className={
              styles.viewButton
            }
            disabled={
              messages.length <=
              INITIAL_VISIBLE
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
      </section>

      <MessagePanel
        open={
          panelOpen &&
          Boolean(selectedMessage)
        }
        conversation={
          selectedMessage
        }
        onClose={() =>
          setPanelOpen(false)
        }
        onSendMessage={
          onSendMessage
        }
      />
    </>
  );
}