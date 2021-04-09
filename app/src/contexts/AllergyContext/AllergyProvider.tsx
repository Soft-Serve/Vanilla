import { FC } from "react";
import { useAllergyContext } from "./useAllergyContext";
import { AllergyContext } from "./AllergyContext";

interface Props {
  restaurantID: number;
}

const AllergyProvider: FC<Props> = ({ children, restaurantID }) => {
  const {
    data,
    activeAllergies,
    addAllergy,
    removeAllergy,
    isAllergyActive,
  } = useAllergyContext(restaurantID);

  return (
    <AllergyContext.Provider
      value={{
        data,
        activeAllergies,
        addAllergy,
        removeAllergy,
        isAllergyActive,
      }}
    >
      {children}
    </AllergyContext.Provider>
  );
};
export { AllergyProvider };
