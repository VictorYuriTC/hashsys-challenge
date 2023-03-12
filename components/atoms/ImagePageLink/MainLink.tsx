import useTheme from "@/foundations/Theme/useTheme";
import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

interface IMainLinkProps {
  href: string;
  children: ReactNode;
  style?: CSSProperties;
}

export default function MainLink({ href, children, style }: IMainLinkProps) {
  const theme = useTheme();
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5em",
        textDecoration: "none",
        color: theme.primary,
        ...style,
      }}>
      {children}
    </Link>
  );
}
