import { FC, useReducer } from "react";
import { AllergyContext } from "./AllergyContext";
import { useActiveAllergies } from "../../hooks/useActiveAllergies";
import { Dietary } from "../../graphql/useAllergies";

interface Props {
  restaurantID: number;
}

enum ACTION_TYPES {
  ADD = "add",
  REMOVE = "remove",
  TOGGLE = "toggle",
}
interface Action {
  type: ACTION_TYPES;
  payload: Dietary;
}

const reducer = (activeAllergies: Dietary[], action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return [...activeAllergies, action.payload];

    case ACTION_TYPES.REMOVE:
      return [
        ...activeAllergies.filter(
          (activeAllergy) => activeAllergy.id !== action.payload.id
        ),
      ];

    default:
      return activeAllergies;
  }
};

const AllergyProvider: FC<Props> = ({ children, restaurantID }) => {
  const [activeAllergies, dispatch] = useReducer(reducer, []);
  const { allergies } = useActiveAllergies(restaurantID);

  const isAllergyActive = (allergy: Dietary) => {
    return !!activeAllergies.find(
      (activeAllergy) => activeAllergy.id === allergy.id
    );
  };

  return (
    <AllergyContext.Provider
      value={{
        allergies,
        isAllergyActive,
        activeAllergies,
        dispatch,
      }}
    >
      {children}
    </AllergyContext.Provider>
  );
};
export { AllergyProvider };
