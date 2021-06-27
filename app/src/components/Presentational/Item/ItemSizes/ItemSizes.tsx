import React from "react";
import type { FC } from "react";
import { useItemSizeQuery } from "./ItemSizes.query";

interface Props {
  itemID: number;
}

const ItemSizes: FC<Props> = ({ itemID }) => {
  const { data, error, loading } = useItemSizeQuery({
    variables: {
      itemID,
    },
  });
  if (loading) return <p>loading</p>;
  if (error) return <p>errror</p>;
  if (data?.itemSizes?.length) {
    return (
      <>
        {data.itemSizes.map((size) => {
          return (
            <ul key={size.id}>
              <li>{size.price} $</li>
              <li>{size.unit}</li>
            </ul>
          );
        })}
      </>
    );
  }
  return null;
};

export { ItemSizes };
