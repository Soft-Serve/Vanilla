import React, { FC } from "react";

type ButtonTypes = "button" | "submit" | "reset" | undefined;
interface Props {
  type?: ButtonTypes;
  size?: "SM" | "M" | "LG" | "XL" | "XXL";
}

const BASE = `inline-flex items-center border border-transparent font-medium shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`;
const SM = `px-2.5 py-1.5 text-xs rounded`;
const M = `px-3 py-2 text-sm leading-4 rounded-md`;
const LG = `px-4 py-2 text-sm rounded-md`;
const XL = `px-4 py-2 text-base rounded-md`;
const XXL = `px-6 py-3 text-base rounded-md`;

const SIZES = {
  SM,
  M,
  LG,
  XL,
  XXL,
};

const Button: FC<Props> = ({ children, type = "button", size = "M" }) => {
  return (
    <button type={type} className={`${BASE} ${SIZES[size]}`}>
      {children}
    </button>
  );
};

export { Button };
