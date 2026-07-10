"use client";

import { useState } from "react";

import {
    MdDelete,
    MdFullscreen,
    MdCancel,
    MdBookmark,
    MdInfo,
    MdStar,
    MdFormatBold,
    MdFormatItalic,
    MdFormatUnderlined,
    MdFormatSize,
    MdFormatAlignLeft,
    MdFormatAlignCenter,
    MdFormatAlignRight,
    MdAttachFile,
    MdImage,
    MdMoreHoriz,
    MdSend,
} from "react-icons/md";

import styles from "./PreviewPanel.module.css";

export default function PreviewPanel({ mail }) {
    const [reply, setReply] = useState("");
    if (!mail) {
        return (
            <aside className={styles.previewPanel}>
                <div className={styles.previewTop}>
                    <div>
                        <h2 className={styles.previewTitle}>
                            Preview
                        </h2>

                        <span className={styles.inboxText}>
                            No email selected
                        </span>
                    </div>
                </div>
            </aside>
        );
    }

    function handleSend() {
        if (!reply.trim()) return;

        console.log("Message sent:", reply);

        setReply("");
    }

    return (
        <aside className={styles.previewPanel}>
            {/* TOP SECTION */}

            <div className={styles.previewTop}>
                <div>
                    <h2 className={styles.previewTitle}>
                        Preview
                    </h2>

                    <span className={styles.inboxText}>
                        Inbox
                    </span>
                </div>

                <div className={styles.topActions}>
                    <button type="button">
                        <MdDelete />
                    </button>

                    <button type="button">
                        <MdFullscreen />
                    </button>

                    <button type="button">
                        <MdCancel />
                    </button>
                </div>
            </div>

            {/* LABEL ROW */}

            <div className={styles.labelRow}>
                {mail.badge ? (
                    <div
                        className={`${styles.mailLabel} ${mail.badgeColor === "work"
                                ? styles.workLabel
                                : styles.importantLabel
                            }`}
                    >
                        <MdBookmark />

                        <span>{mail.badge}</span>
                    </div>
                ) : (
                    <div />
                )}

                <div className={styles.labelActions}>
                    <button type="button">
                        <MdInfo />
                    </button>

                    <button type="button">
                        <MdStar />
                    </button>
                </div>
            </div>

            {/* SUBJECT */}

            <h3 className={styles.subject}>
                {mail.subject ||
                    "Weekly Meeting Schedule with Stakeholders"}
            </h3>

            {/* DATE */}

            <p className={styles.date}>
                {mail.date}
            </p>

            {/* SENDER */}

            <div className={styles.sender}>
                <div className={styles.avatar} />

                <div className={styles.senderDetails}>
                    <h4>{mail.sender}</h4>

                    <p>{mail.email}</p>
                </div>
            </div>

            {/* MESSAGE */}

            <div className={styles.message}>
                <p>Hi Nella,</p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>

                <p>
                    Regards,
                    <br />
                    {mail.sender?.split(" ")[0]}
                </p>
            </div>

            {/* REPLY SECTION */}

            <div className={styles.replySection}>
                <div className={styles.editor}>
                    <textarea
                        value={reply}
                        onChange={(event) =>
                            setReply(event.target.value)
                        }
                        placeholder="Write your message here..."
                    />

                    <div className={styles.formatToolbar}>
                        <div className={styles.textTools}>
                            <button type="button">
                                <MdFormatBold />
                            </button>

                            <button type="button">
                                <MdFormatItalic />
                            </button>

                            <button type="button">
                                <MdFormatUnderlined />
                            </button>

                            <button type="button">
                                <MdFormatSize />
                            </button>
                        </div>

                        <div className={styles.alignTools}>
                            <button type="button">
                                <MdFormatAlignLeft />
                            </button>

                            <button type="button">
                                <MdFormatAlignCenter />
                            </button>

                            <button type="button">
                                <MdFormatAlignRight />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.sendToolbar}>
                    <div className={styles.attachmentTools}>
                        <button type="button">
                            <MdAttachFile />
                        </button>

                        <button type="button">
                            <MdImage />
                        </button>

                        <button type="button">
                            <MdMoreHoriz />
                        </button>
                    </div>

                    <button
                        type="button"
                        className={styles.sendButton}
                        onClick={handleSend}
                    >
                        <span>Send</span>

                        <MdSend />
                    </button>
                </div>
            </div>
        </aside>
    );
}