import { classnames } from "tailwindcss-classnames";

type FlexDirection = "column" | "row";

const columns = {
  base: classnames("flex", "w-full", "m-2", "p-2", "flex-wrap", "h-auto"),
  column: classnames("flex-col"),
};

const buildStyles = (direction: FlexDirection = "row") => {
  return classnames(columns.base, {
    [columns.base]: direction === "column",
  });
};

export { buildStyles };
