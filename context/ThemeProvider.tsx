import { THEME } from "@/utils/constants";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { ThemeType } from "../foundations/Theme/useTheme";

interface IThemeContext {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

const defaultThemeContextValue: IThemeContext = {
  theme: THEME.LIGHT,
  setTheme: () => {},
};

export const ThemeContext = createContext(defaultThemeContextValue);

interface IThemeProvider {
  children: ReactNode;
}

export default function ThemeProvider({ children }: IThemeProvider) {
  const [theme, setTheme] = useState<ThemeType>(THEME.LIGHT);
  const contextValue = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
