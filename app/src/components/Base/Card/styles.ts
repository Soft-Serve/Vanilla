import { classnames } from "tailwindcss-classnames";

const base = classnames(
  "col-span-1",
  "bg-white",
  "rounded-lg",
  "shadow",
  "divide-y",
  "divide-gray-200"
);

const body = classnames("w-full", "flex", "items-center", "justify-between", "border");

const padding = classnames("p-6", "space-x-6");

const buildBodyStyles = (hasPadding?: boolean) =>
  classnames(body, {
    [padding]: hasPadding,
  });

export { base, buildBodyStyles };
