import React from "react";
import type { FC } from "react";
import { buildStyles } from "./styles";

interface Props {
  flexDirection?: "row" | "column";
}

const Columns: FC<Props> = ({ children, flexDirection = "row" }) => {
  return <div className={buildStyles(flexDirection)}>{children}</div>;
};

export { Columns };
