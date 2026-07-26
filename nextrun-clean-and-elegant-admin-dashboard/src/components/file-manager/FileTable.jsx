"use client";

import { useState } from "react";

import FileRow from "./FileRow";

import styles from "./FileTable.module.css";

export default function FileTable({
  files,
}) {
  const [openMenuId, setOpenMenuId] =
    useState(null);

  const handleToggleMenu = (id) => {
    setOpenMenuId((previous) =>
      previous === id
        ? null
        : id
    );
  };

  return (
    <section className={styles.card}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>File Name</th>
              <th>File Items</th>
              <th>Last Modified</th>
              <th>File Size</th>
              <th
                className={
                  styles.actionHeading
                }
              />
            </tr>
          </thead>

          <tbody>
            {files.length > 0 ? (
              files.map((file) => (
                <FileRow
                  key={file.id}
                  file={file}
                  menuOpen={
                    openMenuId === file.id
                  }
                  onToggleMenu={() =>
                    handleToggleMenu(
                      file.id
                    )
                  }
                  onCloseMenu={() =>
                    setOpenMenuId(null)
                  }
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className={
                    styles.empty
                  }
                >
                  No files found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}