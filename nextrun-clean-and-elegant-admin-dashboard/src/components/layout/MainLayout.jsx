import Sidebar from "./Sidebar";
import Header from "./Header";
import RightPanel from "./RightPanel";

import styles from "./MainLayout.module.css";

export default function MainLayout({
  children,
  showHeader = true,
  showRightPanel = true,
}) {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.centerArea}>
        {showHeader && <Header />}

        <main className={styles.content}>
          {children}
        </main>
      </div>

      {showRightPanel && <RightPanel />}
    </div>
  );
}