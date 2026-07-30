"use client";

import HeaderSearch from "./HeaderSearch";
import NotificationDropdown from "./NotificationDropdown";
import SettingsDropdown from "./SettingsDropdown";
import ProfileDropdown from "./ProfileDropdown";

import styles from "./Header.module.css";

export default function Header({ title }) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          {title}
        </h1>
      </div>

      <div className={styles.actions}>
        <HeaderSearch />

        <NotificationDropdown />

        <SettingsDropdown />

        <ProfileDropdown />
      </div>
    </header>
  );
}