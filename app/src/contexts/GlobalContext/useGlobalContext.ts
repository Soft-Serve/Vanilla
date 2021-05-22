import { useState } from "react";

const useGlobalContext = (restaurantID: number) => {
  const activeRestaurantID = restaurantID;
  const [activeMenuID, setActiveMenuID] = useState(0);
  const [activeCategoryID, setActiveCategoryID] = useState(0);

  return {
    activeRestaurantID,
    activeMenuID,
    setActiveMenuID,
    activeCategoryID,
    setActiveCategoryID,
  };
};

export { useGlobalContext };
