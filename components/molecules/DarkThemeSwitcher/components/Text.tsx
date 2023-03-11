import { ThemeContext } from "@/context/ThemeProvider";
import useTheme from "@/foundations/Theme/useTheme";
import useIsDarkMode from "@/hooks/useIsDarkMode";
import { ReactNode, useContext } from "react";

interface IProps {
  opacity?: string;
  children: ReactNode;
}

export default function Text({ opacity, children }: IProps) {
  const theme = useTheme();
  const isDarkMode = useIsDarkMode();

  return (
    <span
      style={{
        opacity: opacity || "1.0",
        fontSize: "18px",
        fontWeight: "500",
        color: isDarkMode ? theme.black : theme.white,
      }}>
      {children}
    </span>
  );
}
