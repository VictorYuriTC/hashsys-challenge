import { ThemeContext } from "@/context/ThemeProvider";
import useTheme from "@/foundations/Theme/useTheme";
import { THEME } from "@/utils/constants";
import { useContext } from "react";
import Text from "./components/Text";

export default function DarkThemeSwitcher() {
  const themeContext = useContext(ThemeContext);
  const theme = useTheme();

  function handleOnClickThemeButton() {
    if (themeContext.theme === THEME.LIGHT) themeContext.setTheme(THEME.DARK);
    if (themeContext.theme === THEME.DARK) themeContext.setTheme(THEME.LIGHT);
  }

  const isDarkTheme = themeContext.theme === THEME.DARK;

  function getEllipseSide() {
    if (themeContext.theme === THEME.DARK) {
      return "3em";
    }

    return "0em";
  }

  return (
    <span
      style={{
        cursor: "pointer",
        display: "inline-block",
        textAlign: "center",
        backgroundColor:
          themeContext.theme === THEME.DARK ? theme.primary : theme.black,
        padding: "4px 1em",
        borderRadius: "6px",
      }}
      onClick={handleOnClickThemeButton}>
      <Text>Modo Dark</Text>

      <span
        style={{
          backgroundColor: "#D0D0D0",
          borderRadius: "10px",
          width: "5em",
          height: "2em",
          padding: "4px",
          display: "flex",
        }}>
        <span
          style={{
            backgroundColor: theme.secondary,
            borderRadius: "100%",
            width: "2em",
            height: "2em",
            translate: getEllipseSide(),
            transition: "750ms",
          }}
        />
      </span>

      <Text opacity="0.5">{isDarkTheme ? "Ativado" : "Desativado"}</Text>
    </span>
  );
}
