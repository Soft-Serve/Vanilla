import { useEffect, useState } from "react";
import { useMenus, useCategories } from "@graphql";

const useGlobalContext = (restaurantID: number) => {
  const { menus } = useMenus();
  const activeRestaurantID = restaurantID;
  const [activeMenuID, setActiveMenuID] = useState(menus?.menus[0].id);
  const { categories } = useCategories(activeMenuID);
  const [activeCategoryID, setActiveCategoryID] = useState(
    categories?.categories[0].id
  );

  useEffect(() => setActiveMenuID(menus?.menus[0].id), [menus]);
  useEffect(
    () => setActiveCategoryID(categories?.categories[0].id),
    [categories]
  );

  return {
    activeRestaurantID,
    activeMenuID,
    setActiveMenuID,
    activeCategoryID,
    setActiveCategoryID,
  };
};

export { useGlobalContext };
