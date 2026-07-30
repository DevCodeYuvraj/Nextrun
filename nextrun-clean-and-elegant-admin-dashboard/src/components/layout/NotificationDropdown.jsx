"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import {
  MdCheck,
  MdDescription,
  MdEventNote,
  MdForum,
  MdNotificationsNone,
  MdTaskAlt,
  MdTimeline,
} from "react-icons/md";

import { initialNotifications } from "@/data/notificationData";

import styles from "./NotificationDropdown.module.css";

const notificationIcons = {
  invoice: MdDescription,
  message: MdForum,
  task: MdTaskAlt,
  ticket: MdEventNote,
  activity: MdTimeline,
};

export default function NotificationDropdown() {
  const router = useRouter();
  const wrapperRef = useRef(null);

  const [open, setOpen] = useState(false);

  const [notifications, setNotifications] =
    useState(initialNotifications);

  const unreadCount = useMemo(
    () =>
      notifications.filter(
        (notification) => !notification.read
      ).length,
    [notifications]
  );

  useEffect(() => {
    const handleOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);

    return () =>
      document.removeEventListener("mousedown", handleOutside);
  }, []);

  const handleNotification = (notification) => {
    setNotifications((previous) =>
      previous.map((item) =>
        item.id === notification.id
          ? {
              ...item,
              read: true,
            }
          : item
      )
    );

    setOpen(false);

    if (notification.href) {
      router.push(notification.href);
    }
  };

  const markAllRead = () => {
    setNotifications((previous) =>
      previous.map((item) => ({
        ...item,
        read: true,
      }))
    );
  };

  return (
    <div
      className={styles.wrapper}
      ref={wrapperRef}
    >
      <button
        type="button"
        className={styles.iconButton}
        onClick={() =>
          setOpen((previous) => !previous)
        }
        aria-label="Notifications"
      >
        <MdNotificationsNone size={22} />

        {unreadCount > 0 && (
          <span className={styles.badge}>
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className={styles.dropdown}>
          <div className={styles.header}>
            <div>
              <h3>Notifications</h3>

              <p>
                You have {unreadCount} unread notification
                {unreadCount === 1 ? "" : "s"}
              </p>
            </div>

            {unreadCount > 0 && (
              <button
                type="button"
                className={styles.markAll}
                onClick={markAllRead}
              >
                <MdCheck />
                Mark all read
              </button>
            )}
          </div>

          <div className={styles.list}>
            {notifications.map((notification) => {
              const Icon =
                notificationIcons[notification.type] ||
                MdNotificationsNone;

              return (
                <button
                  key={notification.id}
                  type="button"
                  className={`${styles.notification} ${
                    !notification.read
                      ? styles.unread
                      : ""
                  }`}
                  onClick={() =>
                    handleNotification(notification)
                  }
                >
                  <span className={styles.notificationIcon}>
                    <Icon />
                  </span>

                  <span className={styles.content}>
                    <span className={styles.titleRow}>
                      <strong>{notification.title}</strong>

                      {!notification.read && (
                        <i className={styles.unreadDot} />
                      )}
                    </span>

                    <span className={styles.description}>
                      {notification.description}
                    </span>

                    <small>{notification.time}</small>
                  </span>
                </button>
              );
            })}
          </div>

          <div className={styles.footer}>
            <button
              type="button"
              onClick={() => setOpen(false)}
            >
              View All Notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
}