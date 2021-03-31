import React, { FC } from "react";
import useDietaries from "../../graphql/queries/useDietaries";

interface Props {
  itemID: number;
}
const Dietaries: FC<Props> = ({ itemID }) => {
  const { data: dietaries } = useDietaries(itemID);
  return (
    <div>
      {dietaries?.dietaries.map((dietary) => (
        <p>{dietary.name}</p>
      ))}
    </div>
  );
};

export { Dietaries };
