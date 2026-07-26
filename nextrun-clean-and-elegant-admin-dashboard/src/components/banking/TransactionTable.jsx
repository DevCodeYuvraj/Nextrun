"use client";

import { useMemo, useState } from "react";
import {
  MdFilterList,
  MdMoreHoriz,
} from "react-icons/md";

import { transactions } from "@/data/bankingData";

import TransactionRow from "./TransactionRow";
import TransactionPagination from "./TransactionPagination";

import styles from "./TransactionTable.module.css";

const ITEMS_PER_PAGE = 5;

export default function TransactionTable() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredTransactions = useMemo(() => {
    if (filter === "all") {
      return transactions;
    }

    return transactions.filter(
      (transaction) => transaction.type === filter
    );
  }, [filter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE)
  );

  const currentPage = Math.min(page, totalPages);

  const visibleTransactions = filteredTransactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleFilter = (value) => {
    setFilter(value);
    setPage(1);
    setFilterOpen(false);
  };

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h3>Lastest Transaction</h3>

        <div className={styles.headerActions}>
          <div className={styles.filterWrapper}>
            <button
              type="button"
              className={`${styles.headerButton} ${
                filter !== "all" ? styles.headerButtonActive : ""
              }`}
              onClick={() =>
                setFilterOpen((previous) => !previous)
              }
              aria-label="Filter transactions"
              aria-expanded={filterOpen}
            >
              <MdFilterList />
            </button>

            {filterOpen && (
              <div className={styles.filterMenu}>
                <button
                  type="button"
                  className={
                    filter === "all" ? styles.activeFilter : ""
                  }
                  onClick={() => handleFilter("all")}
                >
                  All
                </button>

                <button
                  type="button"
                  className={
                    filter === "income" ? styles.activeFilter : ""
                  }
                  onClick={() => handleFilter("income")}
                >
                  Income
                </button>

                <button
                  type="button"
                  className={
                    filter === "expense" ? styles.activeFilter : ""
                  }
                  onClick={() => handleFilter("expense")}
                >
                  Expense
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            className={styles.headerButton}
            aria-label="Transaction options"
          >
            <MdMoreHoriz />
          </button>
        </div>
      </div>

      <div className={styles.rows}>
        {visibleTransactions.map((transaction) => (
          <TransactionRow
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </div>

      <TransactionPagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredTransactions.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={setPage}
      />
    </section>
  );
}