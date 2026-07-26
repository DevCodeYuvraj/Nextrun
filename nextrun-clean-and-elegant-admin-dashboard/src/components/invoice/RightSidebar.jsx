"use client";

import PaymentCard from "./PaymentCard";
import RecentRecipients from "./RecentRecipients";
import SendInvoiceForm from "./SendInvoiceForm";

import styles from "./RightSidebar.module.css";

export default function RightSidebar() {
  return (
    <div className={styles.sidebar}>
      <PaymentCard />
      <RecentRecipients />
      <SendInvoiceForm />
    </div>
  );
}