"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarItems } from "@/data/sidebar";

import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <Link href="/dashboard" className={styles.logo}>
        Next<span>run.</span>
      </Link>

      <nav className={styles.navigation}>
        {sidebarItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.path;

          return (
            <Link
              key={item.id}
              href={item.path}
              className={`${styles.navItem} ${
                active ? styles.active : ""
              }`}
            >
              <Icon className={styles.navIcon} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className={styles.footer}>
        <div className={styles.footerTitle}>
          Nextrun Clean Elegant Admin Dashboard
        </div>

        <div className={styles.footerMade}>
          Made with <span>❤</span> by Peterdraw
        </div>
      </div>
    </aside>
  );
}