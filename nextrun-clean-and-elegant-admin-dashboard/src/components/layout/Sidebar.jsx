import styles from "./Sidebar.module.css";
import { sidebarItems } from "@/data/sidebar";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        Nex<span>trun.</span>
      </div>

      <nav className={styles.nav}>
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`${styles.item} ${
                index === 0 ? styles.active : ""
              }`}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}