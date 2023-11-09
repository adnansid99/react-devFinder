import { createContext, useState } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
function ContextProvider({ children }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const wareHouse = { data, setData, isLoading, setIsLoading };
  return (
    <AppContext.Provider value={wareHouse}>{children}</AppContext.Provider>
  );
}

export { AppContext, ContextProvider };
