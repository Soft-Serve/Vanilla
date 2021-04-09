import { createContext } from "react";
import { Dietary } from "../../graphql/useAllergies";
import { Query } from "../../graphql/useAllergies/types";

interface AllergyContextData {
  data: Query | undefined;
  activeAllergies: Dietary[];
  addAllergy: (allergy: Dietary) => void;
  removeAllergy: (allergy: Dietary) => void;
  isAllergyActive: (allergy: Dietary) => boolean;
}

const AllergyContext = createContext<AllergyContextData | null>(null);

export { AllergyContext };

export type { AllergyContextData };
