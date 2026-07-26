"use client";

import {
  useRef,
  useState,
} from "react";

import {
  MdAttachFile,
  MdClose,
  MdSend,
} from "react-icons/md";

import styles from "./MessageComposer.module.css";

function formatFileSize(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(
      bytes / 1024
    ).toFixed(1)} KB`;
  }

  return `${(
    bytes /
    (1024 * 1024)
  ).toFixed(1)} MB`;
}

export default function MessageComposer({
  onSend,
}) {
  const [message, setMessage] =
    useState("");

  const [attachment, setAttachment] =
    useState(null);

  const fileRef = useRef(null);

  const handleFile = (event) => {
    const file =
      event.target.files?.[0];

    if (!file) return;

    setAttachment({
      name: file.name,
      size: formatFileSize(
        file.size
      ),
    });

    event.target.value = "";
  };

  const handleSend = () => {
    if (
      !message.trim() &&
      !attachment
    ) {
      return;
    }

    onSend(message, attachment);

    setMessage("");
    setAttachment(null);
  };

  const handleKeyDown = (
    event
  ) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.composer}>
      {attachment && (
        <div
          className={
            styles.attachmentPreview
          }
        >
          <MdAttachFile />

          <span>
            {attachment.name}
          </span>

          <button
            type="button"
            onClick={() =>
              setAttachment(null)
            }
          >
            <MdClose />
          </button>
        </div>
      )}

      <div className={styles.inputRow}>
        <textarea
          rows="1"
          value={message}
          placeholder="Write your message..."
          onChange={(event) =>
            setMessage(
              event.target.value
            )
          }
          onKeyDown={
            handleKeyDown
          }
        />

        <input
          ref={fileRef}
          type="file"
          className={styles.fileInput}
          onChange={handleFile}
        />

        <button
          type="button"
          className={styles.attach}
          onClick={() =>
            fileRef.current?.click()
          }
          aria-label="Attach file"
        >
          <MdAttachFile />
        </button>

        <button
          type="button"
          className={styles.send}
          onClick={handleSend}
        >
          <span>Send</span>

          <MdSend />
        </button>
      </div>
    </div>
  );
}