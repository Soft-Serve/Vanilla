import React, { FC, useContext } from "react";
import { GlobalContext, GlobalContextData } from "@contexts";
import { useCategories } from "@graphql";
import { Button, Container, Grid } from "@base";
import { Items } from "@presentational";

const Categories: FC = () => {
  const { activeMenuID, activeCategoryID, setActiveCategoryID } = useContext(
    GlobalContext
  ) as GlobalContextData;
  const { categories, error, loading } = useCategories(activeMenuID);

  if (loading) return <p>loading</p>;
  if (categories?.categories) {
    return (
      <Container>
        <Grid size="LG" mobileColumns={3}>
          {categories.categories.map((category) => (
            <Button
              type="button"
              colour="primary"
              size="M"
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
