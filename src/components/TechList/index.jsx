import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import styles from "./style.module.scss";
import { TechContext } from "../../providers/TechContext";
import { TechCard } from "./TechCard";
export const TechList = () => {
  const { user } = useContext(UserContext) || { user: [] };
  useContext(TechContext);
  const userTechs = user.techs;
  return (
    <ul className={styles.tech_container}>
      {userTechs.map((tech) => (
        <TechCard tech={tech} key={tech.id} />
      ))}
    </ul>
  );
};
