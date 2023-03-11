import FilterProvider from "@/context/FilterProvider";
import ThemeProvider from "@/context/ThemeProvider";
import type { AppProps } from "next/app";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <FilterProvider>
        <Component {...pageProps} />
      </FilterProvider>
    </ThemeProvider>
  );
}
