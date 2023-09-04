import { useContext } from "react";
import styles from "./style.module.scss";
import { TechCard } from "./TechCard";
import { UserContext } from "../../providers/UserContext";
export const TechList = ({}) => {
  const { techList } = useContext(UserContext);
  return (
    <ul className={styles.tech_container}>
      {techList.map((tech) => (
        <TechCard tech={tech} key={tech.id} />
      ))}
    </ul>
  );
};
