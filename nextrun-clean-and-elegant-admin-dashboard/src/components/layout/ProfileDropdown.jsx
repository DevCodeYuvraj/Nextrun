"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import {
  MdAccountCircle,
  MdHelpOutline,
  MdKeyboardArrowDown,
  MdLogout,
  MdManageAccounts,
} from "react-icons/md";

import styles from "./ProfileDropdown.module.css";

export default function ProfileDropdown() {
  const router = useRouter();
  const wrapperRef = useRef(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  const handleNavigation = (href) => {
    setOpen(false);
    router.push(href);
  };

  const handleLogout = () => {
    setOpen(false);

    console.log("Logout clicked");
  };

  return (
    <div
      className={styles.wrapper}
      ref={wrapperRef}
    >
      <button
        type="button"
        className={`${styles.profile} ${
          open ? styles.profileActive : ""
        }`}
        onClick={() =>
          setOpen((previous) => !previous)
        }
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <div className={styles.avatar}>
          JD
        </div>

        <div className={styles.userInfo}>
          <h4>John Doe</h4>

          <span>Administrator</span>
        </div>

        <MdKeyboardArrowDown
          className={`${styles.arrow} ${
            open ? styles.arrowOpen : ""
          }`}
          size={22}
        />
      </button>

      {open && (
        <div
          className={styles.dropdown}
          role="menu"
        >
          <div className={styles.profileHeader}>
            <div className={styles.largeAvatar}>
              JD
            </div>

            <div className={styles.profileDetails}>
              <h3>John Doe</h3>

              <span>Administrator</span>

              <p>john.doe@nextrun.com</p>
            </div>
          </div>

          <div className={styles.menu}>
            <button
              type="button"
              onClick={() =>
                handleNavigation("/user")
              }
            >
              <span className={styles.menuIcon}>
                <MdAccountCircle />
              </span>

              <span className={styles.menuText}>
                <strong>My Profile</strong>

                <small>
                  View and edit your profile
                </small>
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                handleNavigation(
                  "/#"
                )
              }
            >
              <span className={styles.menuIcon}>
                <MdManageAccounts />
              </span>

              <span className={styles.menuText}>
                <strong>
                  Account Settings
                </strong>

                <small>
                  Manage your account
                </small>
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                handleNavigation("/#")
              }
            >
              <span className={styles.menuIcon}>
                <MdHelpOutline />
              </span>

              <span className={styles.menuText}>
                <strong>
                  Help & Support
                </strong>

                <small>
                  Get help with Nextrun
                </small>
              </span>
            </button>
          </div>

          <div className={styles.footer}>
            <button
              type="button"
              className={styles.logout}
              onClick={handleLogout}
            >
              <span
                className={
                  styles.logoutIcon
                }
              >
                <MdLogout />
              </span>

              <span>
                <strong>Logout</strong>

                <small>
                  Sign out of your account
                </small>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}