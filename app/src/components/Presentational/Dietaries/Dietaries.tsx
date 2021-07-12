import React from "react";
import type { FC } from "react";
import { useDietaryQuery } from "@graphql";

interface Props {
  itemID: number;
}

interface Allergens {
  dietary_id: number;
  id: number;
  menu_item_id: number;
  name: string;
}

const renderAllergens = (arr: Allergens[]) => {
  const items = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i === arr.length - 1) {
      items.push(
        <li className="inline-block italic" key={arr[i].id}>
          {arr[i].name}
        </li>
      );
    } else {
      items.push(
        <li className="inline-block italic" key={arr[i].id}>
          {arr[i].name},&nbsp;
        </li>
      );
    }
  }
  return items;
};

const Dietaries: FC<Props> = ({ itemID }) => {
  const { data: dietaries } = useDietaryQuery({
    variables: {
      itemID,
    },
  });

  return (
    <>
      {dietaries?.dietaries && dietaries?.dietaries.length > 0 ? (
        <p>Contains:</p>
      ) : (
        <p>No common restrictions</p>
      )}
      <ul>
        {dietaries?.dietaries && dietaries?.dietaries.length > 0
          ? renderAllergens(dietaries?.dietaries)
          : null}
        {console.log("DIETARIES ", dietaries)}
        {/* {dietaries?.dietaries.map((dietary) => (
          <li className="inline-block" key={dietary.id}>
            {dietary.name}
          </li>
        ))} */}
      </ul>
    </>
  );
};

export { Dietaries };
