import React, { FC } from "react";
import { Dietary } from "../../graphql/useAllergies/types";

interface Props {
  isEnabled: boolean;
  setIsEnabled: (allergy: Dietary) => void;
  allergy: Dietary;
}
const Toggle: FC<Props> = ({ isEnabled, setIsEnabled, allergy }) => {
  const BASE = `relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`;
  const DISABLED = `bg-gray-200`;
  const ENABLED = `bg-indigo-600`;

  const BUTTON_WRAPPER = `translate-x-0 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`;
  const BUTTON_WRAPPER_ENABLED = `translate-x-5`;
  const BUTTON_WRAPPER_DISBLED = `translate-x-0`;

  const BUTTON_ON = ` absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`;
  const BUTTON_ON_ENABLED = `opacity-0 ease-out duration-100`;
  const BUTTON_ON_DISABLED = `opacity-100 ease-in duration-200`;

  const BUTTON_OFF = `absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`;
  const BUTTON_OFF_ENABLED = `opacity-100 ease-in duration-200`;
  const BUTTON_OFF_DISABLED = `opacity-0 ease-out duration-100`;

  return (
    <button
      onClick={() => setIsEnabled(allergy)}
      type="button"
      className={`${BASE} ${isEnabled ? ENABLED : DISABLED}`}
      aria-pressed="false"
    >
      <span className="sr-only">Use setting</span>
      <span
        className={`${BUTTON_WRAPPER} ${
          isEnabled ? BUTTON_WRAPPER_ENABLED : BUTTON_WRAPPER_DISBLED
        }`}
      >
        <span
          className={`${BUTTON_ON} ${
            isEnabled ? BUTTON_ON_ENABLED : BUTTON_ON_DISABLED
          }`}
          aria-hidden="true"
        >
          <svg
            className="bg-white h-3 w-3 text-gray-400"
            fill="none"
            viewBox="0 0 12 12"
          >
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
          className={`${BUTTON_OFF} ${
            isEnabled ? BUTTON_OFF_ENABLED : BUTTON_OFF_DISABLED
          }`}
          aria-hidden="true"
        >
          <svg
            className="bg-white h-3 w-3 text-indigo-600"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      </span>
    </button>
  );
};

export { Toggle };
