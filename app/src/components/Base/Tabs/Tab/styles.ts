import { classnames } from "tailwindcss-classnames";

const tab = {
  base: classnames(
    "group",
    "relative",
    "min-w-0",
    "flex-1",
    "overflow-hidden",
    "bg-white",
    "py-4",
    "px-4",
    "text-sm",
    "font-medium",
    "text-center",
    "hover:bg-gray-50",
    "focus:z-10",
    "focus:outline-none"
  ),
  activeTab: classnames("text-gray-900"),
  nonActiveTab: classnames("text-gray-500", "hover:text-gray-700"),
  firstTab: classnames("rounded-l-lg"),
  lastTab: classnames("rounded-r-lg"),
};

const tabText = {
  base: classnames("absolute", "inset-x-0", "bottom-0", "h-0.5"),
  isActive: classnames("bg-red-400"),
  isNotActive: classnames("bg-transparent"),
};

const buildTabTextStyles = (isActive: boolean) => {
  return classnames(tabText.base, {
    [tabText.isActive]: isActive,
    [tabText.isNotActive]: !isActive,
  });
};

const buildTabStyles = (isActive: boolean, index: number, numOfTabs: number) => {
  return classnames(tab.base, {
    [tab.activeTab]: isActive,
    [tab.nonActiveTab]: !isActive,
    [tab.firstTab]: index === 0,
    [tab.lastTab]: index === numOfTabs - 1,
  });
};

export { buildTabStyles, buildTabTextStyles };
