import React, { FC, useEffect } from "react";
import { Button } from "./components/Button/Button";
// import useMenu from "./graphql/useMenu";
// import useMenus from "./graphql/useMenus";
// import useRestaurant from "./graphql/useRestaurant";
// import useCategories from "./graphql/useCategories";
// import useCategory from "./graphql/useCategory";

// import useItems from "./graphql/useItems";
// import useDietaries from "./graphql/useDietaries";
import useAllergies from "./graphql/useAllergies";

const Restaurant: FC = () => {
  const { data, error, loading } = useAllergies(1);
  // const { data, loading, error } = useMenu(1);
  // const { data, loading, error } = useMenus();
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
    <div>
      <Button size="LG">hello</Button>
    </div>
  );
};
export default Restaurant;
