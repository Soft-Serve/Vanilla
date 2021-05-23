import { FC } from "react";
import { GlobalContext } from "@contexts";
import { useGlobalContext } from "@contexts";

interface Props {
  restaurantID: number;
}
const GlobalProvider: FC<Props> = ({ children, restaurantID }) => {
  const { menuID, setMenuID, categoryID, setCategoryID } =
    useGlobalContext(restaurantID);
  return (
    <GlobalContext.Provider
      value={{
        restaurantID,
        menuID,
        setMenuID,
        categoryID,
        setCategoryID,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };
