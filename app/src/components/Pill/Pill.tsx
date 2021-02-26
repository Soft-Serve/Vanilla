import React, { FC } from "react";

interface Props {
  type?: "SUCCESS" | "ERROR" | "WARNING";
  size?: "SM" | "LG";
}

const BASE = `flex-shrink-0 inline-block font-medium rounded-full`;
const SUCCESS = "bg-green-100 text-green-800";
const ERROR = "bg-red-100 text-red-800";
const WARNING = "bg-yellow-100 text-yellow-800";
const SM = "px-2 py-0.5 text-xs";
const LG = "px-3 py-0.5 text-sm";

const types = {
  SUCCESS,
  ERROR,
  WARNING,
};

const sizes = {
  SM,
  LG,
};

const Pill: FC<Props> = ({ children, type = "SUCCESS", size = "SM" }) => {
  return (
    <span className={`${BASE} ${types[type]} ${sizes[size]}`}>{children}</span>
  );
};

export { Pill };
