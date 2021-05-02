import React, { ButtonHTMLAttributes, FC } from "react";
import { Buttons, Colours, Sizes } from "../types";
import { buildStyles } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: Buttons;
  size?: Sizes;
  colour?: Colours;
}

const RoundButton: FC<Props> = ({ children, size, type, colour, ...rest }) => {
  return (
    <button type={type} className={buildStyles(size, colour)} {...rest}>
      {children}
    </button>
  );
};

RoundButton.defaultProps = {
  type: "button",
  colour: "primary",
  size: "S",
};

export { RoundButton };
