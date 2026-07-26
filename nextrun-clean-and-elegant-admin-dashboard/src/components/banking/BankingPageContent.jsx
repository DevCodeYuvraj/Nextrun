"use client";

import BankingChartCard from "./BankingChartCard";
import BalanceCard from "./BalanceCard";
import TransactionTable from "./TransactionTable";
import EarningCategories from "./EarningCategories";

import {
  incomeChart,
  expenseChart,
} from "@/data/bankingData";

import styles from "./BankingPageContent.module.css";

export default function BankingPageContent() {
  return (
    <div className={styles.page}>
      <div className={styles.topGrid}>
        <BankingChartCard
          data={incomeChart}
          variant="income"
        />

        <BankingChartCard
          data={expenseChart}
          variant="expense"
        />

        <BalanceCard />
      </div>

      <div className={styles.bottomGrid}>
        <TransactionTable />

        <EarningCategories />
      </div>
    </div>
  );
}   