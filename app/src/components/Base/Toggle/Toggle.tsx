import React, { FC } from "react";
import { buildButtonStyles, buildWrapperStyles, buildToggleStyles } from "./style";

import { ReactComponent as CheckmarkSVG } from "./svgs/checkmark.svg";
import { ReactComponent as CloseSVG } from "./svgs/close.svg";

interface Props {
  isEnabled: boolean;
  handleClick: () => void;
}

const Toggle: FC<Props> = ({ isEnabled, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      type="button"
      className={buildButtonStyles(isEnabled)}
      aria-pressed="false"
    >
      <span className="sr-only">Use setting</span>
      <span className={buildWrapperStyles(isEnabled)}>
        <span className={buildToggleStyles(isEnabled)} aria-hidden="true">
          <CheckmarkSVG />
        </span>
        <span className={buildToggleStyles(!isEnabled)} aria-hidden="true">
          <CloseSVG />
        </span>
      </span>
    </button>
  );
};

export { Toggle };
