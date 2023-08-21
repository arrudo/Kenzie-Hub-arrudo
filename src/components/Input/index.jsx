import { forwardRef } from "react";
import styles from "./style.module.scss";
export const Input = forwardRef(({ id, label, error, ...rest }, ref) => {
  return (
    <div className={styles.input__container}>
      <label className={styles.input__label} htmlFor={id}>{label} </label>
      <input id={id} ref={ref} {...rest} />
      <p className={styles.input__error}>{error ? error.message : null}</p>
    </div>
  );
});
