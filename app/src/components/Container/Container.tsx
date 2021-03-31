import React, { FC } from "react";

const Container: FC = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 p-2">{children}</div>
  );
};

export { Container };
