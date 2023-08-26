import { Toaster } from "react-hot-toast";
import { RoutesMain } from "./routes/RoutesMain";
import "./styles/index.scss";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { LoadingWheel } from "./components/LoadingWheel";
function App() {
  const { loading } = useContext(UserContext);
  return (
    <>
      {loading ? <LoadingWheel /> : <RoutesMain />}

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
