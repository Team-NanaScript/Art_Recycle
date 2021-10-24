import { createContext, useContext, useState } from "react";

const AtelierContext = createContext();

export const useAtelierContext = () => {
  return useContext(AtelierContext);
};

const AtelierContextProvider = ({ children }) => {
  const [atelier, setAtelier] = useState([]);

  const propsStore = {
    clickTag,
    hashTagList,
    deleteHashTag,
  };

  return (
    <AtelierContext.Provider value={propsStore}>
      {children}
    </AtelierContext.Provider>
  );
};

export default AtelierContextProvider;
