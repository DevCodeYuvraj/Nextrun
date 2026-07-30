import Header from "@/components/layout/Header";
import RightPanel from "@/components/layout/RightPanel";

import styles from "./layout.module.css";

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.dashboardLayout}>
      <div className={styles.centerArea}>
        <main className={styles.content}>
          {children}
        </main>
      </div>

      <RightPanel />
    </div>
  );
}