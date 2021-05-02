import React, { FC } from "react";
import { Dietary } from "../../../graphql/useAllergies";
import {
  buildButtonStyles,
  buildWrapperStyles,
  buildToggleStyles,
} from "./style";

import { ReactComponent as CheckmarkSVG } from "./svgs/checkmark.svg";
import { ReactComponent as CloseSVG } from "./svgs/close.svg";

enum ACTION_TYPES {
  ADD = "add",
  REMOVE = "remove",
  TOGGLE = "toggle",
}

interface Action {
  type: ACTION_TYPES;
  payload: Dietary;
}

type Dispatch = (action: Action) => void;

interface Props {
  isEnabled: boolean;
  dispatch: Dispatch;
  allergy: Dietary;
}

const Toggle: FC<Props> = ({ isEnabled, dispatch, allergy }) => {
  const handleClick = () => {
    isEnabled
      ? dispatch({ type: ACTION_TYPES.REMOVE, payload: allergy })
      : dispatch({ type: ACTION_TYPES.ADD, payload: allergy });
  };
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
