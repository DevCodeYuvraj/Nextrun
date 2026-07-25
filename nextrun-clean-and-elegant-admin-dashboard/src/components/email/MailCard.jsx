import {
  MdStar,
  MdStarBorder,
  MdAttachFile,
  MdBookmark,
} from "react-icons/md";

import styles from "./MailCard.module.css";

export default function MailCard({
  mail,
  selected,
  onSelectMail,
  onStarClick,
}) {
  function handleStar(event) {
    event.stopPropagation();

    onStarClick(mail.id);
  }

  return (
    <article
      className={`${styles.mailCard} ${
        selected ? styles.selected : ""
      }`}
      onClick={() => onSelectMail(mail.id)}
    >
      {/* Avatar */}

      <div className={styles.avatar}>
        {mail.sender.charAt(0).toUpperCase()}
      </div>

      {/* Mail Body */}

      <div className={styles.mailBody}>
        <div className={styles.mailTop}>
          <div className={styles.senderArea}>
            <h3 className={styles.sender}>
              {mail.sender}
            </h3>

            <button
              type="button"
              className={styles.starButton}
              onClick={handleStar}
              aria-label={
                mail.starred
                  ? `Remove ${mail.sender} from favourites`
                  : `Add ${mail.sender} to favourites`
              }
            >
              {mail.starred ? (
                <MdStar
                  size={17}
                  className={styles.activeStar}
                />
              ) : (
                <MdStarBorder size={17} />
              )}
            </button>

            {mail.attachment && (
              <MdAttachFile
                size={16}
                className={styles.attachment}
              />
            )}
          </div>

          <span className={styles.time}>
            {mail.time}
          </span>
        </div>

        <p className={styles.message}>
          {mail.message}
        </p>

        {mail.badge && (
          <div
            className={`${styles.badge} ${
              styles[mail.badgeColor]
            }`}
          >
            <MdBookmark size={13} />

            <span>{mail.badge}</span>
          </div>
        )}

        {mail.notification && (
          <span className={styles.notification}>
            {mail.notification}
          </span>
        )}
      </div>
    </article>
  );
}