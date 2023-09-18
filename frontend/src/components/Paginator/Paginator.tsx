import Link from "next/link";
import React from "react";
import styles from "./Paginator.module.css";

export const Paginator = ({
  prevPage,
  nextPage,
  currentPage,
  pageSize,
  type,
}: {
  prevPage: number | null;
  nextPage: number | null;
  currentPage: number;
  pageSize: string;
  type: string;
}) => {
  return (
    <div className={styles["pagination-control"]}>
      <Link
        className={`${
          prevPage === null ? styles["button-disabled"] : styles.button
        } ${styles.buttonGroup} ${prevPage === null ? styles.hidden : ""}`}
        href={`/products?pageSize=${pageSize}&type=${type}&page=${prevPage}`}
      >
        Prev
      </Link>
      <div className={styles.buttonGroup}>
        <span className={styles.currentPage}>Page {currentPage}</span>
      </div>
      <Link
        className={`${
          nextPage === null ? styles["button-disabled"] : styles.button
        } ${styles.buttonGroup} `}
        href={`/products?pageSize=${pageSize}&type=${type}&page=${nextPage}`}
      >
        Next
      </Link>
    </div>
  );
};
