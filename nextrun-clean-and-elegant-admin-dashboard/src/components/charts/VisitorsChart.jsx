"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import styles from "./VisitorsChart.module.css";

const visitorsData = [
  { day: "Mon", lastWeek: 55, thisWeek: 72 },
  { day: "Tue", lastWeek: 48, thisWeek: 82 },
  { day: "Wed", lastWeek: 28, thisWeek: 25 },
  { day: "Thu", lastWeek: 36, thisWeek: 40 },
  { day: "Fri", lastWeek: 25, thisWeek: 38 },
  { day: "Sat", lastWeek: 32, thisWeek: 75 },
  { day: "Sun", lastWeek: 70, thisWeek: 98 },
];

export default function VisitorsChart() {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h3>Visitors</h3>

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.blueDot}`} />

            <div>
              <p>Last Week</p>
              <strong>1234</strong>
            </div>
          </div>

          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.cyanDot}`} />

            <div>
              <p>This Week</p>
              <strong>1321</strong>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={visitorsData} barGap={6}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Bar
              dataKey="lastWeek"
              fill="#4f46e5"
              radius={[4, 4, 0, 0]}
              barSize={14}
            />

            <Bar
              dataKey="thisWeek"
              fill="#20c5f7"
              radius={[4, 4, 0, 0]}
              barSize={14}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}