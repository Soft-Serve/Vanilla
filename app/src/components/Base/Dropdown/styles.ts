import { classnames } from "tailwindcss-classnames";

const options = {
  base: classnames("cursor-default", "select-none", "relative", "py-2", "pl-3", "pr-9"),
  active: classnames("text-white", "bg-indigo-600"),
  nonActive: classnames("text-gray-900"),
};

const selectedOptionState = {
  base: classnames("block", "truncate"),
  selected: classnames("font-semibold"),
  notSelected: classnames("font-normal"),
};

const option = {
  base: classnames("absolute", "inset-y-0", "right-0", "flex", "items-center", "pr-4"),
  active: classnames("text-white"),
  nonActive: classnames("text-indigo-600"),
};

const optionWrapperStyles = (isActive: boolean) => {
  return classnames(options.base, {
    [options.active]: isActive,
    [options.nonActive]: !isActive,
  });
};

const optionSelectedStateStyles = (isSelected: boolean) => {
  return classnames(selectedOptionState.base, {
    [selectedOptionState.selected]: isSelected,
    [selectedOptionState.notSelected]: !isSelected,
  });
};

const optionStyles = (isActive: boolean) => {
  return classnames(option.base, {
    [option.active]: isActive,
    [option.nonActive]: !isActive,
  });
};

export { optionWrapperStyles, optionSelectedStateStyles, optionStyles };
