import DarkThemeSwitcher from "@/components/molecules/DarkThemeSwitcher/DarkThemeSwitcher";
import useTheme from "@/foundations/Theme/useTheme";
import Input from "./components/Input";

export default function Navbar() {
  const theme = useTheme();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}>
      <Input />
      <DarkThemeSwitcher />
    </div>
  );
}
