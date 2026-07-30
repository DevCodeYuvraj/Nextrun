import styles from "./StatsCard.module.css";

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <p className={styles.title}>{title}</p>

        <div
          className={styles.iconBox}
          style={{ backgroundColor: color }}
        >
          <Icon size={22} />
        </div>
      </div>

      <h2 className={styles.value}>{value}</h2>
    </div>
  );
}