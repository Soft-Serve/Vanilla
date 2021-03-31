import React, { FC } from "react";
import useItems from "../../graphql/useItems/useItems";
import { Card } from "../Card/Card";
import { Container } from "../Container/Container";
import { Dietaries } from "../Dietaries/Dietaries";
import { Grid } from "../Grid/Grid";

interface Props {
  categoryID: number;
}

const Items: FC<Props> = ({ categoryID }) => {
  const { items, error, loading } = useItems(categoryID);
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
