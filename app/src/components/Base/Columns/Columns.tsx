import React, { HTMLProps } from "react";
import type { FC } from "react";
import { buildStyles } from "./styles";

interface Props extends HTMLProps<HTMLDivElement> {
  flexDirection?: "row" | "column";
}

const Columns: FC<Props> = ({ children, flexDirection = "row", ...rest }) => {
  return (
    <div className={buildStyles(flexDirection)} {...rest}>
      {children}
    </div>
  );
};

export { Columns };
