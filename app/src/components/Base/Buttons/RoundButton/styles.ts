import { classnames } from "tailwindcss-classnames";
import { Sizes, Colours } from "..";

const base = classnames(
    "inline-flex",
    "items-center",
    "p-1",
    "border",
    "border-transparent",
    "shadow-sm",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
);

const primary = classnames(
    "bg-white",
    "border-pink-500",
    "hover:bg-pink-300",
    "hover:text-white",
    "focus:ring-red-400",
    "font-bold",
    "text-blue-600",
);

const accent = classnames("bg-indigo-600", "hover:bg-indigo-700", "focus:ring-indigo-500");

const naked = classnames(
    "bg-white",
    "hover:bg-red-300",
    "border-red-400",
    "focus:ring-red-500",
    "text-red-500",
    "hover:text-white",
);

const S = classnames("px-1.5", "py-1.5", "text-xs", "rounded-full");

const M = classnames("px-2.5", "py-2.5", "text-sm", "leading-4", "rounded-full");
const LG = classnames("px-4", "py-4", "text-sm", "rounded-full");

const XL = classnames("px-4", "py-2", "text-base", "rounded-full");

const XXL = classnames("px-6", "py-3", "text-base", "rounded-full");

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
export { buildStyles };
