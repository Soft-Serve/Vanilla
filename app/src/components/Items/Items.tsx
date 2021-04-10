import React, { FC, useContext } from "react";
import { GlobalContext, GlobalContextData } from "../../contexts/GlobalContext";
import useItems from "../../graphql/useItems/useItems";
import { Card } from "../Card/Card";
import { Container } from "../Container/Container";
import { Dietaries } from "../Dietaries/Dietaries";
import { Grid } from "../Grid/Grid";

const Items: FC = () => {
  const { activeCategoryID } = useContext(GlobalContext) as GlobalContextData;
  const { items, error, loading } = useItems(
    activeCategoryID ? activeCategoryID : 0
  );
  if (loading) return <p>loading</p>;
  if (items?.items) {
    return (
      <Container>
        <Grid size="LG">
          {items.items.map((item) => (
            <Card key={item.id}>
              {item.name}
              <Dietaries itemID={item.id} />
            </Card>
          ))}
        </Grid>
      </Container>
    );
  }
  return <p>{error?.message}</p>;
};

export { Items };
