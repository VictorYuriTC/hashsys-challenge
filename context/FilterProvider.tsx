import { CATEGORY } from "@/utils/constants";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type categoryType = CATEGORY;

interface IThemeContext {
  selectedFilter: CATEGORY | string;
  setSelectedFilter: Dispatch<SetStateAction<categoryType | string>>;
}

const defaultFilterContextValue: IThemeContext = {
  selectedFilter: "",
  setSelectedFilter: () => {},
};

export const FilterContext = createContext(defaultFilterContextValue);

interface IFilterProvider {
  children: ReactNode;
}

export default function FilterProvider({ children }: IFilterProvider) {
  const [selectedFilter, setSelectedFilter] = useState("");
  const contextValue = {
    selectedFilter,
    setSelectedFilter,
  };
  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
}
