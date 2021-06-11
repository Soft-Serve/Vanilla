import { classnames } from "tailwindcss-classnames";

const transition = classnames(
  "transform-gpu",
  "transition",
  "ease-in-out",
  "duration-500",
  "sm:duration-700"
);

const from = classnames("translate-x-full");
const to = classnames("translate-x-0");

export { transition, from, to };
