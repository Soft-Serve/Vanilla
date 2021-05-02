import React, { FC, useContext } from "react";
import {
  GlobalContext,
  GlobalContextData,
} from "../../../contexts/GlobalContext";
import { useCategories } from "../../../graphql/useCategories";
import { Button } from "@base";
import { Container } from "../../BaseComponents/Container/Container";
import { Grid } from "../../BaseComponents/Grid/Grid";
import { Items } from "../Items/Items";

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
