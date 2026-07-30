"use client";

import styles from "./CandlestickChart.module.css";

const candles = [
  { x: 42, open: 155, close: 137, high: 126, low: 166 },
  { x: 70, open: 138, close: 119, high: 107, low: 151 },
  { x: 98, open: 120, close: 132, high: 111, low: 144 },
  { x: 126, open: 132, close: 109, high: 96, low: 143 },
  { x: 154, open: 108, close: 91, high: 80, low: 119 },
  { x: 182, open: 91, close: 105, high: 82, low: 117 },
  { x: 210, open: 104, close: 82, high: 71, low: 115 },
  { x: 238, open: 82, close: 66, high: 55, low: 93 },
  { x: 266, open: 66, close: 78, high: 57, low: 90 },
  { x: 294, open: 78, close: 59, high: 48, low: 89 },
  { x: 322, open: 59, close: 45, high: 34, low: 70 },
  { x: 350, open: 46, close: 62, high: 37, low: 74 },
  { x: 378, open: 62, close: 48, high: 38, low: 72 },
  { x: 406, open: 48, close: 34, high: 23, low: 60 },
  { x: 434, open: 34, close: 47, high: 25, low: 58 },
  { x: 462, open: 47, close: 29, high: 18, low: 58 },
  { x: 490, open: 29, close: 42, high: 20, low: 53 },
  { x: 518, open: 42, close: 27, high: 17, low: 53 },
  { x: 546, open: 27, close: 20, high: 10, low: 39 },
  { x: 574, open: 20, close: 35, high: 12, low: 46 },
];

const horizontalLines = [28, 63, 98, 133, 168];

export default function CandlestickChart() {
  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.chart}
        viewBox="0 0 640 215"
        preserveAspectRatio="none"
        aria-label="Bitcoin market candlestick chart"
        role="img"
      >
        {/* horizontal grid */}
        {horizontalLines.map((y) => (
          <line
            key={`h-${y}`}
            x1="18"
            y1={y}
            x2="604"
            y2={y}
            className={styles.grid}
          />
        ))}

        {/* vertical grid */}
        {[70, 168, 266, 364, 462, 560].map((x) => (
          <line
            key={`v-${x}`}
            x1={x}
            y1="16"
            x2={x}
            y2="181"
            className={styles.grid}
          />
        ))}

        {/* candles */}
        {candles.map((candle, index) => {
          const rising = candle.close < candle.open;

          const bodyTop = Math.min(
            candle.open,
            candle.close
          );

          const bodyHeight = Math.max(
            Math.abs(candle.open - candle.close),
            4
          );

          return (
            <g
              key={`${candle.x}-${index}`}
              className={
                rising
                  ? styles.rising
                  : styles.falling
              }
            >
              <line
                x1={candle.x}
                x2={candle.x}
                y1={candle.high}
                y2={candle.low}
                className={styles.wick}
              />

              <rect
                x={candle.x - 5}
                y={bodyTop}
                width="10"
                height={bodyHeight}
                rx="1"
                className={styles.body}
              />
            </g>
          );
        })}

        {/* bottom axis */}
        <line
          x1="18"
          y1="181"
          x2="604"
          y2="181"
          className={styles.axis}
        />

        <g className={styles.labels}>
          <text x="45" y="204">10:00</text>
          <text x="158" y="204">11:00</text>
          <text x="270" y="204">12:00</text>
          <text x="382" y="204">13:00</text>
          <text x="494" y="204">14:00</text>
        </g>
      </svg>
    </div>
  );
}