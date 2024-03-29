import { createContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [techList, setTechList] = useState([]);

  const loginUser = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      localStorage.setItem("@TOKEN", data.token);
      setUser(data.user);
      setTechList(data.user.techs)
      navigate("/dashboard");
    } catch (error) {
      toast.error("Ops! Algo deu errado", {
        style: {
          borderRadius: "6px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const registerUser = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      toast.success("Conta criada com sucesso!", {
        style: {
          borderRadius: "6px",
          background: "#333",
          color: "#fff",
        },
      });
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message, {
        style: {
          borderRadius: "6px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        try {
          setLoading(true);
          const { data } = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          console.log(data)
          setTechList(data.techs)
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
          setUser(null);
          localStorage.removeItem("@TOKEN");
        } finally {
          setLoading(false);
        }
      }
    };
    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        registerUser,
        logout,
        loading,
        techList,
        setTechList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
