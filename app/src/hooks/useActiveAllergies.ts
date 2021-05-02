import { useState } from "react";
import { Dietary, useAllergies } from "@graphql";

const useActiveAllergies = (restaurantID: number) => {
  const [activeAllergies, setActiveAllergy] = useState<Dietary[]>([]);

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
  const { useGetAllergies } = useAllergies(restaurantID);

  const { data: allergies } = useGetAllergies();
  return {
    addAllergy,
    activeAllergies,
    removeAllergy,
    isAllergyActive,
    allergies,
  };
};

export { useActiveAllergies };
