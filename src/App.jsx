import { Toaster } from "react-hot-toast";
import { RoutesMain } from "./routes/RoutesMain";
import "./styles/index.scss";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
function App() {
  const { loading } = useContext(UserContext);
  return (
    <>
      {loading ? (
        <h1 className="loading_heading">Carregando...</h1>
      ) : (
        <RoutesMain />
      )}

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
