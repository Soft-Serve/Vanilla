import React, { ButtonHTMLAttributes, FC } from "react";
import { buildStyles, SIZE_TYPES, COLOURS_TYPES } from "./styles";

type BUTTON_TYPES = "button" | "submit" | "reset" | undefined;
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: BUTTON_TYPES;
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

Button.defaultProps = {
  type: "button",
};
export { Button };
