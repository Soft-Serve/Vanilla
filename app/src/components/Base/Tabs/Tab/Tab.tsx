import React from "react";
import type { FC } from "react";
import { Button } from "@base";
import { buildTabTextStyles, buildTabStyles } from "./styles";

interface Props {
  isActive: boolean;
  tabIndex: number;
  numOfTabs: number;
  onClick: () => void;
}
const Tab: FC<Props> = ({ children, tabIndex, numOfTabs, isActive, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={buildTabStyles(isActive, tabIndex, numOfTabs)}
      aria-current={isActive ? "page" : undefined}
    >
      <span>{children}</span>
      <span aria-hidden="true" className={buildTabTextStyles(isActive)} />
    </Button>
  );
};

export { Tab };
