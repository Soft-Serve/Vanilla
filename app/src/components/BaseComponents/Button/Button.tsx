import React, { ButtonHTMLAttributes, FC } from "react";
import { buildStyles } from "./styles";
import { BUTTON_TYPES, COLOURS_TYPES, SIZE_TYPES } from "./types";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: BUTTON_TYPES;
  size: SIZE_TYPES;
  colour: COLOURS_TYPES;
}
const Button: FC<Props> = ({ children, type, size, colour, ...rest }) => {
  return (
    <button type={type} className={buildStyles(size, colour)} {...rest}>
      {children}
    </button>
  );
};

export { Button };
