import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import trashIcon from '../../assets/Trash.svg'
import editIcon from '../../assets/Pencil.svg'
import styles from './style.module.scss'
import { TechContext } from "../../providers/TechContext";
export const TechList = () => {
  const { user } = useContext(UserContext) || {user: []};
  const {editTech, deleteTech, setIsEditModalOpen,selectEditingTech} = useContext(TechContext)
  const userTechs = user.techs
  return (
    <ul className={styles.tech_container}>
        
       {userTechs.map(tech => (
        <li className={styles.tech_card} key={tech.id}>
            <h2>{tech.title}</h2>
            <div className={styles.tech_aside}>
                <p>{tech.status}</p>
                <button className={styles.tech_button} onClick={() => selectEditingTech(tech)}>
                    <img src={editIcon} alt="Ícone de lapiz" />
                </button>
                <button className={styles.tech_button} onClick={() => deleteTech(tech.id)}>
                    <img src={trashIcon} alt="Ícone de lixeira" />
                </button>
            </div>
        </li>
       ) )}
    </ul>
  );
};
