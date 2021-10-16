import { createContext, useContext } from "react";
import { useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [joinUser, setJoinUser] = useState();
  const providerData = { user, setUser, joinUser, setJoinUser };

  return <UserContext.Provider value={providerData}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
