import styles from "./ReviewCard.module.css";

export default function ReviewCard({ name, review }) {
  return (
    <article className={styles.card}>
      <div className={styles.avatar}></div>

      <h4 className={styles.name}>{name}</h4>

      <p className={styles.review}>{review}</p>
    </article>
  );
}