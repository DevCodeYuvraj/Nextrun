import Sidebar from "./Sidebar";
import Header from "./Header";
import RightPanel from "./RightPanel";

import styles from "./MainLayout.module.css";

export default function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.centerArea}>
        <Header />

        <main className={styles.content}>
          {children}
        </main>
      </div>

      <RightPanel />
    </div>
  );
}