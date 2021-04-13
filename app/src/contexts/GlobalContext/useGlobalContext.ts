import { useEffect, useState } from "react";
import useRestaurant from "../../graphql/queries/useRestaurant";
import { useCategories } from "../../graphql/useCategories";
import { useMenus } from "../../graphql/useMenus";

const useGlobalContext = () => {
  const { data: restaurant } = useRestaurant();
  const { menus } = useMenus();

  const activeRestaurantID = restaurant?.restaurant.id;
  const [activeMenuID, setActiveMenuID] = useState(menus?.menus[0].id);
  const { categories } = useCategories(activeMenuID);
  const [activeCategoryID, setActiveCategoryID] = useState(
    categories?.categories[0].id
  );

  useEffect(() => setActiveMenuID(menus?.menus[0].id), [menus]);
  useEffect(() => setActiveCategoryID(categories?.categories[0].id), [
    categories,
  ]);

  return {
    activeRestaurantID,
    activeMenuID,
    setActiveMenuID,
    activeCategoryID,
    setActiveCategoryID,
  };
};

export { useGlobalContext };
