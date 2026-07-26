"use client";

import { useEffect, useRef, useState } from "react";

import {
  MdKeyboardArrowDown,
  MdStar,
  MdStarBorder,
  MdMoreHoriz,
} from "react-icons/md";

import BoardDropdown from "./BoardDropdown";
import InviteModal from "./InviteModal";
import KanbanBoard from "./KanbanBoard";
import styles from "./KanbanPageContent.module.css";

export default function KanbanPageContent() {
  const [favorite, setFavorite] = useState(false);

  const [currentBoard, setCurrentBoard] =
    useState("Project Board");

  const [showBoardMenu, setShowBoardMenu] =
    useState(false);

  const [showInviteModal, setShowInviteModal] =
    useState(false);

  const boardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        boardRef.current &&
        !boardRef.current.contains(event.target)
      ) {
        setShowBoardMenu(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.toolbar}>
          <div className={styles.left}>
            <h2 className={styles.projectTitle}>
              Project #1
            </h2>

            <button
              className={styles.iconButton}
              onClick={() =>
                setFavorite(!favorite)
              }
            >
              {favorite ? (
                <MdStar
                  size={22}
                  color="#FACC15"
                />
              ) : (
                <MdStarBorder size={22} />
              )}
            </button>

            <div
              ref={boardRef}
              style={{
                position: "relative",
              }}
            >
              <button
                className={styles.boardButton}
                onClick={() =>
                  setShowBoardMenu(
                    !showBoardMenu
                  )
                }
              >
                {currentBoard}

                <MdKeyboardArrowDown
                  size={18}
                />
              </button>

              {showBoardMenu && (
                <BoardDropdown
                  currentBoard={
                    currentBoard
                  }
                  onSelect={(board) => {
                    setCurrentBoard(
                      board
                    );

                    setShowBoardMenu(
                      false
                    );
                  }}
                />
              )}
            </div>
          </div>

          <div className={styles.right}>
            <div
              className={
                styles.avatarGroup
              }
            >
              <div
                className={
                  styles.avatar
                }
              >
                A
              </div>

              <div
                className={
                  styles.avatar
                }
              >
                B
              </div>

              <div
                className={
                  styles.avatar
                }
              >
                C
              </div>

              <div
                className={
                  styles.avatar
                }
              >
                D
              </div>

              <div
                className={
                  styles.moreAvatar
                }
              >
                +5
              </div>
            </div>

            <button
              className={
                styles.inviteButton
              }
              onClick={() =>
                setShowInviteModal(true)
              }
            >
              Invite
            </button>

            <button
              className={
                styles.iconButton
              }
            >
              <MdMoreHoriz
                size={22}
              />
            </button>
          </div>
        </div>

        <KanbanBoard />
      </div>

      <InviteModal
        open={showInviteModal}
        onClose={() =>
          setShowInviteModal(false)
        }
      />
    </>
  );
} 