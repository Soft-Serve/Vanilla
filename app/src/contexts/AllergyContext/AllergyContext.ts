import { createContext } from "react";
import { Dietary } from "../../graphql/useAllergies";
import { Query } from "../../graphql/useAllergies/types";

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

interface AllergyContextData {
  allergies: Query | undefined;
  activeAllergies: Dietary[];
  dispatch: Dispatch;
  isAllergyActive: (allergy: Dietary) => boolean;
}

const AllergyContext = createContext<AllergyContextData | null>(null);

export { AllergyContext };

export type { AllergyContextData };
