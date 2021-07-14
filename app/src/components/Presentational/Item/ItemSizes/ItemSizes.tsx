import React from "react";
import type { FC } from "react";
import { useItemSizeQuery } from "@shared";

interface Props {
  itemID: number;
}

const ItemSizes: FC<Props> = ({ itemID }) => {
  const { data, error, loading } = useItemSizeQuery({
    variables: {
      itemID,
    },
  });

  const renderPrice = () => {
    if (data?.itemSizes.length === 1) {
      const singlePrice = data?.itemSizes[0]?.price.toFixed(2);
      return `$ ${singlePrice}`;
    }

    const lowestPrice = data?.itemSizes
      .slice()
      .sort((a, b) => a.price - b.price)[0]
      ?.price?.toFixed(2);
    return `Starting from $${lowestPrice}`;
  };

  if (loading) return <p>loading</p>;
  if (error) return <p>errror</p>;

  return <span className="text-sm font-extrabold text-red-400 ">{renderPrice()}</span>;
};

export { ItemSizes };
