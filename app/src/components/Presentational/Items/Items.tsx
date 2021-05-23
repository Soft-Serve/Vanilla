import React, { FC, useContext } from "react";
import { GlobalContext, GlobalContextData } from "@contexts";
import { Container, Grid } from "@base";
import { MenuItem } from "@presentational";
import { useItemsQuery } from "./Items.query";

const Items: FC = () => {
  const { categoryID } = useContext(GlobalContext) as GlobalContextData;
  const { data, loading, error } = useItemsQuery({
    variables: {
      categoryID,
    },
  });

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  return (
    <Container>
      <Grid size="LG">
        {data?.items?.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </Grid>
    </Container>
  );
};

export { Items };
