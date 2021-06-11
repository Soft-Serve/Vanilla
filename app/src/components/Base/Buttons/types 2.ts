import { SIZE_MAP, COLOUR_MAP } from "./Button";

type Buttons = "button" | "submit" | "reset" | undefined;

type Sizes = keyof typeof SIZE_MAP;

type Colours = keyof typeof COLOUR_MAP;

export type { Buttons, Sizes, Colours };
