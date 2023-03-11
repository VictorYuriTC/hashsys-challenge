import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

export type ThemeType = THEME.LIGHT | THEME.DARK;

export interface IMode {
  bg: string;
  primary: string;
  secondary: string;
}

export default function useTheme(): IMode {
  const { theme } = useContext(ThemeContext);

  const lightTheme = {
    bg: "#F5F5F5",
    primary: "#000000",
    secondary: "#565656",
  };

  const darkTheme = {
    bg: "#000000",
    primary: "#F5F5F5",
    secondary: "#565656",
  };

  if (theme === "dark") return darkTheme;
  return lightTheme;
}
