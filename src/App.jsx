import { Toaster } from "react-hot-toast";
import { RoutesMain } from "./routes/RoutesMain";
import "./styles/index.scss";
function App() {
  return (
    <>
      <RoutesMain />

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
