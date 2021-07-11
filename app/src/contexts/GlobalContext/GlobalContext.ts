import { createContext, Dispatch, SetStateAction } from "react";

interface GlobalContextData {
  restaurantID: number;
  menuID: number;
  setMenuID: Dispatch<SetStateAction<number>>;
  categoryID: number;
  setCategoryID: Dispatch<SetStateAction<number>>;
  activeMenu: string;
  setActiveMenu: Dispatch<SetStateAction<string>>;
  currentUser: any;
  setCurrentUser: Dispatch<SetStateAction<any>>;
}

const GlobalContext = createContext<GlobalContextData | null>(null);

export { GlobalContext };
export type { GlobalContextData };
