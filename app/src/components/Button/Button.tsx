import React, { ButtonHTMLAttributes, FC } from "react";

type ButtonTypes = "button" | "submit" | "reset" | undefined;
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonTypes;
  size?: "S" | "M" | "LG" | "XL" | "XXL";
  colour?: "PRIMARY" | "ACCENT" | "NAKED";
}

const BASE = `inline d-flex items-center border border-transparent font-medium shadow-sm focus:outline-none h-full w-full`;
const S = `px-2.5 py-1.5 text-xs rounded`;
const M = `px-3 py-2 text-sm leading-4 rounded-md`;
const LG = `px-4 py-2 text-sm rounded-md`;
const XL = `px-4 py-2 text-base rounded-md`;
const XXL = `px-6 py-3 text-base rounded-md`;

const PRIMARY = `bg-red-500 hover:bg-red-300 focus:ring-red-400 text-white`;
const ACCENT = `bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`;
const NAKED = `bg-white hover:bg-red-300 text-red-500 hover:text-white rounded-none`;

const SIZES = {
  S,
  M,
  LG,
  XL,
  XXL,
};

const COLOURS = {
  PRIMARY,
  ACCENT,
  NAKED,
};

const Button: FC<Props> = ({
  children,
  type = "button",
  size = "M",
  colour = "PRIMARY",

  ...rest
}) => {
  return (
    <button
      type={type}
      className={`${BASE} ${SIZES[size]} ${COLOURS[colour]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
