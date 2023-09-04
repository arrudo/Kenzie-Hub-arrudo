import trashIcon from "../../../assets/Trash.svg";
import editIcon from "../../../assets/Pencil.svg";
import styles from "./style.module.scss";
import { TechContext } from "../../../providers/TechContext";
import { useContext } from "react";
export const TechCard = ({tech}) => {
  const { deleteTech, selectEditingTech } = useContext(TechContext)

  return (
    <li className={styles.tech_card} key={tech.id}>
      <h2>{tech.title}</h2>
      <div className={styles.tech_aside}>
        <p>{tech.status}</p>
        <button
          className={styles.tech_button}
          onClick={() => selectEditingTech(tech)}
        >
          <img src={editIcon} alt="Ícone de lapiz" />
        </button>
        <button
          className={styles.tech_button}
          onClick={() => deleteTech(tech.id)}
        >
          <img src={trashIcon} alt="Ícone de lixeira" />
        </button>
      </div>
    </li>
  );
};
