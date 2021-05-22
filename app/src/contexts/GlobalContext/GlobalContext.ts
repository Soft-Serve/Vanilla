import { createContext, Dispatch, SetStateAction } from "react";

interface GlobalContextData {
  activeRestaurantID: number | undefined;
  activeMenuID: number;
  setActiveMenuID: Dispatch<SetStateAction<number>>;
  activeCategoryID: number;
  setActiveCategoryID: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<GlobalContextData | null>(null);

export { GlobalContext };
export type { GlobalContextData };
