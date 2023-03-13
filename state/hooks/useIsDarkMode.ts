import { ThemeContext } from "@/context/ThemeProvider";
import { THEME } from "@/utils/constants";

import { useContext } from "react";

export default function useIsDarkMode() {
  const themeContext = useContext(ThemeContext);
  return themeContext.theme === THEME.DARK;
}
