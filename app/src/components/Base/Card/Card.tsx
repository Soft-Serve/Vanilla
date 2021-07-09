import React, { FC, ReactNode } from "react";

interface Props {
  header?: ReactNode;
}

const Card: FC<Props> = ({ children, header }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-pink-500">
      <div className="px-4 py-5 sm:px-6 text-blue-500 ">{header}</div>
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
};

export { Card };
