import { Toggle } from "@base";
import type { FC } from "react";
import { useAllergyContext } from "@contexts";
import type { Allergy } from "./Allergies.query";

interface Props {
  allergy: Allergy;
}
const AllergiesToggle: FC<Props> = ({ allergy }) => {
  const { dispatch, isAllergyActive } = useAllergyContext();
  const isEnabled = isAllergyActive(allergy);

  enum ACTION_TYPES {
    ADD = "add",
    REMOVE = "remove",
  }

  const handleClick = () => {
    isEnabled
      ? dispatch({ type: ACTION_TYPES.REMOVE, payload: allergy })
      : dispatch({ type: ACTION_TYPES.ADD, payload: allergy });
  };

  return <Toggle isEnabled={isEnabled} handleClick={handleClick} />;
};

export { AllergiesToggle };
