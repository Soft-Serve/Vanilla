import React from "react";
import { RadioGroup } from "@headlessui/react";
import type { FC } from "react";
import { buildStyles, buildRadioStyles } from "./RadioTile.styles";

interface Props {
  value: string;
  onChange: () => void;
  isChecked: boolean;
}
const RadioTile: FC<Props> = ({ value, onChange, isChecked }) => {
  return (
    <RadioGroup value={value} onChange={onChange}>
      <RadioGroup.Label>label</RadioGroup.Label>
      <RadioGroup.Option value="plan" className={buildStyles(isChecked)}>
        {({ checked }) => (
          <>
            <div className="flex items-center">
              <div className="text-sm">
                <RadioGroup.Label as="p" className="font-medium text-gray-900">
                  hello
                </RadioGroup.Label>
                <RadioGroup.Description as="div" className="text-gray-500">
                  <p className="sm:inline">hello</p>{" "}
                  <span className="hidden sm:inline sm:mx-1" aria-hidden="true">
                    &middot;
                  </span>{" "}
                  <p className="sm:inline">free</p>
                </RadioGroup.Description>
              </div>
            </div>
            <RadioGroup.Description
              as="div"
              className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
            >
              <div className="font-medium text-gray-900">srtuff</div>
              <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
            </RadioGroup.Description>
            <div className={buildRadioStyles(checked)} aria-hidden="true" />
          </>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
};

export { RadioTile };
