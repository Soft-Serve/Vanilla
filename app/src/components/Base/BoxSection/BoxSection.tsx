import React from "react";
import type { FC } from "react";
import { boxSection } from "./styles";

const BoxSection: FC = ({ children }) => {
  return <div className={boxSection.base}>{children}</div>;
};

export { BoxSection };
