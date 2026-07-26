"use client";

import { useState } from "react";

import {
  MdClose,
  MdAdd,
} from "react-icons/md";

import {
  balanceCard,
} from "@/data/bankingData";

import styles from "./BalanceCard.module.css";

export default function BalanceCard() {
  const [topUpOpen, setTopUpOpen] =
    useState(false);

  const [amount, setAmount] =
    useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !amount ||
      Number(amount) <= 0
    ) {
      return;
    }

    setAmount("");
    setTopUpOpen(false);
  };

  return (
    <>
      <section className={styles.card}>
        <div className={styles.circleOne} />
        <div className={styles.circleTwo} />

        <div className={styles.top}>
          <h3>{balanceCard.owner}</h3>

          <div className={styles.brand}>
            <span />
            <span />
          </div>
        </div>

        <div className={styles.balance}>
          <span>Balance</span>

          <strong>
            {balanceCard.balance}
          </strong>
        </div>

        <div className={styles.bottom}>
          <button
            type="button"
            className={styles.topUpButton}
            onClick={() =>
              setTopUpOpen(true)
            }
          >
            Top-up Balance
          </button>

          <div className={styles.cardDetails}>
            <strong>
              {balanceCard.cardNumber}
            </strong>

            <div className={styles.valid}>
              <span>Valid Thru</span>

              <strong>
                {balanceCard.validThru}
              </strong>
            </div>
          </div>
        </div>
      </section>

      {topUpOpen && (
        <div
          className={styles.overlay}
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setTopUpOpen(false);
            }
          }}
        >
          <div className={styles.modal}>
            <div
              className={
                styles.modalHeader
              }
            >
              <div>
                <span>
                  Cahaya Hikari
                </span>

                <h3>
                  Top-up Balance
                </h3>
              </div>

              <button
                type="button"
                className={
                  styles.closeButton
                }
                onClick={() =>
                  setTopUpOpen(false)
                }
                aria-label="Close"
              >
                <MdClose />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
            >
              <label
                className={
                  styles.amountField
                }
              >
                <span>Amount</span>

                <div>
                  <span>$</span>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    value={amount}
                    onChange={(event) =>
                      setAmount(
                        event.target.value
                      )
                    }
                    autoFocus
                  />
                </div>
              </label>

              <button
                type="submit"
                className={
                  styles.submitButton
                }
              >
                <MdAdd />

                Top-up Balance
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}