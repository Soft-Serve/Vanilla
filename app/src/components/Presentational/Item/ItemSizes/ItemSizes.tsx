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

  if (data?.itemSizes) {
    return (
      <>
        {data.itemSizes.map(size => {
          return (
            <span key={size.id} className="text-sm font-extrabold text-red-400 ">
              ${size.price.toFixed(2)}
            </span>
          );
        })}
      </>
    );
  }
  return null;
};

export { ItemSizes };
