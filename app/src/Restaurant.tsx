import React, { FC, useEffect } from "react";
// import useMenu from "./graphql/useMenu";
// import useMenus from "./graphql/useMenus";
// import { useRestaurant } from "./graphql/useRestaurant";
// import useCategories from "./graphql/useCategories";
// import useCategory from "./graphql/useCategory";

// import useItems from "./graphql/useItems";
// import useDietaries from "./graphql/useDietaries";
import useAllergies from "./graphql/useAllergies";

const Restaurant: FC = () => {
  // const { data, error, loading, restaurantName } = useRestaurant();
  // const { data, loading, error } = useMenus();
  const { data, loading, error } = useAllergies(1);
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) {
    return <h4>Loading...</h4>;
  }
  if (error) {
    return <h4>{error.message}</h4>;
  }
  return (
    <ul>
      <li>
        {data?.allergies.map((menu) => (
          <span key={menu.id}>{menu.name}</span>
        ))}
      </li>
      {/* <li>{data?.category.name}</li> */}
    </ul>
  );
};

export default Restaurant;
