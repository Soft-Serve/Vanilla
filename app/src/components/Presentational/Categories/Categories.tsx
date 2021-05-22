import React, { FC, useContext } from "react";
import { GlobalContext, GlobalContextData } from "@contexts";
import { Button, Container, Grid } from "@base";
import { Items } from "@presentational";
import { useCategoriesQuery } from "./Categories.query";

const Categories: FC = () => {
  const { activeMenuID, activeCategoryID, setActiveCategoryID } = useContext(
    GlobalContext
  ) as GlobalContextData;

  const { data, error, loading } = useCategoriesQuery({
    variables: {
      menuID: activeMenuID,
    },
    onCompleted: (completedData) => {
      if (completedData?.categories[0].id)
        return setActiveCategoryID(completedData.categories[0].id);
    },
  });

  if (loading) return <p>loading</p>;
  if (data?.categories) {
    return (
      <Container>
        <Grid size="LG" mobileColumns={3}>
          {data?.categories?.map((category) => (
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
