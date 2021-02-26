import React, { FC, createElement, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<Headers> {
  type: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title: FC<Props> = ({ children, type, ...rest }) => {
  const HTag = `h${type}` as keyof JSX.IntrinsicElements;

  return createElement(HTag, rest, children);
};

export { Title };
