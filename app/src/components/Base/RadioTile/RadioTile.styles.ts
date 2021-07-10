import { classnames } from "tailwindcss-classnames";

const tile = {
  base: classnames(
    "relative",
    "block",
    "rounded-lg",
    "border",
    "bg-white",
    "shadow-md",
    "px-6",
    "py-4",
    "cursor-pointer",
    "flex",
    "justify-center",
    "items-center",
    "focus:outline-none",
    "mx-2",
    "h-full"
  ),
  checked: classnames("ring-2", "ring-offset-0", "ring-black"),
};

const buildStyles = (isChecked: boolean) => {
  return classnames(tile.base, { [tile.checked]: isChecked });
};

const radio = {
  base: classnames("absolute", "-inset-px", "rounded-lg", "border-2", "pointer-events-none"),
  checked: "border-red-400",
  unchecked: "border-transparent",
};

const buildRadioStyles = (isChecked: boolean) => {
  return classnames(radio.base, {
    [radio.checked]: isChecked,
    [radio.unchecked]: !isChecked,
  });
};

export { buildStyles, buildRadioStyles };
