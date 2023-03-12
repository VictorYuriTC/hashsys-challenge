import MainLink from "@/components/atoms/ImagePageLink/MainLink";
import DarkThemeSwitcher from "@/components/molecules/DarkThemeSwitcher/DarkThemeSwitcher";
import useTheme from "@/foundations/Theme/useTheme";
import useDefaultSvgSize from "@/state/hooks/useDefaultSvgSize";
import { useRouter } from "next/router";
import { HiArrowLeft } from "react-icons/hi";
import Input from "./components/Input";

export default function Navbar() {
  const theme = useTheme();
  const router = useRouter();
  const isPathnameHomePage = router.pathname === "/";
  return (
    <div
      style={{
        backgroundColor: theme.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0em 5em 2em 5em",
      }}>
      <MainLink
        href="/"
        style={{
          visibility: isPathnameHomePage ? "hidden" : "visible",
        }}>
        <HiArrowLeft
          style={{
            ...useDefaultSvgSize,
          }}
        />

        <span>Voltar</span>
      </MainLink>

      <Input />

      <DarkThemeSwitcher />
    </div>
  );
}
