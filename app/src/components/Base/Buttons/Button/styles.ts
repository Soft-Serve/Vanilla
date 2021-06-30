import { classnames } from "tailwindcss-classnames";
import { Sizes, Colours } from "../types";
// test
const base = classnames(
  "inline",
  "flex",
  "items-center",
  "border",
  "border-transparent",
  "font-medium",
  "shadow-sm",
  "focus:outline-none",
  "h-full"
);

const primary = classnames(
  "bg-red-500",
  "hover:bg-red-300",
  "focus:ring-red-400",
  "text-white"
);

const accent = classnames(
  "bg-indigo-600",
  "hover:bg-indigo-700",
  "focus:ring-indigo-500"
);

const naked = classnames(
  "bg-white",
  "hover:bg-red-300",
  "text-red-500",
  "hover:text-white",
  "rounded-none"
);

const S = classnames("px-2.5", "py-1.5", "text-xs", "rounded");

const M = classnames("px-3", "py-2", "text-sm", "leading-4", "rounded-md");

const LG = classnames("px-4", "py-2", "text-sm", "rounded-md");

const XL = classnames("px-4", "py-2", "text-base", "rounded-md");

const XXL = classnames("px-6", "py-3", "text-base", "rounded-md");

const COLOUR_MAP = {
  primary,
  accent,
  naked,
};

const SIZE_MAP = {
  S,
  M,
  LG,
  XL,
  XXL,
};

const buildStyles = (size?: Sizes, colour?: Colours) =>
  classnames(base, SIZE_MAP[size || "S"], COLOUR_MAP[colour || "primary"]);

export type { Sizes, Colours };
export { buildStyles, SIZE_MAP, COLOUR_MAP };
