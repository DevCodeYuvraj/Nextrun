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
                        <h2 className={styles.previewTitle}>Preview</h2>

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

        console.log("Reply:", reply);

        setReply("");
    }

    return (
        <aside className={styles.previewPanel}>
            {/* ================= HEADER ================= */}

            <div className={styles.previewTop}>
                <div>
                    <h2 className={styles.previewTitle}>Preview</h2>

                    <span className={styles.inboxText}>
                        {mail.folder.charAt(0).toUpperCase() +
                            mail.folder.slice(1)}
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

            {/* ================= LABEL ================= */}

            <div className={styles.labelRow}>
                {mail.badge ? (
                    <div
                        className={`${styles.mailLabel} ${mail.badgeColor === "work"
                                ? styles.workLabel
                                : styles.importantLabel
                            }`}
                    >
                        <MdBookmark size={13} />

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
                        <MdStar
                            color={
                                mail.starred
                                    ? "#FFC107"
                                    : "#BFC8D7"
                            }
                        />
                    </button>
                </div>
            </div>

            {/* ================= SUBJECT ================= */}

            <h3 className={styles.subject}>
                {mail.subject}
            </h3>

            {/* ================= DATE ================= */}

            <p className={styles.date}>
                {mail.date}
            </p>

            {/* ================= SENDER ================= */}

            <div className={styles.sender}>
                <div className={styles.avatar}>
                    {mail.sender.charAt(0).toUpperCase()}
                </div>

                <div className={styles.senderDetails}>
                    <h4>{mail.sender}</h4>

                    <p>{mail.email}</p>
                </div>
            </div>

            {/* ================= MESSAGE ================= */}

            <div className={styles.message}>
                {mail.fullMessage
                    .split("\n")
                    .map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
            </div>

            {/* ================= REPLY ================= */}

            <div className={styles.replySection}>
                <div className={styles.editor}>
                    <textarea
                        placeholder="Write your message here..."
                        value={reply}
                        onChange={(event) =>
                            setReply(event.target.value)
                        }
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