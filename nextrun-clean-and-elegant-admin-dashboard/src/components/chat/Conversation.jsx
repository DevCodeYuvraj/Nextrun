"use client";

import ConversationHeader from "./ConversationHeader";
import MessageList from "./MessageList";
import MessageComposer from "./MessageComposer";

import styles from "./Conversation.module.css";

export default function Conversation({
  chat,
  onSendMessage,
}) {
  if (!chat) {
    return (
      <section className={styles.empty}>
        Select a conversation.
      </section>
    );
  }

  return (
    <section className={styles.conversation}>
      <ConversationHeader chat={chat} />

      <MessageList
        key={chat.id}
        messages={chat.messages}
      />

      <MessageComposer
        key={`composer-${chat.id}`}
        onSend={onSendMessage}
      />
    </section>
  );
}