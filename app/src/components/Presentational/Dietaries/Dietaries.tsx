/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import type { FC } from "react";
import { useDietaryQuery } from "@graphql";
import { SvgComponent } from "./SvgComponent";

interface Props {
  itemID: number;
}
const Dietaries: FC<Props> = ({ itemID }) => {
  const { data } = useDietaryQuery({
    variables: {
      itemID,
    },
  });

  return (
    <div className="flex p-2 justify-end">
      {data?.dietaries.map(dietary => SvgComponent(dietary))}
    </div>
  );
};

export { Dietaries };
