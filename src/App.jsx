import { Toaster } from "react-hot-toast";
import { RoutesMain } from "./routes/RoutesMain";
import "./styles/index.scss";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
function App() {
  const { loading } = useContext(UserContext);
  return (
    <>
      {loading ? <h1>Carregando...</h1> : <RoutesMain />}

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
