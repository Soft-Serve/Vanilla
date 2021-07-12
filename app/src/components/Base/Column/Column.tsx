import React, { HTMLProps } from "react";
import type { FC } from "react";
import { buildStyles } from "./styles";

interface Props extends HTMLProps<HTMLDivElement> {
  textDirection?: "left" | "center";
}
const Column: FC<Props> = ({ children, textDirection = "left" }) => {
  return <div className={buildStyles(textDirection)}>{children}</div>;
};

export { Column };
