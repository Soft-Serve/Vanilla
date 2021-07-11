import { classnames } from "tailwindcss-classnames";

const wrapper = classnames(
  "mt-4",
  "text-center",
  "sm:mt-0",
  "sm:pt-1",
  "sm:text-left",
  "flex",
  "flex-col"
);

const container = classnames("bg-white", "overflow-hidden", "shadow");

export { wrapper, container };
