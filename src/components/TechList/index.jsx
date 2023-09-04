import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import trashIcon from '../../assets/Trash.svg'
import editIcon from '../../assets/Pencil.svg'
import styles from './style.module.scss'
import { TechContext } from "../../providers/TechContext";
export const TechList = () => {
  const { user } = useContext(UserContext) || {user: []};
  const {editTech, deleteTech} = useContext(TechContext)
  const userTechs = user.techs
  return (
    <ul className={styles.tech_container}>
        
       {userTechs.map(tech => (
        <li className={styles.tech_card} key={tech.id}>
            <p>{tech.title}</p>
            <div className={styles.tech_aside}>
                <p>{tech.status}</p>
                <button className={styles.tech_button} onClick={() => editTech()}>
                    <img src={editIcon} alt="" />
                </button>
                <button className={styles.tech_button} onClick={() => deleteTech(tech.id)}>
                    <img src={trashIcon} alt="" />
                </button>
            </div>
        </li>
       ) )}
    </ul>
  );
};
