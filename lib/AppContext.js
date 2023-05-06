import React, { useState, useEffect } from "react";
import cookieCutter from "cookie-cutter";
import useAxios from "./useAxios";

export const GlobalContext = React.createContext();

export default function AppContext({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const cookie = cookieCutter.get("user");
    if (cookie) {
      useAxios
        .get(`/users/${JSON.parse(cookie).user_id}`)
        .then((res) => {
          // add user_image to user object
          setUser({ ...JSON.parse(cookie), user_image: res.data.user_image });
        })
        .catch((err) => {
          console.log(err);
        });
           
        
    }
  }, []);

  useEffect(() => {
    // console.log("user", user);
  }, [user]);
  
  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
}
