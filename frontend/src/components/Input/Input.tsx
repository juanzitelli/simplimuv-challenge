import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

export const Input = (
  props: Partial<InputHTMLAttributes<HTMLInputElement>> & { label: string }
) => {
  return (
    <label className={styles.label} htmlFor={props.name}>
      {props.label}
      <input {...props} className={styles.input} />
    </label>
  );
};
