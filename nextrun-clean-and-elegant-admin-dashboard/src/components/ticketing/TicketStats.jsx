"use client";

import {
  MdConfirmationNumber,
  MdArrowDropUp,
  MdArrowDropDown,
} from "react-icons/md";

import {
  ticketStats,
} from "@/data/ticketingData";

import styles from "./TicketStats.module.css";

function Change({ trend, children }) {
  const isUp = trend === "up";

  return (
    <span
      className={`${styles.change} ${
        isUp ? styles.up : styles.down
      }`}
    >
      {isUp ? (
        <MdArrowDropUp />
      ) : (
        <MdArrowDropDown />
      )}

      {children}
    </span>
  );
}

function TicketStat({
  data,
  iconVariant,
}) {
  return (
    <div className={styles.stat}>
      <div className={styles.statText}>
        <span className={styles.label}>
          {data.title}
        </span>

        <div className={styles.valueRow}>
          <strong>{data.value}</strong>

          <Change trend={data.trend}>
            {data.change}
          </Change>
        </div>
      </div>

      <div
        className={`${styles.ticketIcon} ${
          iconVariant === "cyan"
            ? styles.cyanIcon
            : styles.blueIcon
        }`}
      >
        <MdConfirmationNumber />
      </div>
    </div>
  );
}

export default function TicketStats() {
  const targetPercentage =
    (ticketStats.target.sold /
      ticketStats.target.target) *
    100;

  return (
    <section className={styles.panel}>
      <TicketStat
        data={ticketStats.sold}
        iconVariant="cyan"
      />

      <TicketStat
        data={ticketStats.refund}
        iconVariant="blue"
      />

      <div className={styles.stat}>
        <div className={styles.statText}>
          <span className={styles.label}>
            {ticketStats.soldOverview.title}
          </span>

          <div className={styles.valueRow}>
            <strong>
              {ticketStats.soldOverview.value}
            </strong>

            <Change
              trend={
                ticketStats.soldOverview.trend
              }
            >
              {
                ticketStats.soldOverview
                  .change
              }
            </Change>
          </div>
        </div>

        <div
          className={styles.miniChart}
          aria-hidden="true"
        >
          {ticketStats.soldOverview.chart.map(
            (height, index) => (
              <span
                key={index}
                className={
                  index % 2 === 0
                    ? styles.chartBlue
                    : styles.chartCyan
                }
                style={{
                  height: `${height / 2}px`,
                }}
              />
            )
          )}
        </div>
      </div>

      <div className={styles.target}>
        <h3>
          {ticketStats.target.title}
        </h3>

        <div className={styles.targetTrack}>
          <span
            style={{
              width: `${targetPercentage}%`,
            }}
          />
        </div>

        <p>
          <strong>
            {ticketStats.target.sold}
          </strong>{" "}
          / {ticketStats.target.target} tickets
        </p>
      </div>
    </section>
  );
}