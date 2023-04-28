import { AppProvider } from "../../context/AppContext";

import Configuracion from "../Configuracion/Configuracion";
import Dashboard from "../Dashboard/Dashboard";
import Mesa from "../Mesa/Mesa";

import "./App.css";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <Dashboard />
        <Mesa />
        <Configuracion />
      </div>
    </AppProvider>
  );
};

export default App;
