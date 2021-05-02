import { Card } from "@base";
import React, { FC, useContext } from "react";
import { AllergyContext, AllergyContextData } from "@contexts";
import { useDietaries, Item } from "@graphql";
import intersection from "src/utility/intersection";
import { Dietaries } from "@presentational";

interface Props {
  item: Item;
}

const MenuItem: FC<Props> = ({ item }) => {
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

export { MenuItem };
