import VisitorsChart from "@/components/charts/VisitorsChart";
import DeviceChart from "@/components/charts/DeviceChart";

import styles from "./AnalyticsSection.module.css";

export default function AnalyticsSection() {
  return (
    <section className={styles.analytics}>
      <VisitorsChart />

      <DeviceChart />
    </section>
  );
}