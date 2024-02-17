// UserContext.js
import { createContext, useContext, useState } from 'react';
import { fetchData } from './Portfolio-Website/src/constants';
import { useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
    
  const [usernameee, setUsername] = useState("aryan");


  const login = (user) => {
    setUsername(user);
  };

  const logout = () => {
    setUsername(null);
  };

  return (
    <UserContext.Provider value={{ usernameee, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => {
  return useContext(UserContext);
};