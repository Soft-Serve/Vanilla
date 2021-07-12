import React from "react";
import type { FC } from "react";

interface Props {
  description: string;
}

const Description: FC<Props> = ({ description }) => {
  return <p className="italic">{description}</p>;
};
export { Description };
