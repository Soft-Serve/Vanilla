import { Card } from "@base";
import React, { FC, useContext } from "react";
import { AllergyContext, AllergyContextData } from "@contexts";
import { useDietaries, MenuItem } from "@graphql";
import intersection from "src/utility/intersection";
import { Dietaries } from "@presentational";

interface Props {
  item: MenuItem;
}

const Item: FC<Props> = ({ item }) => {
  const { data } = useDietaries(item.id);
  const { activeAllergies } = useContext(AllergyContext) as AllergyContextData;
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
