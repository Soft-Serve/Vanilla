import { useState } from "react";
import { Dietary, useAllergies } from "../../graphql/useAllergies";

const useAllergyContext = (restaurantID: number) => {
  const { useGetAllergies } = useAllergies(restaurantID);
  const [activeAllergies, setActiveAllergy] = useState<Dietary[]>([]);
  const { data } = useGetAllergies();

  const addAllergy = (allergy: Dietary) => {
    setActiveAllergy([...activeAllergies, allergy]);
  };

  const removeAllergy = (allergy: Dietary) => {
    setActiveAllergy(
      activeAllergies.filter((activeAllergy) => activeAllergy.id !== allergy.id)
    );
  };

  const isAllergyActive = (allergy: Dietary) => {
    return !!activeAllergies.find(
      (activeAllergy) => activeAllergy.id === allergy.id
    );
  };

  return {
    addAllergy,
    removeAllergy,
    isAllergyActive,
    data,
    activeAllergies,
  };
};

export { useAllergyContext };
