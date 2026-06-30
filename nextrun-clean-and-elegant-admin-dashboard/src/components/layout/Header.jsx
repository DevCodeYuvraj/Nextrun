import styles from "./Header.module.css";

import {
  MdNotificationsNone,
  MdSettings
} from "react-icons/md";

export default function Header() {
  return (
    <header className={styles.header}>

      <div className={styles.left}>
        <h2>Dashboard</h2>
      </div>

      <div className={styles.right}>

        <input
          className={styles.search}
          type="text"
          placeholder="Search here..."
        />

        <div className={styles.iconButton}>
          <MdNotificationsNone size={22}/>
        </div>

        <div className={styles.iconButton}>
          <MdSettings size={22}/>
        </div>

        <div className={styles.avatar}></div>

      </div>

    </header>
  );
}