import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [configContext, setConfigContext] = useState({
    maxElementos: 0,
    prepareTime: 5,
    data:{
      servedDrinks: [],
      servedCustomers: [],
    },
  });

  return (
    <AppContext.Provider value={{ configContext, setConfigContext }}>
      {children}
    </AppContext.Provider>
  );
};
