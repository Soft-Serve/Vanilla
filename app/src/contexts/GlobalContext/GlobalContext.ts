import { createContext, Dispatch, SetStateAction } from "react";

interface GlobalContextData {
  activeRestaurantID: number | undefined;
  activeMenuID: number | undefined;
  setActiveMenuID: Dispatch<SetStateAction<number | undefined>>;
  activeCategoryID: number | undefined;
  setActiveCategoryID: Dispatch<SetStateAction<number | undefined>>;
}

const GlobalContext = createContext<GlobalContextData | null>(null);

export { GlobalContext };
export type { GlobalContextData };
