import React from "react";
import { RadioGroup } from "@headlessui/react";
import type { FC } from "react";
import { buildStyles, buildRadioStyles } from "./RadioTile.styles";

interface Props {
  value: number;
  onChange: () => void;
  isChecked: boolean;
}
const RadioTile: FC<Props> = ({ value, onChange, isChecked, children }) => {
  return (
    <RadioGroup value={value} onChange={onChange}>
      <RadioGroup.Option value="plan" className={buildStyles(isChecked)}>
        {({ checked }) => (
          <>
            {children}

            <div className={buildRadioStyles(checked)} aria-hidden="true" />
          </>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
};

export { RadioTile };
