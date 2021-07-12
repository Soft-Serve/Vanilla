import React, { FC, HTMLProps } from "react";
import { buildStyles } from "./styles";

interface Props extends HTMLProps<HTMLDivElement> {
  withPadding?: boolean;
}

const Card: FC<Props> = ({ children, withPadding = true }) => {
  return <div className={buildStyles(withPadding)}>{children}</div>;
};

export { Card };
