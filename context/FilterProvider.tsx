import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export enum CATEGORY {
  ALL = "all",
  RACING = "racing",
  PROGRAMMING = "programming",
  GAMES = "games",
  PAINTING = "painting",
  SCIENCE = "science",
  MUSIC = "music",
}

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
