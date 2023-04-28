// src/components/Dashboard.tsx
import React, { useContext, useEffect, useState } from "react";
import { Data, Order } from "../../types";
import "./Dashboard.css";
import { AppContext } from "../../context/AppContext";

const Dashboard: React.FC = () => {
  const { configContext, setConfigContext } = useContext(AppContext);
  const [data, setData] = useState<Data | null>(null);
  const [servidosIsOpen, setServidosIsOpen] = useState<boolean>(true);
  const [clientesIsOpen, setClientesIsOpen] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:3030/served")
      .then((response) => response.json())
      .then((data: Data) => {
        const newConfig = {
          ...configContext,
          data: data
        };
        setConfigContext(newConfig);
        setData(data)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-servidos">
        <h3
          className="dashboard-item"
          onClick={() => setServidosIsOpen(!servidosIsOpen)}
        >
          Servidos
        </h3>
        {servidosIsOpen && (
          <div className="dashboard-data">
            {configContext.data.servedDrinks.map((order: Order, i: number) => (
              <p key={i}>
                Usuario: {order.userId}, Bebida: {order.drinkType}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="dashboard-clients">
        <h3
          onClick={() => setClientesIsOpen(!clientesIsOpen)}
          className="dashboard-item"
        >
          Clientes
        </h3>
        {clientesIsOpen && (
          <div className="dashboard-data">
            {configContext.data.servedCustomers.map((customer: string, i: number) => (
              <p key={i}>{customer}</p>
            ))}
          </div>
        )}
      </div>
      <p>Prepare Time: {configContext.prepareTime}</p>
    </div>
  );
};

export default Dashboard;
