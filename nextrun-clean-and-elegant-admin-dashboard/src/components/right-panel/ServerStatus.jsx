import styles from "./ServerStatus.module.css";

const serverBars = [
  { id: 1, height: 38, color: "#4f46e5" },
  { id: 2, height: 68, color: "#20c5f7" },
  { id: 3, height: 48, color: "#20c5f7" },
  { id: 4, height: 62, color: "#4f46e5" },
  { id: 5, height: 76, color: "#20c5f7" },
  { id: 6, height: 42, color: "#20c5f7" },
  { id: 7, height: 30, color: "#4f46e5" },
  { id: 8, height: 55, color: "#20c5f7" },
];

export default function ServerStatus() {
  return (
    <section className={styles.serverStatus}>
      <h3 className={styles.title}>Server Status</h3>

      <div className={styles.chart}>
        {serverBars.map((bar) => (
          <div
            key={bar.id}
            className={styles.bar}
            style={{
              height: `${bar.height}px`,
              backgroundColor: bar.color,
            }}
          />
        ))}
      </div>

      <div className={styles.serverInfo}>
        <div className={styles.infoItem}>
          <span>Country</span>
          <strong>Indonesia</strong>
        </div>

        <div className={styles.infoItem}>
          <span>Domain</span>
          <strong>website.com</strong>
        </div>

        <div className={styles.infoItem}>
          <span>Speed</span>
          <strong>2.0 mbps</strong>
        </div>
      </div>
    </section>
  );
}