import React, { FC, ReactNode } from "react";
import * as styles from "./styles";

interface Props {
  header?: ReactNode;
}
// card styling branch
const Card: FC<Props> = ({ children, header }) => {
  return (
    <div className="bg-white overflow-hidden shadow-md rounded-lg divide-y divide-pink-500 border-red-200 border-solid border-2 border-opacity-50">
      <div className="px-4 py-5 sm:px-6 text-blue-500 ">{header}</div>
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
};

export { Card };
