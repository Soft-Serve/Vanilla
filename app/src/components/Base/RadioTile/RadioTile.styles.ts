import { classnames } from "tailwindcss-classnames";

const tile = {
  base: classnames(
    "relative",
    "block",
    "rounded-lg",
    "border",
    "border-blue-700",
    "bg-white",
    "shadow-sm",
    "px-6",
    "py-4",
    "cursor-pointer",
    "hover:border-blue-900",
    "sm:flex",
    "sm:justify-between",
    "focus:outline-none",
    "mx-2"
  ),
  checked: classnames("ring-1", "ring-offset-2", "ring-blue-500"),
};

const buildStyles = (isChecked: boolean) => {
  return classnames(tile.base, { [tile.checked]: isChecked });
};

const radio = {
  base: classnames("absolute", "-inset-px", "rounded-lg", "border-2", "pointer-events-none"),
  checked: "border-indigo-500",
  unchecked: "border-transparent",
};

const buildRadioStyles = (isChecked: boolean) => {
  return classnames(radio.base, {
    [radio.checked]: isChecked,
    [radio.unchecked]: !isChecked,
  });
};

export { buildStyles, buildRadioStyles };
