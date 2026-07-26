// src/components/invoice/InvoicePageContent.jsx

"use client";

import { useState } from "react";

import {
  invoices as initialInvoices,
} from "@/data/invoiceData";

import InvoiceStats from "./InvoiceStats";
import InvoiceTable from "./InvoiceTable";
import RightSidebar from "./RightSidebar";

import styles from "./InvoicePageContent.module.css";

export default function InvoicePageContent() {
  const [invoices, setInvoices] =
    useState(initialInvoices);

  const handleCreateInvoice = (
    newInvoice
  ) => {
    setInvoices((previous) => [
      newInvoice,
      ...previous,
    ]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <InvoiceStats />

        <InvoiceTable
          invoices={invoices}
          setInvoices={setInvoices}
        />
      </div>

      <div className={styles.right}>
        <RightSidebar
          onCreateInvoice={
            handleCreateInvoice
          }
        />
      </div>
    </div>
  );
}