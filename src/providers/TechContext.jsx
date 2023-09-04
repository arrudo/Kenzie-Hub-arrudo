import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";

export const TechContext = createContext({});
export const TechProvider = ({ children }) => {
  const { techList, setTechList } = useContext(UserContext);
  const [isTechModalOpen, setIsTechModalOpen] = useState(false);

  useEffect(() => {
    const getTechList = async () => {
      const token = localStorage.getItem("@TOKEN");
      try {
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userTechs = data.techs;
        setTechList(userTechs);
      } catch (error) {
        console.log(error);
      }
    };
    getTechList();
  }, []);

  const addTech = async (formData) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      setTechList([...techList, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTech = async (deletingId) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      await api.delete(`/users/techs/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechList = techList.filter((tech) => tech.id !== deletingId);
      setTechList(newTechList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        techList,
        setTechList,
        setIsTechModalOpen,
        isTechModalOpen,
        addTech,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};