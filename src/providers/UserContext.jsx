import { createContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const loginUser = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
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
      toast.success("Conta criada com sucesso!");
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
    setUser({});
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  
    useEffect(() => {
      const loadUser = async () => {
        const token = localStorage.getItem("@TOKEN");

        if (token) {
            try {
                const { data } = await api.get("/profile", {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                });
                setUser(data);
              } catch (error) {
                console.log(error);
                localStorage.removeItem("@TOKEN");
              }
        }
      };
      loadUser();
    }, []);
  

  return (
    <UserContext.Provider
      value={{ user, setUser, loginUser, registerUser, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
