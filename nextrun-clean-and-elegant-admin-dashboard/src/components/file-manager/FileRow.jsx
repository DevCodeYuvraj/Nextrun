"use client";

import {
  MdFolder,
  MdPlayArrow,
  MdMusicNote,
  MdImage,
  MdInsertDriveFile,
} from "react-icons/md";

import FileActionMenu from "./FileActionMenu";

import styles from "./FileRow.module.css";

const FILE_ICONS = {
  folder: MdFolder,
  video: MdPlayArrow,
  music: MdMusicNote,
  image: MdImage,
  document: MdInsertDriveFile,
};

export default function FileRow({
  file,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}) {
  const Icon =
    FILE_ICONS[file.type] ||
    MdInsertDriveFile;

  return (
    <tr className={styles.row}>
      <td className={styles.nameCell}>
        <div className={styles.file}>
          <div
            className={`${styles.icon} ${
              styles[file.type]
            }`}
          >
            <Icon />
          </div>

          <span
            className={styles.fileName}
            title={file.name}
          >
            {file.name}
          </span>
        </div>
      </td>

      <td>
        <span className={styles.meta}>
          {file.items}
        </span>
      </td>

      <td>
        <span className={styles.meta}>
          {file.modified}
        </span>
      </td>

      <td>
        <span className={styles.size}>
          {file.size}
        </span>
      </td>

      <td className={styles.actionCell}>
        <FileActionMenu
          file={file}
          open={menuOpen}
          onToggle={onToggleMenu}
          onClose={onCloseMenu}
        />
      </td>
    </tr>
  );
}