"use client";

import styles from "./TicketPagination.module.css";

export default function TicketPagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}) {
  const start =
    totalItems === 0
      ? 0
      : (currentPage - 1) *
          itemsPerPage +
        1;

  const end = Math.min(
    currentPage * itemsPerPage,
    totalItems
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(
        currentPage - 1
      );
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(
        currentPage + 1
      );
    }
  };

  return (
    <div className={styles.pagination}>
      <p className={styles.info}>
        Showing{" "}
        <span>
          {start}-{end}
        </span>{" "}
        from{" "}
        <span>{totalItems}</span>{" "}
        data
      </p>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.textButton}
          disabled={currentPage === 1}
          onClick={handlePrevious}
        >
          Prev
        </button>

        {Array.from(
          { length: totalPages },
          (_, index) => index + 1
        ).map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            className={`${styles.pageButton} ${
              currentPage === pageNumber
                ? styles.active
                : ""
            }`}
            onClick={() =>
              onPageChange(pageNumber)
            }
          >
            {pageNumber}
          </button>
        ))}

        <button
          type="button"
          className={styles.textButton}
          disabled={
            currentPage === totalPages
          }
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}