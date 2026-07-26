"use client";

import { useState } from "react";
import styles from "./InviteModal.module.css";

export default function InviteModal({
  open,
  onClose,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Member",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `${form.name} invited successfully!`
    );

    setForm({
      name: "",
      email: "",
      role: "Member",
    });

    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Invite Team Member</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label>Name</label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.group}>
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.group}>
            <label>Role</label>

            <select
              name="role"
              value={form.role}
              onChange={handleChange}
            >
              <option>Member</option>
              <option>Manager</option>
              <option>Admin</option>
            </select>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancel}
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className={styles.send}
            >
              Send Invitation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}