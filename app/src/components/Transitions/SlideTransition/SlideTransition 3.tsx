import React, { FC } from "react";
import { Transition } from "@headlessui/react";
import { transition, from, to } from "./styles";
interface Props {
  isVisible: boolean;
}

const SlideTransition: FC<Props> = ({ children, isVisible }) => {
  return (
    <Transition
      show={isVisible}
      enter={transition}
      enterFrom={from}
      enterTo={to}
      leave={transition}
      leaveFrom={to}
      leaveTo={from}
    >
      {children}
    </Transition>
  );
};

export { SlideTransition };
