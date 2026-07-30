"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  MdClose,
  MdSend,
} from "react-icons/md";

import styles from "./MessagePanel.module.css";

export default function MessagePanel({
  open,
  conversation,
  onClose,
  onSendMessage,
}) {
  const [text, setText] =
    useState("");

  const messagesEndRef =
    useRef(null);

  useEffect(() => {
    setText("");
  }, [conversation?.id]);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [
    open,
    conversation?.messages,
  ]);

  if (!open || !conversation) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!text.trim()) {
      return;
    }

    onSendMessage(
      conversation.id,
      text
    );

    setText("");
  };

  return (
    <div
      className={styles.overlay}
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <section className={styles.panel}>
        <header className={styles.header}>
          <div>
            <div className={styles.avatar}>
              {conversation.name
                .split(" ")
                .map((word) => word[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </div>

            <div>
              <h3>
                {conversation.name}
              </h3>

              <span>Conversation</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close conversation"
          >
            <MdClose />
          </button>
        </header>

        <div className={styles.messages}>
          {conversation.messages.length >
          0 ? (
            conversation.messages.map(
              (message) => (
                <div
                  key={message.id}
                  className={`${styles.message} ${
                    message.sender ===
                    "me"
                      ? styles.mine
                      : styles.theirs
                  }`}
                >
                  <div>
                    {message.text}
                  </div>

                  <span>
                    {message.time}
                  </span>
                </div>
              )
            )
          ) : (
            <div className={styles.empty}>
              Start your conversation
              with {conversation.name}.
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form
          className={styles.composer}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={text}
            onChange={(event) =>
              setText(
                event.target.value
              )
            }
            placeholder="Write message..."
          />

          <button
            type="submit"
            aria-label="Send message"
            disabled={!text.trim()}
          >
            <MdSend />
          </button>
        </form>
      </section>
    </div>
  );
}