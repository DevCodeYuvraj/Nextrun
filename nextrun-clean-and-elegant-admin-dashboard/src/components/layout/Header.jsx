"use client";

import {
  MdNotificationsNone,
  MdSettings,
  MdSearch,
  MdKeyboardArrowDown,
} from "react-icons/md";

import styles from "./Header.module.css";

export default function Header({ title }) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>{title}</h1>
      </div>

      <div className={styles.actions}>
        <div className={styles.search}>
          <MdSearch size={20} />
          <input type="text" placeholder="Search here..." />
        </div>

        <button className={styles.iconButton}>
          <MdNotificationsNone size={22} />
          <span className={styles.badge}></span>
        </button>

        <button className={styles.iconButton}>
          <MdSettings size={22} />
        </button>

        <div className={styles.profile}>
          <div className={styles.avatar}>JD</div>

          <div className={styles.userInfo}>
            <h4>John Doe</h4>
            <span>Administrator</span>
          </div>

          <MdKeyboardArrowDown className={styles.arrow} size={22} />
        </div>
      </div>
    </header>
  );
}