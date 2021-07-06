import React, { FC, ReactNode } from "react";
import * as styles from "./styles";

interface Props {
  header?: ReactNode;
}

const Card: FC<Props> = ({ children, header }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-pink-500">
      {/* py is padding on y axis and px is padding on x axis */}
      <div className="px-4 py-5 sm:px-6 text-blue-500 ">{header}</div>
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
};

export { Card };
