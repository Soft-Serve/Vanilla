import { classnames } from "tailwindcss-classnames";

const column = {
  base: classnames("flex-grow-0", "flex-shrink-0", "flex-initial", "mx-2"),
  textCenter: classnames("text-center"),
  textLeft: classnames("text-left"),
};

type TextDirection = "center" | " right " | "left";

const buildStyles = (textDirection: TextDirection = "left") => {
  return classnames(column.base, {
    [column.textCenter]: textDirection === "center",
  });
};

export { buildStyles };
