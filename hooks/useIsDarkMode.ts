import { ThemeContext } from "@/context/ThemeProvider";
import { THEME } from "@/foundations/Theme/useTheme";
import { useContext } from "react";

export default function useIsDarkMode() {
  const themeContext = useContext(ThemeContext);
  return themeContext.theme === THEME.DARK;
}
