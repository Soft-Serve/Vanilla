import { classnames } from "tailwindcss-classnames";

const base = classnames("flex-shrink-0", "inline-block", "font-medium", "rounded-full", "py-0.5");

const success = classnames("bg-green-100", "text-green-800");

const error = classnames("bg-red-100", "text-red-800");

const warning = classnames("bg-yellow-100", "text-yellow-800");

const SM = classnames("px-2", "text-xs");

const LG = classnames("px-3", "text-sm");

const CALOUR_MAP = {
  success,
  error,
  warning,
};

const PILL_SIZES = {
  SM,
  LG,
};

type COLOUR_TYPES = keyof typeof CALOUR_MAP | undefined;
type SIZE_TYPES = keyof typeof PILL_SIZES | undefined;

const buildStyles = (size: SIZE_TYPES, colour: COLOUR_TYPES) =>
  classnames(base, PILL_SIZES[size || "SM"], CALOUR_MAP[colour || "success"]);

export { buildStyles };
export type { COLOUR_TYPES, SIZE_TYPES };
