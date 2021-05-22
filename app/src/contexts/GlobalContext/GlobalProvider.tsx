import { FC } from "react";
import { GlobalContext } from "@contexts";
import { useGlobalContext } from "@contexts";

interface Props {
  restaurantID: number;
}
const GlobalProvider: FC<Props> = ({ children, restaurantID }) => {
  const {
    activeRestaurantID,
    activeMenuID,
    setActiveMenuID,
    activeCategoryID,
    setActiveCategoryID,
  } = useGlobalContext(restaurantID);
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
