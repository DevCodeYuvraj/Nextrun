"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  MdDarkMode,
  MdNotificationsNone,
  MdSettings,
  MdSpaceDashboard,
} from "react-icons/md";

import styles from "./SettingsDropdown.module.css";

export default function SettingsDropdown() {
  const wrapperRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [compactMode, setCompactMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    const savedDark =
      localStorage.getItem("nextrun-dark-mode") === "true";

    const savedCompact =
      localStorage.getItem("nextrun-compact-mode") === "true";

    const savedNotifications =
      localStorage.getItem("nextrun-notifications");

    setDarkMode(savedDark);
    setCompactMode(savedCompact);

    if (savedNotifications !== null) {
      setNotifications(savedNotifications === "true");
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme =
      darkMode ? "dark" : "light";

    localStorage.setItem(
      "nextrun-dark-mode",
      String(darkMode)
    );
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.dataset.compact =
      compactMode ? "true" : "false";

    localStorage.setItem(
      "nextrun-compact-mode",
      String(compactMode)
    );
  }, [compactMode]);

  useEffect(() => {
    localStorage.setItem(
      "nextrun-notifications",
      String(notifications)
    );
  }, [notifications]);

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
        aria-label="Settings"
      >
        <MdSettings size={22} />
      </button>

      {open && (
        <div className={styles.dropdown}>
          <div className={styles.header}>
            <span className={styles.headerIcon}>
              <MdSettings />
            </span>

            <div>
              <h3>Settings</h3>
              <p>Customize your dashboard</p>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>
              Preferences
            </p>

            <SettingRow
              icon={MdDarkMode}
              title="Dark Mode"
              description="Use dark appearance"
              checked={darkMode}
              onChange={() =>
                setDarkMode((previous) => !previous)
              }
            />

            <SettingRow
              icon={MdSpaceDashboard}
              title="Compact Mode"
              description="Reduce dashboard spacing"
              checked={compactMode}
              onChange={() =>
                setCompactMode((previous) => !previous)
              }
            />

            <SettingRow
              icon={MdNotificationsNone}
              title="Notifications"
              description="Receive dashboard alerts"
              checked={notifications}
              onChange={() =>
                setNotifications((previous) => !previous)
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}

function SettingRow({
  icon: Icon,
  title,
  description,
  checked,
  onChange,
}) {
  return (
    <div className={styles.settingRow}>
      <span className={styles.settingIcon}>
        <Icon />
      </span>

      <div className={styles.settingInfo}>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        className={`${styles.switch} ${
          checked ? styles.switchActive : ""
        }`}
        onClick={onChange}
      >
        <span />
      </button>
    </div>
  );
}