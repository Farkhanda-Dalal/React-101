import { createContext, useState } from "react";

import React from "react";

export const ChangeContext = createContext({});

const ContextProvider = ({ children }) => {
  const [change, setChange] = useState("Original");

  return (
    <ChangeContext.Provider value={{ change, setChange }}>
      {children}
    </ChangeContext.Provider>
  );
};

export default ContextProvider;
