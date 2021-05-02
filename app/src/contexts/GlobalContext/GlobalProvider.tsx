import { FC } from "react";
import { GlobalContext } from "@contexts";
import { useGlobalContext } from "@contexts";

const GlobalProvider: FC = ({ children }) => {
  const {
    activeRestaurantID,
    activeMenuID,
    setActiveMenuID,
    activeCategoryID,
    setActiveCategoryID,
  } = useGlobalContext();
  return (
    <GlobalContext.Provider
      value={{
        activeRestaurantID,
        activeMenuID,
        setActiveMenuID,
        activeCategoryID,
        setActiveCategoryID,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };
