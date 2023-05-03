import React, { useState } from "react";

export const GlobalContext = React.createContext();
export default function AppContext({ children }) {
  const [user, setUser] = useState({name : 'test'});
  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
}
