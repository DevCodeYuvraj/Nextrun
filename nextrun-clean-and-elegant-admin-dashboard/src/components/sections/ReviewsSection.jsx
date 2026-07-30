"use client";

import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

import ReviewCard from "@/components/cards/ReviewCard";
import { reviews } from "@/data/reviews";

import styles from "./ReviewsSection.module.css";

const REVIEWS_PER_PAGE = 3;

export default function ReviewsSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(
    reviews.length / REVIEWS_PER_PAGE
  );

  const startIndex = currentPage * REVIEWS_PER_PAGE;

  const visibleReviews = reviews.slice(
    startIndex,
    startIndex + REVIEWS_PER_PAGE
  );

  function handleNext() {
    setCurrentPage((previousPage) => previousPage + 1);
  }

  function handlePrevious() {
    setCurrentPage((previousPage) => previousPage - 1);
  }

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>User Reviews</h3>

      <div className={styles.content}>

        <div className={styles.buttonArea}>
          {currentPage > 0 && (
            <button
              className={styles.navigationButton}
              type="button"
              onClick={handlePrevious}
              aria-label="Show previous reviews"
            >
              <MdArrowBack size={20} />
            </button>
          )}
        </div>

        <div className={styles.reviewsGrid}>
          {visibleReviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              review={review.review}
            />
          ))}
        </div>

        <div className={styles.buttonArea}>
          {currentPage < totalPages - 1 && (
            <button
              className={styles.navigationButton}
              type="button"
              onClick={handleNext}
              aria-label="Show next reviews"
            >
              <MdArrowForward size={20} />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}