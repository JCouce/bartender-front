// src/components/Mesa.tsx
import React, { useContext, useState } from "react";
import { Order, DrinkType } from "../../types";
import ProgressBar from '../Progress-bar/ProgressBar'
import "./Mesa.css";
import { AppContext } from "../../context/AppContext";

const Mesa: React.FC = () => {
  const { configContext, setConfigContext } = useContext(AppContext);
  const [asientos, setAsientos] = useState<(string | null)[]>([
    null,
    null,
    null,
    null,
  ]);

  const duration:number = configContext.prepareTime * 1000;
  const [childKey, setChildKey] = useState(0);

  const restartChildLifecycle = () => {
    setChildKey((prevKey) => prevKey + 1);
  };


  const handleOrder = (userId: string, drinkType: DrinkType) => {
    const order: Order = { userId, drinkType };
    
    fetch("http://localhost:3030/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
    .then((response) => {
      if (response.status === 200) {
          restartChildLifecycle();
          const newConfig = {
            ...configContext,
            data: {
              servedDrinks:[...configContext.data.servedDrinks, order],
              servedCustomers: [...configContext.data.servedCustomers, order.userId]
            }
          };
          setConfigContext(newConfig);
        }
        return response
      })
      .then((data) => console.log("Order successful:", data))
      .catch((error) => console.error("Error placing order:", error));
  };

  return (
    <div className="mesas-container">
      <h2 className="mesas-title">Mesas</h2>
      <div className="mesa">
        {asientos.map((asiento, i) => (
          <div key={i}>
            <button
              className="asiento"
              onClick={() => {
                if (!asiento) {
                  const userId = `user${i + 1}`;
                  setAsientos(
                    asientos.map((a, index) => (index === i ? userId : a))
                  );
                }
              }}
            >
              {asiento ? `${asiento}` : `Asiento ${i + 1}: Vacío`}
            </button>
            {asiento && (
              <>
                <button className="ask-beer" onClick={() => handleOrder(asiento, "BEER")}>
                  🍺 BEER
                </button>
                <button className="ask-drink" onClick={() => handleOrder(asiento, "DRINK")}>
                  🍸 DRINK
                </button>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="progress-bar">
        <ProgressBar key={childKey} duration={duration}/>
      </div>
    </div>
  );
};

export default Mesa;
