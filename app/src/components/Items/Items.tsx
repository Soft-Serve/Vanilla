import React, { FC } from "react";
import useItems from "../../graphql/useItems/useItems";

interface Props {
  itemID: number;
}
const Items: FC<Props> = ({ itemID }) => {
  const { items, error, loading } = useItems(itemID);
  if (loading) return <p>loading</p>;
  if (items?.items) {
    return (
      <ul>
        {items.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
  return <p>{error?.message}</p>;
};

export { Items };
