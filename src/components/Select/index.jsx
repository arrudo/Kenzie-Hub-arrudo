import { forwardRef } from "react";
import styles from "./styles.module.scss";
import { Option } from "./Option";
export const Select = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className={styles.select__container}>
      <label>{label}</label>
      <select className={styles.select__input} {...rest} ref={ref}></select>
      <p className={styles.select__error}>{error ? error.message : null}</p>
    </div>
  );
});
