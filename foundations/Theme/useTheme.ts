import { ThemeContext } from "@/context/ThemeProvider";
import { THEME } from "@/utils/constants";
import { useContext } from "react";

export type ThemeType = THEME.LIGHT | THEME.DARK;

export interface IMode {
  bg: string;
  primary: string;
  secondary: string;
  light: string;
  black: string;
  white: string;
}

export default function useTheme(): IMode {
  const { theme } = useContext(ThemeContext);

  const lightTheme = {
    bg: "#F5F5F5",
    primary: "#000000",
    secondary: "#565656",
    light: "#F5F5F5",
    black: "#000000",
    white: "#FFFFFF",
  };

  const darkTheme = {
    bg: "#000000",
    primary: "#F5F5F5",
    secondary: "#565656",
    light: "#F5F5F5",
    black: "#000000",
    white: "#FFFFFF",
  };

  if (theme === "dark") return darkTheme;
  return lightTheme;
}
