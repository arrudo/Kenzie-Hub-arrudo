import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";

export const DashboardPage = ({ user, setUser }) => {
  const navigate = useNavigate();
  const logout = () => {
    setUser({});
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <Header>
          <button onClick={logout}>Sair</button>
        </Header>
        <section>
          <h1>Olá, {user.name}</h1>
          <p>{user.course_module}</p>
        </section>
        <section>
          <h1>Que pena! Estamos em desenvolvimento :(</h1>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </section>
      </div>
    </>
  );
};
