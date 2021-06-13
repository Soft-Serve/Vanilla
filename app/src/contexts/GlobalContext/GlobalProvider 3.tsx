import { FC, useState } from "react";
import { GlobalContext } from "@contexts";

interface Props {
  restaurantID: number;
}
const GlobalProvider: FC<Props> = ({ children, restaurantID }) => {
  const [menuID, setMenuID] = useState(0);
  const [categoryID, setCategoryID] = useState(0);

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
