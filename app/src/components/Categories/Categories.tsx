import React, { FC, useContext } from "react";
import { GlobalContext, GlobalContextData } from "../../contexts/GlobalContext";
import { useCategories } from "../../graphql/useCategories";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import { Items } from "../Items/Items";

const Categories: FC = () => {
  const { activeMenuID, activeCategoryID, setActiveCategoryID } = useContext(
    GlobalContext
  ) as GlobalContextData;
  const { categories, error, loading } = useCategories(
    activeMenuID ? activeMenuID : 0
  );

  if (loading) return <p>loading</p>;
  if (categories?.categories) {
    return (
      <Container>
        <Grid size="LG" mobileColumns={3}>
          {categories.categories.map((category) => (
            <Button
              onClick={() => setActiveCategoryID(category.id)}
              key={category.id}
            >
              {category.name}
            </Button>
          ))}
        </Grid>

        {activeCategoryID && <Items />}
      </Container>
    );
  }
  return <p>{error?.message}</p>;
};

export { Categories };
