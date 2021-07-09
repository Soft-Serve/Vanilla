import React, { ButtonHTMLAttributes, FC } from "react";
import { Buttons, Colours, Sizes } from "../index";
import { buildStyles } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: Buttons;
  size?: Sizes;
  colour?: Colours;
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
  colour: "primary",
  size: "S",
};
export { Button };
