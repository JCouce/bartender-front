// src/components/Configuracion.tsx
import React, { useContext, useState } from "react";
import "./Configuracion.css";
import { AppContext } from "../../context/AppContext";

const Configuracion: React.FC = () => {
  const { configContext, setConfigContext } = useContext(AppContext);

  const [maxElementos, setMaxElementos] = useState<string>(
    configContext.maxElementos
  );
  const [prepareTime, setPrepareTime] = useState<string>(
    configContext.prepareTime
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newConfig = {
      ...configContext,
      maxElementos: maxElementos,
      prepareTime: prepareTime,
    };
    setConfigContext(newConfig);

    const config = {
      maxElementos,
      prepareTime,
    };

    fetch("http://localhost:3030/config", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(config),
    })
      .then((response) => response)
      .then((data) => console.log("Config successful:", data))
      .catch((error) => console.error("Error sending config:", error));
  };

function handleReset(): void {
  fetch("http://localhost:3030/reset")
  .then((response) => {
    const newConfig = {
      maxElementos: 0,
      prepareTime: 5,
      data:{
        servedDrinks: [],
        servedCustomers: [],
      },
    };
    setConfigContext(newConfig);
    return response
  })
  .catch((error) => console.error("Error fetching data:", error));
}

  return (
    <div className="config-container">
      <h2 className="config-title">Configuración</h2>
      <form className="config-form" onSubmit={handleSubmit}>
        <div className="config-form-item">
          <label htmlFor="prepareTime">Tiempo de preparación:</label>
          <input
            type="text"
            id="prepareTime"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            value={prepareTime}
            onChange={(e) => setPrepareTime(e.target.value)}
          />
        </div>
        <button type="submit">Enviar configuración</button>
        <button onClick={() => handleReset()}>Reset entries</button>
      </form>
    </div>
  );
};

export default Configuracion;
