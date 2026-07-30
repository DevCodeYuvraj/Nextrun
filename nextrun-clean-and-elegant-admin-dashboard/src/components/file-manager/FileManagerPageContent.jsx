"use client";

import { useMemo, useState } from "react";

import StorageCards from "./StorageCards";
import FileNavigation from "./FileNavigation";
import FileToolbar from "./FileToolbar";
import FileTable from "./FileTable";

import {
  initialFiles,
} from "@/data/fileManagerData";

import styles from "./FileManagerPageContent.module.css";

export default function FileManagerPageContent() {
  const [activeCategory, setActiveCategory] =
    useState("all");

  const [activeFolder, setActiveFolder] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const filteredFiles = useMemo(() => {
    let files = initialFiles;

    if (activeCategory !== "all") {
      files = files.filter(
        (file) =>
          file.category === activeCategory
      );
    }

    const query =
      search.trim().toLowerCase();

    if (query) {
      files = files.filter((file) =>
        file.name
          .toLowerCase()
          .includes(query)
      );
    }

    return files;
  }, [activeCategory, search]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveFolder(null);
  };

  const handleFolderChange = (folder) => {
    setActiveFolder(folder);
    setActiveCategory("all");
  };

  return (
    <div className={styles.page}>
      <StorageCards />

      <div className={styles.workspace}>
        <FileNavigation
          activeCategory={activeCategory}
          activeFolder={activeFolder}
          onCategoryChange={
            handleCategoryChange
          }
          onFolderChange={
            handleFolderChange
          }
        />

        <main className={styles.main}>
          <FileToolbar
            activeFolder={activeFolder}
            search={search}
            onSearchChange={setSearch}
          />

          <FileTable
            files={filteredFiles}
          />
        </main>
      </div>
    </div>
  );
}