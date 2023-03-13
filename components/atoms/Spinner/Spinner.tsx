import useTheme from "@/foundations/Theme/useTheme";
import useIsDarkMode from "@/state/hooks/useIsDarkMode";
import styles from "./Spinner.module.css";

export default function Spinner() {
  const theme = useTheme();
  const isDarkMode = useIsDarkMode();

  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="blue"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        border: `16px solid ${isDarkMode ? theme.secondary : theme.white}`,
        borderTop: `16px solid ${isDarkMode ? theme.white : theme.secondary}`,
        borderRadius: "100%",
      }}
      className={`${styles.spinner}`}>
      <path
        d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM14.8737 50C14.8737 69.3997 30.6003 85.1263 50 85.1263C69.3997 85.1263 85.1263 69.3997 85.1263 50C85.1263 30.6003 69.3997 14.8737 50 14.8737C30.6003 14.8737 14.8737 30.6003 14.8737 50Z"
        fill="url(#paint0_angular_8_687)"
      />
      <defs>
        <radialGradient
          id="paint0_angular_8_687"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform=""
        />
      </defs>
    </svg>
  );
}
