import Link from "next/link";
import React from "react";
import styles from "./ThankYouPage.module.css";
import { Button } from "@/components/Button/Button";

type Props = {};

const ThankYouPage: React.FC<Props> = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerBox}>
        <h1 className={styles.title} data-testid={"thank-you"}>
          Thank You!
        </h1>
        <p className={styles.message}>
          Your form submission has been received.
        </p>
        <Link href={`/products`}>
          <Button>Back to products listing</Button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
