import React, { ButtonHTMLAttributes, FC } from "react";

type RoundButtons = "button" | "submit" | "reset" | undefined;
interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  type?: RoundButtons;
  size?: "S" | "M" | "LG" ;
  colour?: "PRIMARY" | "ACCENT" | "NAKED";
}

const BASE = `inline-flex items-center p-1 border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2`;
const S = `px-1.5 py-1.5 text-xs rounded-full`;
const M = `px-2.5 py-2.5 text-sm leading-4 rounded-full`;
const LG = `px-4 py-4 text-sm rounded-full`;

const PRIMARY = `bg-red-500 hover:bg-red-300 focus:ring-red-400 text-white`;
const ACCENT = `bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`;
const NAKED = `bg-white hover:bg-red-300 border-red-400 focus:ring-red-500 text-red-500 hover:text-white`;

const SIZES = {
  S,
  M,
  LG
};

const COLOURS = {
  PRIMARY,
  ACCENT,
  NAKED
};

const RoundButton: FC<Props> = ({ children, size = "M", type = "button", colour = "PRIMARY", ...rest }) => {
  return (
    <button type={type} className={`${BASE} ${SIZES[size]} ${COLOURS[colour]}`} {...rest}>
      {children}
    </button>
  );
};

export { RoundButton };
