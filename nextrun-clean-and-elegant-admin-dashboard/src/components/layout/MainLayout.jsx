"use client";

import { usePathname } from "next/navigation";

import Sidebar from "./Sidebar";
import Header from "./Header";
import RightPanel from "./RightPanel";

import styles from "./MainLayout.module.css";

const titles = {
  "/dashboard": "Dashboard",
  "/email": "Email",
  "/contacts": "Contacts",
  "/calendar": "Calendar",
  "/chat": "Chat",
  "/kanban": "Kanban",
  "/banking": "Banking",
  "/invoice": "Invoice",
  "/todo-list": "Todo List",
  "/file-manager": "File Manager",
  "/latest-activity": "Latest Activity",
  "/crypto": "Crypto",
  "/ticketing": "Ticketing",
  "/user": "User",
};

export default function MainLayout({
  children,
  showRightPanel = false,
}) {
  const pathname = usePathname();

  const title = titles[pathname] || "Dashboard";

  return (
    <div className={styles.layout}>
  <Sidebar />

  <main className={styles.main}>
    <Header title={title} />

    <div className={styles.content}>
      <div className={styles.page}>
        {children}
      </div>

      {showRightPanel ? <RightPanel /> : null}
    </div>
  </main>
</div>
  );
}