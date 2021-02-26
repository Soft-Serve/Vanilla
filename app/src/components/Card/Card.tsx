import React, { FC, ReactNode } from "react";
interface Props {
  withPadding?: boolean;
  actions?: ReactNode;
}

const BASE = `col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200`;
const BODY = `w-full flex items-center justify-between border`;
const ACTIONS = `-mt-px flex divide-x divide-gray-200`;
const BODY_PADDING = "p-6 space-x-6";

const Card: FC<Props> = ({ children, withPadding = true, actions }) => {
  return (
    <div className={`${BASE}`}>
      <div className={`${BODY} ${withPadding && BODY_PADDING}`}>{children}</div>
      <div>
        <div className={`${ACTIONS}`}>{actions}</div>
      </div>
    </div>
  );
};

export { Card };
