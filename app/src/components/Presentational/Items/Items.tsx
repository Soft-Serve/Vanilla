import React, { FC, useContext } from "react";
import { GlobalContext, GlobalContextData } from "@contexts";
import { Container, Grid } from "@base";
import { useItems } from "@graphql";
import { MenuItem } from "@presentational";

const Items: FC = () => {
  const { activeCategoryID } = useContext(GlobalContext) as GlobalContextData;
  const { items, error, loading } = useItems(activeCategoryID);

  if (loading) return <p>loading</p>;
  if (items?.items) {
    return (
      <Container>
        <Grid size="LG">
          {items.items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </Grid>
      </Container>
    );
  }
  return <p>{error?.message}</p>;
};

export { Items };
