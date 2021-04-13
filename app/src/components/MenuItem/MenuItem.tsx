import React, { FC, useContext } from "react";
import {
  AllergyContext,
  AllergyContextData,
} from "../../contexts/AllergyContext";
import useDietaries from "../../graphql/queries/useDietaries";
import { Item } from "../../graphql/useItems";
import intersection from "../../utility/intersection";
import { Card } from "../Card/Card";
import { Dietaries } from "../Dietaries/Dietaries";
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
