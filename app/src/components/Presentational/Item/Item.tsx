import React from "react";
import type { FC } from "react";
import { Card } from "@base";
import { useAllergyContext } from "@contexts";
import { useDietaries, MenuItem } from "@graphql";
import intersection from "src/utility/intersection";
import { Dietaries } from "@presentational";

interface Props {
  item: MenuItem;
}

const Item: FC<Props> = ({ item }) => {
  const { data } = useDietaries(item.id);
  const { activeAllergies } = useAllergyContext();
  if (data?.dietaries && !intersection(activeAllergies, data?.dietaries)) {
    return (
      <Card key={item.id}>
        {item.name}
        <Dietaries itemID={item.id} />
      </Card>
    );
  }
  return null;
};

export { Item };
