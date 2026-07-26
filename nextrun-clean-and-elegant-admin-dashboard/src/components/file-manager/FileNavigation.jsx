"use client";

import { MdMoreHoriz } from "react-icons/md";

import {
  fileCategories,
  fileFolders,
} from "@/data/fileManagerData";

import CategoryItem from "./CategoryItem";
import FolderItem from "./FolderItem";

import styles from "./FileNavigation.module.css";

export default function FileNavigation({
  activeCategory,
  activeFolder,
  onCategoryChange,
  onFolderChange,
}) {
  return (
    <aside className={styles.navigation}>
      <section className={styles.section}>
        <div className={styles.heading}>
          <h3>Categories</h3>

          <button
            type="button"
            aria-label="Category options"
          >
            <MdMoreHoriz />
          </button>
        </div>

        <div className={styles.categoryList}>
          {fileCategories.map(
            (category) => (
              <CategoryItem
                key={category.id}
                category={category}
                active={
                  activeCategory ===
                    category.id &&
                  !activeFolder
                }
                onClick={() =>
                  onCategoryChange(
                    category.id
                  )
                }
              />
            )
          )}
        </div>
      </section>

      <section className={styles.folderSection}>
        <div className={styles.heading}>
          <h3>Go To Folders</h3>

          <button
            type="button"
            aria-label="Folder options"
          >
            <MdMoreHoriz />
          </button>
        </div>

        <div className={styles.folderList}>
          {fileFolders.map((folder) => (
            <FolderItem
              key={folder.id}
              folder={folder}
              active={
                activeFolder?.id ===
                folder.id
              }
              onClick={() =>
                onFolderChange(folder)
              }
            />
          ))}
        </div>
      </section>
    </aside>
  );
}