"use client";

import {
  storageCards,
} from "@/data/fileManagerData";

import StorageCard from "./StorageCard";

import styles from "./StorageCards.module.css";

export default function StorageCards() {
  return (
    <section className={styles.grid}>
      {storageCards.map((storage) => (
        <StorageCard
          key={storage.id}
          storage={storage}
        />
      ))}
    </section>
  );
}