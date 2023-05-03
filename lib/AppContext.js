import React, { useState, useEffect } from "react";

export const GlobalContext = React.createContext();

export default function AppContext({ children }) {
  const [user, setUser] = useState({ name: 'test' });
  
  // load user cookie from local storage
  useEffect(() => { 
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
   }, []);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
}
