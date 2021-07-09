import React from "react";
import type { FC } from "react";
import { Card, Title } from "@base";
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
  if (data?.dietaries && intersection(activeAllergies, data?.dietaries)) {
    return null;
  }

  const header = (title: string) => {
    return <Title type="h3">{title}</Title>;
  };

  return (
    <Card header={header(item.name)} key={item.id}>
      <div className="flex justify-between">
        <ItemSizes itemID={item.id} />
        <Dietaries itemID={item.id} />
      </div>
    </Card>
  );
};

export { Item };
