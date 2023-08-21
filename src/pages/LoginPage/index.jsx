import { useNavigate } from "react-router-dom";
import { Formulary } from "../../components/Formulary";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../formScheme";
import styles from "./style.module.scss";
import { api } from "../../services/api";
import { toast } from "react-hot-toast";

export const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

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

  const submit = (formData) => {
    loginUser(formData);
  };
  return (
    <>
      <Header />
      <div className="container">
        <Formulary onSubmit={handleSubmit(submit)}>
          <div className={styles.form__container}>
            <h1>Login</h1>
            <Input
              id={"userEmail"}
              label={"Email"}
              type={"email"}
              placeholder={"Digite aqui seu email"}
              {...register("email")}
              error={errors.email}
            />
            <Input
              id={"userPassword"}
              label={"Senha"}
              type={"password"}
              placeholder={"Digite aqui sua senha"}
              {...register("password")}
              error={errors.password}
            />
            <button type="submit">Entrar</button>
            <p>Ainda não possui uma conta?</p>
            <button
              className="button--default"
              type="button"
              onClick={() => {
                navigate("/register");
              }}
            >
              Cadastre-se
            </button>
          </div>
        </Formulary>
      </div>
    </>
  );
};
