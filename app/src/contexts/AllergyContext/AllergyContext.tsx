import { FC, useState } from "react";
import { createContext } from "react";
import { Dietary, useAllergies } from "../../graphql/useAllergies";
import { Query } from "../../graphql/useAllergies/types";

export interface AllergyContextData {
  data: Query | undefined;
  activeAllergies: Dietary[];
  addAllergy: (allergy: Dietary) => void;
  removeAllergy: (allergy: Dietary) => void;
  isAllergyActive: (allergy: Dietary) => boolean;
}

interface Props {
  restaurantID: number;
}

const AllergyContext = createContext<AllergyContextData | null>(null);

const AllergyProvider: FC<Props> = ({ children, restaurantID }) => {
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
export { AllergyProvider, AllergyContext };
