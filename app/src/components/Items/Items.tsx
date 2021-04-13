import React, { FC, useContext } from "react";

import { GlobalContext, GlobalContextData } from "../../contexts/GlobalContext";

import useItems from "../../graphql/useItems/useItems";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import { MenuItem } from "../MenuItem/MenuItem";

const Items: FC = () => {
  const { activeCategoryID } = useContext(GlobalContext) as GlobalContextData;
  const { items, error, loading } = useItems(activeCategoryID);

  if (loading) return <p>loading</p>;
  if (items?.items) {
    return (
      <Container>
        <Grid size="LG">
          {items.items.map((item) => (
            // <Card key={item.id}>
            //   {item.name}
            //   <Dietaries itemID={item.id} />
            // </Card>
            <MenuItem key={item.id} item={item} />
          ))}
        </Grid>
      </Container>
    );
  }
  return <p>{error?.message}</p>;
};

export { Items };
