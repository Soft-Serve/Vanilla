import React from "react";
import { FC } from "react";

interface Props {
  numberOfTabs: number;
}

const Tabs: FC<Props> = ({ children, numberOfTabs = 3 }) => {
  const ROW = `shadow grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-${numberOfTabs} sm:divide-y-0 sm:divide-x`;

  return <div className={ROW}>{children}</div>;
};

export { Tabs };
