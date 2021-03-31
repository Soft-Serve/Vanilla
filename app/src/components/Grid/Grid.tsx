import React, { FC } from "react";

interface Props {
  size?: "LG" | "M" | "SM";
  mobileColumns?: number;
}
const Grid: FC<Props> = ({ children, size = "M", mobileColumns = "LG" }) => {
  const COLUMNS = `grid gap-6 grid-cols-${mobileColumns ? mobileColumns : 1} `;
  const XL = ` sm:grid-cols-2 lg:grid-cols-4`;
  const LG = `sm:grid-cols-2 lg:grid-cols-3`;
  const M = `lg:grid-cols-2`;
  const SM = `grid-cols-1`;

  const sizes = {
    XL,
    LG,
    M,
    SM,
  };

  return <div className={`${COLUMNS} ${sizes[size]}`}>{children}</div>;
};

export { Grid };
