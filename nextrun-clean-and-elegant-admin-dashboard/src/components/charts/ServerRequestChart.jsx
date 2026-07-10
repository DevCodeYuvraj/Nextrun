"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import styles from "./ServerRequestChart.module.css";

const serverData = [
  { time: "14.10", serverA: 10, serverB: 12 },
  { time: "14.20", serverA: 45, serverB: 40 },
  { time: "14.30", serverA: 30, serverB: 32 },
  { time: "14.40", serverA: 62, serverB: 52 },
  { time: "14.50", serverA: 25, serverB: 38 },
  { time: "14.60", serverA: 40, serverB: 30 },
  { time: "15.00", serverA: 42, serverB: 20 },
  { time: "15.10", serverA: 12, serverB: 8 },
  { time: "15.20", serverA: 38, serverB: 32 },
  { time: "15.30", serverA: 65, serverB: 55 },
];

export default function ServerRequestChart() {
  return (
    <section className={styles.chartCard}>
      <div className={styles.header}>
        <h3>Server Request</h3>

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.blueDot}`}></span>
            Web Server A
          </div>

          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.cyanDot}`}></span>
            Web Server B
          </div>
        </div>
      </div>

      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={serverData}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="serverA"
              stroke="#4f46e5"
              strokeWidth={3}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="serverB"
              stroke="#20c5f7"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}