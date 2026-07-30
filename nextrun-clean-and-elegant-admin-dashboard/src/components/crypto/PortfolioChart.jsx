"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import styles from "./PortfolioChart.module.css";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function PortfolioChart() {
  const options = useMemo(
    () => ({
      chart: {
        id: "btc-market-chart",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        foreColor: "#98A2B3",
      },

      stroke: {
        curve: "smooth",
        width: 3,
        colors: ["#5B5FEF"],
      },

      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.28,
          opacityTo: 0.02,
          stops: [0, 100],
        },
      },

      dataLabels: {
        enabled: false,
      },

      grid: {
        borderColor: "#EEF2F7",
        strokeDashArray: 4,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],

        axisBorder: {
          show: false,
        },

        axisTicks: {
          show: false,
        },

        labels: {
          style: {
            colors: "#98A2B3",
            fontSize: "12px",
          },
        },
      },

      yaxis: {
        min: 20,
        max: 100,

        tickAmount: 4,

        labels: {
          formatter(value) {
            return `$${value}k`;
          },

          style: {
            colors: "#98A2B3",
            fontSize: "12px",
          },
        },
      },

      tooltip: {
        theme: "light",
        y: {
          formatter(value) {
            return `$${value.toFixed(2)}k`;
          },
        },
      },

      legend: {
        show: false,
      },
    }),
    []
  );

  const series = [
    {
      name: "Bitcoin",
      data: [28, 34, 40, 36, 48, 45, 58, 62, 55, 67, 74, 82],
    },
  ];

  return (
    <div className={styles.chart}>
      <Chart
        type="area"
        height={360}
        options={options}
        series={series}
      />
    </div>
  );
}