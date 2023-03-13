import MainLink from "@/components/atoms/ImagePageLink/MainLink";
import DarkThemeSwitcher from "@/components/molecules/DarkThemeSwitcher/DarkThemeSwitcher";
import { FilterContext } from "@/context/FilterProvider";
import useMedia, { MEDIA } from "@/foundations/Medias/useMedia";
import useTheme from "@/foundations/Theme/useTheme";
import useDefaultSvgSize from "@/state/hooks/useDefaultSvgSize";
import { useRouter } from "next/router";
import { useContext } from "react";
import { HiArrowLeft } from "react-icons/hi";
import Input from "./components/Input";

export default function Navbar() {
  const theme = useTheme();
  const router = useRouter();
  const isPathnameHomePage = router.pathname === "/";
  const media = useMedia();
  const { setSelectedFilter } = useContext(FilterContext);

  function getContainerStyle() {
    if (media === MEDIA.MEDIUM || media === MEDIA.LARGE) {
      return {
        display: "flex",
        flexDirection: "row" as const,
        padding: "0em 5em 2em 5em",
      };
    }

    return {
      display: "flex",
      flexDirection: "column" as const,
      padding: "2em 5em 2em 5em",
    };
  }

  function getMainLinkStyle() {
    if (media === MEDIA.MEDIUM || media === MEDIA.LARGE) {
      return { order: "0" };
    }

    if (isPathnameHomePage) {
      return {
        display: "none",
      };
    }

    return { order: "-1" };
  }

  function getSwitcherStyle() {
    if (media === MEDIA.MEDIUM || media === MEDIA.LARGE) {
      return { order: "0" };
    }

    if (!isPathnameHomePage) {
      return {
        display: "none",
      };
    }

    return { order: "-1" };
  }

  function handleOnClickFilterContext() {
    setSelectedFilter("");
  }

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        ...getContainerStyle(),
        gap: "1em",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <div onClick={handleOnClickFilterContext}>
        <MainLink
          href="/"
          style={{
            visibility: isPathnameHomePage ? "hidden" : "visible",
            ...getMainLinkStyle(),
          }}>
          <HiArrowLeft
            style={{
              ...useDefaultSvgSize,
            }}
          />

          <span>Voltar</span>
        </MainLink>
      </div>

      <Input />

      <DarkThemeSwitcher
        style={{
          visibility: isPathnameHomePage ? "visible" : "hidden",
          ...getSwitcherStyle(),
        }}
      />
    </div>
  );
}
