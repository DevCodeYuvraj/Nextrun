"use client";

import {
  useEffect,
  useRef,
} from "react";

import MessageBubble from "./MessageBubble";

import styles from "./MessageList.module.css";

export default function MessageList({
  messages,
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.messages}>
        {messages.length > 0 ? (
          messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
            />
          ))
        ) : (
          <div className={styles.empty}>
            <strong>
              No messages yet
            </strong>

            <span>
              Send a message to start
              the conversation.
            </span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}