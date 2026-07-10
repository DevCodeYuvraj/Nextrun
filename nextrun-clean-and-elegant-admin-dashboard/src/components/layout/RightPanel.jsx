import ServerStatus from "@/components/right-panel/ServerStatus";
import Messages from "@/components/right-panel/Messages";
import Contacts from "@/components/right-panel/Contacts";

import styles from "./RightPanel.module.css";

export default function RightPanel() {
  return (
    <aside className={styles.rightPanel}>
      <ServerStatus />

      <Messages />

      <Contacts />
    </aside>
  );
}