import { classnames } from "tailwindcss-classnames";

const label = classnames("block", "text-sm", "font-medium", "text-gray-700");

const input = classnames(
  "appearance-none",
  "shadow-sm",
  "focus:ring-indigo-500",
  "focus:border-indigo-500",
  "block",
  "w-full",
  "sm:text-sm",
  "border-gray-300",
  "rounded-md",
  "mt-1",
  "px-3",
  "py-2"
);

export { label, input };
