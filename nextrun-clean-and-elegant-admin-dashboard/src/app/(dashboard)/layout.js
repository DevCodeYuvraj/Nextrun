import Sidebar from "@/components/layout/Sidebar";

import styles from "./layout.module.css";

export default function DashboardGroupLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.page}>
        {children}
      </main>
    </div>
  );
}