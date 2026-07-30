import StatsCard from "@/components/cards/StatsCard";
import { stats } from "@/data/stats";

import styles from "./StatsSection.module.css";

export default function StatsSection() {
  return (
    <section className={styles.statsGrid}>
      {stats.map((stat) => (
        <StatsCard
          key={stat.id}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </section>
  );
}