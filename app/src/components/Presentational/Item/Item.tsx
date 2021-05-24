import React from "react";
import type { FC } from "react";
import { Card } from "@base";
import { useAllergyContext } from "@contexts";
import { useDietaryQuery, MenuItem } from "@graphql";
import intersection from "src/utility/intersection";
import { Dietaries } from "@presentational";
import { ItemSizes } from "./ItemSizes";

interface Props {
  item: MenuItem;
}

const Item: FC<Props> = ({ item }) => {
  const { data, error, loading } = useDietaryQuery({
    variables: {
      itemID: item.id,
    },
  });
  const { activeAllergies } = useAllergyContext();
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  if (data?.dietaries && intersection(activeAllergies, data?.dietaries))
    return null;

  return (
    <Card key={item.id}>
      {item.name}
      <Dietaries itemID={item.id} />
      <ItemSizes itemID={item.id} />
    </Card>
  );
};

export { Item };
