"use client";

import {
  MdKeyboardArrowDown,
  MdStarBorder,
  MdMoreHoriz,
} from "react-icons/md";
import KanbanBoard from "./KanbanBoard";
import styles from "./KanbanPageContent.module.css";



export default function KanbanPageContent() {
  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <div className={styles.left}>
          <h2 className={styles.projectTitle}>
            Project #1
          </h2>

          <button className={styles.iconButton}>
            <MdStarBorder size={22} />
          </button>

          <button className={styles.boardButton}>
            Board
            <MdKeyboardArrowDown size={18} />
          </button>
        </div>

        <div className={styles.right}>
          <div className={styles.avatarGroup}>
            <div className={styles.avatar}>A</div>
            <div className={styles.avatar}>B</div>
            <div className={styles.avatar}>C</div>
            <div className={styles.avatar}>D</div>

            <div className={styles.moreAvatar}>
              +5
            </div>
          </div>

          <button className={styles.inviteButton}>
            Invite
          </button>

          <button className={styles.iconButton}>
            <MdMoreHoriz size={22} />
          </button>
        </div>
      </div>

      <KanbanBoard />
    </div>
  );
}