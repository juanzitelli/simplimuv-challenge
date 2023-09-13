import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className={styles.button} />;
};
