import useTheme from "@/foundations/Theme/useTheme";
import { CSSProperties, ReactNode } from "react";

interface ITitle {
  children: ReactNode;
  style?: CSSProperties;
}

export default function Title({ children, style }: ITitle) {
  const theme = useTheme();
  return (
    <h1
      style={{
        backgroundColor: theme.bg,
        color: theme.primary,
        textAlign: "center",
        ...style,
      }}>
      {children}
    </h1>
  );
}
