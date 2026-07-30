"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import styles from "./DeviceChart.module.css";

const deviceData = [
  {
    name: "Mobile",
    value: 50,
    color: "#20c5f7",
  },
  {
    name: "Web",
    value: 40,
    color: "#4f46e5",
  },
  {
    name: "Other",
    value: 10,
    color: "#ec4899",
  },
];

export default function DeviceChart() {
  return (
    <section className={styles.card}>
      <h3>Device</h3>

      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={deviceData}
              dataKey="value"
              innerRadius={65}
              outerRadius={90}
              paddingAngle={2}
              stroke="none"
            >
              {deviceData.map((device) => (
                <Cell
                  key={device.name}
                  fill={device.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.legend}>
        {deviceData.map((device) => (
          <div
            key={device.name}
            className={styles.legendItem}
          >
            <div className={styles.legendTitle}>
              <span
                className={styles.dot}
                style={{
                  backgroundColor: device.color,
                }}
              />

              {device.name}
            </div>

            <strong>{device.value}%</strong>
          </div>
        ))}
      </div>
    </section>
  );
}