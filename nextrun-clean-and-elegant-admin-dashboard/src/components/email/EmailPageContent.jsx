"use client";

import { useState } from "react";

import ComposeModal from "./ComposeModal";
import MailSidebar from "./MailSidebar";
import MailContent from "./MailContent";
import PreviewPanel from "./PreviewPanel";

import { initialMails } from "@/data/mailData";

import styles from "@/app/(dashboard)/email/page.module.css";

export default function EmailPageContent() {
  const [mails, setMails] = useState(initialMails);

  const [isComposeOpen, setIsComposeOpen] = useState(false);

  const [activeFolder, setActiveFolder] = useState("inbox");

  const [activeLabel, setActiveLabel] = useState(null);

  const [selectedMailId, setSelectedMailId] = useState(
    initialMails[0]?.id ?? null
  );

  const selectedMail =
    mails.find((mail) => mail.id === selectedMailId) ?? null;

  function handleOpenCompose() {
    setIsComposeOpen(true);
  }

  function handleCloseCompose() {
    setIsComposeOpen(false);
  }

  function handleFolderChange(folderId) {
    setActiveFolder(folderId);
    setActiveLabel(null);

    const folderMails =
      folderId === "favourite"
        ? mails.filter((mail) => mail.starred)
        : mails.filter((mail) => mail.folder === folderId);

    setSelectedMailId(folderMails[0]?.id ?? null);
  }

  function handleLabelChange(labelId) {
    setActiveLabel(labelId);
    setActiveFolder(null);

    const labelMails = mails.filter(
      (mail) => mail.label === labelId
    );

    setSelectedMailId(labelMails[0]?.id ?? null);
  }

  function handleSelectMail(mailId) {
    setSelectedMailId(mailId);
  }

  function handleStarClick(mailId) {
    setMails((currentMails) =>
      currentMails.map((mail) =>
        mail.id === mailId
          ? {
              ...mail,
              starred: !mail.starred,
            }
          : mail
      )
    );
  }

  return (
    <>
      <div className={styles.emailPage}>
        <MailSidebar
          onCompose={handleOpenCompose}
          activeFolder={activeFolder}
          activeLabel={activeLabel}
          onFolderChange={handleFolderChange}
          onLabelChange={handleLabelChange}
        />

        <MailContent
          mails={mails}
          activeFolder={activeFolder}
          activeLabel={activeLabel}
          selectedMailId={selectedMailId}
          onSelectMail={handleSelectMail}
          onStarClick={handleStarClick}
        />

        <PreviewPanel mail={selectedMail} />
      </div>

      <ComposeModal
        open={isComposeOpen}
        onClose={handleCloseCompose}
      />
    </>
  );
}