import { classnames } from "tailwindcss-classnames";

const base = classnames("bg-white", "overflow-hidden", "shadow-lg", "rounded-lg");

const padding = classnames("px-4", "py-5", "sm:p-6");

const buildStyles = (withPadding: boolean) => {
  return classnames(base, {
    [padding]: withPadding,
  });
};

export { base, buildStyles };
