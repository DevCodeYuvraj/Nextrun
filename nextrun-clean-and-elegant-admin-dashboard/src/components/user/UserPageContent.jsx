"use client";

import { useState } from "react";

import UserProfileCard from "./UserProfileCard";
import UserContacts from "./UserContacts";
import UserMessages from "./UserMessages";
import UserPlanCard from "./UserPlanCard";
import UserActivity from "./UserActivity";

import {
  initialUserContacts,
  initialUserMessages,
} from "@/data/userData";

import styles from "./UserPageContent.module.css";

export default function UserPageContent() {
  const [contacts, setContacts] =
    useState(initialUserContacts);

  const [messages, setMessages] =
    useState(initialUserMessages);

  const [selectedMessageId, setSelectedMessageId] =
    useState(null);

  const handleAddContact = (contact) => {
    setContacts((previous) => [
      ...previous,
      {
        id: Date.now(),
        avatar: null,
        ...contact,
      },
    ]);
  };

  const handleOpenConversation = (contact) => {
    let conversation =
      messages.find(
        (message) =>
          message.contactId === contact.id
      );

    if (!conversation) {
      const newConversation = {
        id: Date.now(),
        contactId: contact.id,
        name: contact.name,
        preview: "",
        time: "",
        unread: 0,
        messages: [],
      };

      setMessages((previous) => [
        ...previous,
        newConversation,
      ]);

      conversation = newConversation;
    } else {
      setMessages((previous) =>
        previous.map((message) =>
          message.id === conversation.id
            ? {
                ...message,
                unread: 0,
              }
            : message
        )
      );
    }

    setSelectedMessageId(
      conversation.id
    );
  };

  const handleReadMessage = (id) => {
    setMessages((previous) =>
      previous.map((message) =>
        message.id === id
          ? {
              ...message,
              unread: 0,
            }
          : message
      )
    );

    setSelectedMessageId(id);
  };

  const handleSendMessage = (
    conversationId,
    text
  ) => {
    const cleanText = text.trim();

    if (!cleanText) {
      return;
    }

    const now =
      new Date().toLocaleTimeString(
        "en-US",
        {
          hour: "numeric",
          minute: "2-digit",
        }
      );

    setMessages((previous) =>
      previous.map((conversation) =>
        conversation.id ===
        conversationId
          ? {
              ...conversation,
              preview: cleanText,
              time: now,
              unread: 0,
              messages: [
                ...conversation.messages,
                {
                  id: Date.now(),
                  sender: "me",
                  text: cleanText,
                  time: now,
                },
              ],
            }
          : conversation
      )
    );
  };

  const selectedMessage =
    messages.find(
      (message) =>
        message.id === selectedMessageId
    ) || null;

  return (
    <div className={styles.page}>
      <div className={styles.mainColumn}>
        <UserProfileCard />

        <div className={styles.lowerGrid}>
          <UserContacts
            contacts={contacts}
            onAddContact={
              handleAddContact
            }
            onMessage={
              handleOpenConversation
            }
          />

          <UserMessages
            messages={messages}
            selectedMessage={
              selectedMessage
            }
            onOpenMessage={
              handleReadMessage
            }
            onSendMessage={
              handleSendMessage
            }
          />
        </div>
      </div>

      <aside className={styles.rightColumn}>
        <UserPlanCard />
        <UserActivity />
      </aside>
    </div>
  );
}