"use client";

import {
  MdInsertDriveFile,
} from "react-icons/md";

import styles from "./ActivityAttachments.module.css";

export default function ActivityAttachments({
  attachments,
}) {
  const handleAttachmentClick = (attachment) => {
    console.log(
      `Selected attachment: ${attachment.name}`
    );
  };

  return (
    <div className={styles.attachments}>
      {attachments.map((attachment) => (
        <button
          key={attachment.id}
          type="button"
          className={styles.attachment}
          onClick={() =>
            handleAttachmentClick(attachment)
          }
          title={attachment.name}
        >
          <span className={styles.preview}>
            <MdInsertDriveFile />
          </span>
        </button>
      ))}
    </div>
  );
}