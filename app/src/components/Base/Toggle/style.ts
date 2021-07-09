import { classnames } from "tailwindcss-classnames";

const toggle = {
    base: classnames(
        "relative",
        "inline-flex",
        "flex-shrink-0",
        "h-6",
        "w-11",
        "border-2",
        "border-transparent",
        "rounded-full",
        "cursor-pointer",
        "transition-colors",
        "ease-in-out",
        "duration-200",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-indigo-500",
    ),
    disabled: classnames("bg-gray-200"),
    enabled: classnames("bg-indigo-600"),
};

const wrapper = {
    base: classnames(
        "translate-x-0",
        "pointer-events-none",
        "relative",
        "inline-block",
        "h-5",
        "w-5",
        "rounded-full",
        "bg-white",
        "shadow",
        "transform-gpu",
        "ring-0",
        "transition",
        "ease-in-out",
        "duration-200",
    ),
    enabled: classnames("translate-x-5"),
    disabled: classnames("translate-x-0"),
};

const toggleState = {
    base: classnames(
        "absolute",
        "inset-0",
        "h-full",
        "w-full",
        "flex",
        "items-center",
        "justify-center",
        "transition-opacity",
    ),
    enabled: classnames("opacity-0", "ease-out", "duration-100"),
    disabled: classnames("opacity-100", "ease-in", "duration-200"),
};

const buildButtonStyles = (isEnabled: boolean) => {
    return classnames(toggle.base, {
        [toggle.enabled]: isEnabled,
        [toggle.disabled]: !isEnabled,
    });
};

const buildWrapperStyles = (isEnabled: boolean) => {
    return classnames(wrapper.base, {
        [wrapper.enabled]: isEnabled,
        [wrapper.disabled]: !isEnabled,
    });
};

const buildToggleStyles = (isEnabled: boolean) => {
    return classnames(toggleState.base, {
        [toggleState.enabled]: isEnabled,
        [toggleState.disabled]: !isEnabled,
    });
};

export { buildToggleStyles, buildWrapperStyles, buildButtonStyles };
