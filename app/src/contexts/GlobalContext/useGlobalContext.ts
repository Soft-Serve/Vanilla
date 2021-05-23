import { useState } from "react";

const useGlobalContext = (restaurantID: number) => {
  const [menuID, setMenuID] = useState(0);
  const [categoryID, setCategoryID] = useState(0);

  return {
    restaurantID,
    menuID,
    setMenuID,
    categoryID,
    setCategoryID,
  };
};

export { useGlobalContext };
