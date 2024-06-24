import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TareasProvider } from "./components/TareasContext"; // Asegúrate de tener la ruta correcta al archivo

ReactDOM.render(
  <React.StrictMode>
    <TareasProvider>
      <App />
    </TareasProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
