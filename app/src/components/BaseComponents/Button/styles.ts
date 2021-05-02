import { classnames } from "tailwindcss-classnames";

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

type SIZE_TYPES = keyof typeof SIZE_MAP;
type COLOURS_TYPES = keyof typeof COLOUR_MAP;

const buildStyles = (size: SIZE_TYPES, colour: COLOURS_TYPES) =>
  classnames(base, SIZE_MAP[size], COLOUR_MAP[colour]);

export type { SIZE_TYPES, COLOURS_TYPES };
export { buildStyles };
