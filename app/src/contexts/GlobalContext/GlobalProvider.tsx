import React, { useEffect, useState } from "react";
import type { FC } from "react";
import { GlobalContext } from "@contexts";
import { useRestaurantQuery } from "@shared";

const GlobalProvider: FC = ({ children }) => {
  const [menuID, setMenuID] = useState(0);
  const [categoryID, setCategoryID] = useState(0);
  const [restaurantID, setRestaurantID] = useState(0);
  const [activeMenu, setActiveMenu] = useState("");

  const { data } = useRestaurantQuery();

  useEffect(() => {
    if (data?.restaurant.id) {
      setRestaurantID(data?.restaurant.id);
    }
  }, [data]);

  return (
    <GlobalContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
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
