import { forwardRef } from "react";
import styles from "./styles.module.scss";
export const Select = forwardRef(({ error, ...rest }, ref) => {
  return (
    <div className={styles.select__container}>
      <label>Selecionar módulo</label>
      <select
        className={styles.select__input}
        {...rest}
        ref={ref}
        name="course_module"
      >
        <option value="">Selecione seu Módulo</option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro Módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo Módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro Módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
      </select>
      <p className={styles.select__error}>{error ? error.message : null}</p>
    </div>
  );
});
